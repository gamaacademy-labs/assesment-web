import { Button, MaterialIcon, Typography } from '@gama-academy/smash-web';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Assessment } from '../../@types';
import { api } from '../../services/mainApi';
import { getAllAssessmentList } from '../../services/mainApi/assessments';
import { finishingAssessment } from '../../services/userAssessment';
import { RootState } from '../../store';
import { setUser } from '../../store/user';
import * as S from './styles';

export function AllASsessmentList() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [assessments, setAssessments] = useState<Assessment[]>([]);
	const token = useSelector((state: RootState) => state.persistedReducer.token);
	api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	const assessmentsNotStartedYet = assessments.filter(
		assessment => assessment.status === 0,
	);
	const assessmentAlreadyStarted = assessments.filter(
		assessment => assessment.status !== 0,
	);
	const assessmentAlreadyStartedButNotFinished = assessments.filter(
		assessment => assessment.status === 1,
	);

	const goToSelectedAssessment = (assessment: Assessment) => {
		Cookies.set('assessmentId', assessment.id);
		Cookies.set('titleAssessment', assessment.title);
		navigate(`/success`);
	};
	const goToAssessmentInstructions = (assessment: Assessment) => {
		Cookies.set('assessmentId', assessment.id);
		Cookies.set('titleAssessment', assessment.title);
		navigate(`/instructions`);
	};

	useEffect(() => {
		async function finishingAssessmentsWithStatus1() {
			if (assessmentAlreadyStartedButNotFinished.length > 0) {
				assessmentAlreadyStartedButNotFinished.map(async assessment => {
					await finishingAssessment(assessment.id);
				});
			}
		}
		finishingAssessmentsWithStatus1();
	}, [assessmentAlreadyStartedButNotFinished]);

	useEffect(() => {
		getAllAssessmentList()
			.then(res => {
				setAssessments(res);
			})
			.catch(() => {
				dispatch(setUser({ token: '' }));
			});
	}, []);

	return (
		<>
			<S.Content>
				<Typography type="title">Avalia????es para fazer</Typography>
				{assessmentsNotStartedYet.length === 0 ? (
					<Typography>Voc?? j?? fez todas as avalia????es!</Typography>
				) : (
					assessmentsNotStartedYet.map((assessment: Assessment) => (
						<div key={assessment.id} className="avaliation">
							<p>{assessment.title}</p>
							<Button
								color="primary.3"
								onClick={() => goToAssessmentInstructions(assessment)}
								size="0"
								variant="filled"
							>
								<Typography mr={2}>Realizar avalia????o</Typography>
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
				)}
			</S.Content>
			<S.Content>
				<Typography type="title">Avalia????es realizadas</Typography>
				{assessmentAlreadyStarted.length === 0 ? (
					<Typography>Voc?? ainda n??o concluiu nenhuma avalia????o!</Typography>
				) : (
					assessmentAlreadyStarted.map((assessment: Assessment) => (
						<div key={assessment.id} className="avaliation">
							<p>{assessment.title}</p>
							<Button
								color="primary.3"
								onClick={() => goToSelectedAssessment(assessment)}
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
				)}
			</S.Content>
		</>
	);
}
