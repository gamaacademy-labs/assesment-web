import * as S from './styles';
import clockIcon from '../../assets/icons/clockIcon.svg';
import starIcon from '../../assets/icons/starIcon.svg';

export function MyAttemptCard() {
	return (
		<S.Container>
			<strong>
				<img src={clockIcon} alt="Ícone de relógio" />
				Minha tentativa
			</strong>
			<S.SubContainerInfos>
				<strong>
					<small>Finalizada em: </small>
				</strong>
				<span>22/02/2021</span>
			</S.SubContainerInfos>
			<S.SubContainerInfos>
				<img src={starIcon} alt="Ícone de estrela" />
				<strong>Nota: </strong>
				<span>8.0</span>
			</S.SubContainerInfos>
		</S.Container>
	);
}
