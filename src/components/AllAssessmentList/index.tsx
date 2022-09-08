import { Button, MaterialIcon, Typography } from '@gama-academy/smash-web';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Assessment } from '../../@types';
import { api } from '../../services/mainApi';
import { getAllAssessmentList } from '../../services/mainApi/assessments';
import { finishingAssessment } from '../../services/user-assessment';
import { RootState } from '../../store';
import { setUser } from '../../store/user';
import * as S from './styles';

export function AllASsessmentList() {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const [assessments, setAssessments] = useState<Assessment[]>([]);
	const token = useSelector((state: RootState) => state.persistedReducer.token);
	api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	const assessmentsNotStartedYet = assessments.filter(assessment => assessment.status === 0)
	const assessmentAlreadyStarted = assessments.filter(assessment => assessment.status !== 0)
	const assessmentAlreadyStartedButNotFinished = assessments.filter(assessment => assessment.status === 1)

	const goToSelectedAssessment = (id: string) => {
		Cookies.set('assessmentId', id);
		navigate(`/success`);
	};


	useEffect(() => {
		async function finishingAssessmentsWithStatus1() {
			if (assessmentAlreadyStartedButNotFinished.length > 0) {
				assessmentAlreadyStartedButNotFinished.map(async (assessment) => {
					await finishingAssessment(assessment.id)
				})
			}
		}
		finishingAssessmentsWithStatus1()
	}, [])

	useEffect(() => {
		getAllAssessmentList().then(res => {
			setAssessments(res);
		}).catch(() => {
			dispatch(setUser({ token: '' }))
		});
	}, []);

	return (
		<>
			<S.Content>
				<Typography type="title">Avaliações para fazer</Typography>
				{assessmentsNotStartedYet.length === 0 ? (
					<Typography>Você já fez todas as avaliações!</Typography>
				) :
					(
						assessmentsNotStartedYet.map((assessment: Assessment) => (
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
						))
					)
				}
			</S.Content>
			<S.Content>
				<Typography type="title">Avaliações realizadas</Typography>
				{assessmentAlreadyStarted.length === 0 ? (
					<Typography>Você ainda não concluiu nenhuma avaliação!</Typography>
				) :
					(
						assessmentAlreadyStarted.map((assessment: Assessment) => (
							<div key={assessment.id} className="avaliation">
								<p>{assessment.title}</p>
								<Button
									color="primary.3"
									onClick={() => goToSelectedAssessment(assessment.id)}
									size="0"
									variant="filled"
								>
									<Typography mr={2}>Visualizar nota</Typography>
									<MaterialIcon
										name="play_circle_filled"
										shape="none"
										shapeBackground="primary.3"
										color="white"
										type="round"
									/>
								</Button>
							</div>
						))
					)
				}
			</S.Content>
		</>
	);
}