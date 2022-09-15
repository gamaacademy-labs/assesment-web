import { MaterialIcon } from '@gama-academy/smash-web';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/images/Logo.svg';
import perfil from '../../assets/images/Perfil.svg';
import { finishingAssessment } from '../../services/userAssessment';
import { setUser } from '../../store/user';
import { ModalAssessment } from '../ModalAssessment';
import * as S from './styles';

interface HeaderProps {
	title: string;
	setShowModalAssessment?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ title }: HeaderProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const [showModalLogout, setShowModalLogout] = useState(false);
	const [showModalHome, setShowModalHome] = useState(false);
	const assessmentId = Cookies.get('assessmentId') as string;

	const isOnAssessment = location.pathname === '/assessment' ? true : false;

	const logout = async () => {
		if(assessmentId && isOnAssessment){
			await finishingAssessment(assessmentId)
		}
		toast.success('Logout realizado com sucesso!');
		dispatch(setUser({ token: '' }));
		navigate('/login');
	};

	const handleOpenLogoutModal = () => {
		isOnAssessment ? setShowModalLogout(true) : logout();
	};
	const handleOpenHomeModal = () => {
		isOnAssessment ? setShowModalHome(true) : navigate('/');
	};

	return (
		<S.SHeaderContainer>
			<a onClick={handleOpenHomeModal}>
				<img src={logo} alt="Logo da Gama Academy" />
			</a>
			<S.SContainer>
				<S.SInputSearch
					label=""
					onChangeValue={function noRefCheck() {}}
					onClear={function noRefCheck() {}}
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
				onClick={handleOpenLogoutModal}
			/>
			<ModalAssessment
				title="Tem certeza que deseja sair?"
				text="Atenção! Ao sair, sua prova será finalizada."
				colorButton="error"
				textButton="Sair da avaliação"
				onClickCancel={() => setShowModalLogout(false)}
				show={showModalLogout}
				onClickConfirm={logout}
			/>
			<ModalAssessment
				title="Tem certeza que deseja sair?"
				text="Atenção! Ao sair, sua prova será finalizada."
				colorButton="error"
				textButton="Sair da avaliação"
				onClickCancel={() => setShowModalHome(false)}
				show={showModalHome}
				onClickConfirm={()=> navigate('/')}
			/>
		</S.SHeaderContainer>
	);
};
