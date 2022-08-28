import * as S from './styles';
import logo from '../../assets/images/Logo.svg';
import perfil from '../../assets/images/Perfil.svg';
import { MaterialIcon } from '@gama-academy/smash-web';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

interface HeaderProps {
	title: string;
}

export const Header = ({ title }: HeaderProps) => {
	const navigate = useNavigate();
	const logout = () => {
		Cookies.remove('user');
		toast.success('Logout realizado com sucesso!');
		window.location.href = '/';
	};

	return (
		<S.SHeaderContainer>
			<Link to="/">
				<img src={logo} alt="Logo da Gama Academy" />
			</Link>
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
				onClick={() => logout()}
			/>
		</S.SHeaderContainer>
	);
};
