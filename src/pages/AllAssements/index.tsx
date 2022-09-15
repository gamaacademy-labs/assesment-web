import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { AllASsessmentList } from '../../components/AllAssessmentList';
import { Header } from '../../components/Header';
import { RootState } from '../../store';
import * as S from './styles';

export function AllAssements() {
	const userName = useSelector((state: RootState) => state.persistedReducer.username)
	Cookies.set('assessmentId','')

	return (
		<S.Container>
			<Header title={userName} />
			<AllASsessmentList />
		</S.Container>
	);
}