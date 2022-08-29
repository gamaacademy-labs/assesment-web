import * as S from './styles';
import { Button, MaterialIcon, Typography } from '@gama-academy/smash-web';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export function AllASsessmentList() {
	const navigate = useNavigate();
	const assessments = [
		{
			id: '0416f181-78b4-499c-91c0-7b32a89773d5',
			createdAt: '2022-08-23T13:08:30.916Z',
			updatedAt: '2022-08-23T13:08:30.916Z',
			isActive: true,
			title: 'Avaliação de Node.js',
			finishedAt: '2023-08-28T03:00:00.000Z',
			qtdQuestions: 4,
			maxScore: 4,
		},
		{
			id: '1416f181-78b4-499c-91c0-7b32a89773d5',
			createdAt: '2022-08-23T13:08:30.916Z',
			updatedAt: '2022-08-23T13:08:30.916Z',
			isActive: true,
			title: 'Avaliação de JavaScript',
			finishedAt: '2023-08-28T03:00:00.000Z',
			qtdQuestions: 4,
			maxScore: 4,
		},
	];

	const goToSelectedAssessment = (id: string) => {
		Cookies.set('assessmentId', id);
		navigate(`/instructions`);
	};

	return (
		<S.Content>
			<Typography type="title">Avaliações</Typography>
			{assessments.map(assessment => (
				<div key={assessment.id} className="avaliation">
					<p>{assessment.title}</p>
					<Button
						color="primary.3"
						onClick={() => goToSelectedAssessment(assessment.id)}
						size="0"
						variant="filled"
					>
						<Typography mr={2}>Realizar avaliação</Typography>
						<MaterialIcon
							name="play_circle_filled"
							shape="none"
							shapeBackground="primary.3"
							color="white"
							type="round"
						/>
					</Button>
				</div>
			))}
		</S.Content>
	);
}
