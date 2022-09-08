import Cookies from 'js-cookie';
import { AllASsessmentList } from '../../components/AllAssessmentList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function AllAssements() {
	const userName = useSelector((state:RootState)=>state.persistedReducer.username)

	return (
		<S.Container>
			<Header title={userName} />
			<AllASsessmentList />
		</S.Container>
	);
}