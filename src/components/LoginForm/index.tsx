import * as S from './styles';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { getUsers, loginUser } from '../../services/mainApi/users';
import { api } from '../../services/mainApi';
import { useNavigate } from 'react-router-dom';
import { Input } from '@gama-academy/smash-web';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/user';

const validationSchema = Yup.object({
	username: Yup.string().required('*'),
});

export const LoginForm: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			username: '',
		},

		validationSchema,

		onSubmit: async values => {
			const token = await loginUser({ username: values.username });

			if (!token) {
				toast.warn('Usuário inválido!');
				setIsLoading(false);
				return;
			}

			api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			const user = await getUsers(values.username);
			dispatch(setUser({ username: values.username, token: token }));

			toast.success('Login realizado com sucesso!');
			setIsLoading(false);
			formik.resetForm();
		},
	});

	return (
		<S.SContainer>
			<S.SForm onSubmit={formik.handleSubmit}>
				<Form.Group>
					<Input
						label="Username"
						name="username"
						onChange={formik.handleChange}
						placeholder="Type here"
						startAdornment={
							<img
								src="https://imgur.com/aBZXHy0.png"
								style={{ height: 20, width: 20 }}
							/>
						}
						value={formik.values.username}
						type="text"
						id="username"
					/>
					{formik.errors.username && <span>{formik.errors.username}</span>}
				</Form.Group>
				<S.SButton
					buttonType="submit"
					loading={isLoading}
					onClick={() => {
						formik.values.username !== '' && setIsLoading(true);
					}}
					size="1"
				>
					Login
				</S.SButton>
			</S.SForm>
		</S.SContainer>
	);
};
