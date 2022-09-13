import { format } from 'date-fns';
import { ScoreAssessment } from '../../@types';
import clockIcon from '../../assets/icons/clockIcon.svg';
import starIcon from '../../assets/icons/starIcon.svg';
import * as S from './styles';

interface TypeMyAttemptCard {
	gettingScoreAssessment: ScoreAssessment;
}

export function MyAttemptCard({ gettingScoreAssessment }: TypeMyAttemptCard) {

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
				<span>{gettingScoreAssessment.updatedAt && format(new Date(gettingScoreAssessment.updatedAt), 'dd/MM/yyyy')}</span>
			</S.SubContainerInfos>
			<S.SubContainerInfos>
				<img src={starIcon} alt="Ícone de estrela" />
				<strong>Nota: </strong>
				<span>{gettingScoreAssessment.score}.0</span>
			</S.SubContainerInfos>
		</S.Container>
	);
}
