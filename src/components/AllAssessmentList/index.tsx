import * as S from './styles';
import { Button, MaterialIcon, Typography } from '@gama-academy/smash-web';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getAllAssessmentList } from '../../services/mainApi/assessments';
import { api } from '../../services/mainApi';
import { Assessment } from '../../@types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setUser } from '../../store/user';

export function AllASsessmentList() {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const [assessments, setAssessments] = useState<Assessment[]>([]);
	const token = useSelector((state:RootState)=>state.persistedReducer.token);
	api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	const goToSelectedAssessment = (id: string) => {
		Cookies.set('assessmentId', id);
		navigate(`/instructions`);
	};

	useEffect(() => {
		getAllAssessmentList().then(res => {
			setAssessments(res);
		}).catch(()=>{
			dispatch(setUser({token: ''}))
		});
	}, []);

	return (
		<S.Content>
			<Typography type="title">Avaliações</Typography>
			{assessments.map((assessment: Assessment) => (
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
