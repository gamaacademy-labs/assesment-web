import { MaterialIcon } from '@gama-academy/smash-web';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/images/Logo.svg';
import perfil from '../../assets/images/Perfil.svg';
import { setUser } from '../../store/user';
import * as S from './styles';

interface HeaderProps {
	title: string;
}

export const Header = ({ title }: HeaderProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation()

	const isOnAssessment = location.pathname === '/assessment' ? true : false

	const logout = () => {
		if (!isOnAssessment) {
			toast.success('Logout realizado com sucesso!');
			dispatch(setUser({ token: '' }))
			navigate('/login')
		}
	};

	return (
		<S.SHeaderContainer>
			{!isOnAssessment ? <Link to="/"><img src={logo} alt="Logo da Gama Academy" />
			</Link> : <Link to="#"><img src={logo} alt="Logo da Gama Academy" />
			</Link>}
			<S.SContainer>
				<S.SInputSearch
					label=""
					onChangeValue={function noRefCheck() { }}
					onClear={function noRefCheck() { }}
					placeholder="Digite uma palavra-chave"
					value=""
					m={undefined}
					margin={undefined}
					mt={undefined}
					marginTop={undefined}
					mb={undefined}
					marginBottom={undefined}
					ml={undefined}
					marginLeft={undefined}
					mr={undefined}
					marginRight={undefined}
					my={undefined}
					marginY={undefined}
					mx={undefined}
					marginX={undefined}
				/>
			</S.SContainer>
			<S.STypography numberOfLines={1}>{title}</S.STypography>
			<S.STypography>Carreiras</S.STypography>
			<S.SMobileIcon name="search" color="black" />
			<MaterialIcon name="apps" color="black" />
			<S.SMaterialIcon
				color="white"
				name="notifications"
				size={18}
				shape="round"
				shapeStyle={{ width: 24, height: 24 }}
			/>
			<S.SMobileIcon name="menu" color="black" />
			<S.SImage
				src={perfil}
				alt="Foto do usuário. Clique para sair"
				onClick={() => logout()}
			/>
		</S.SHeaderContainer>
	);
};
