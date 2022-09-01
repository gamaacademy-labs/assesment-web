import Cookies from 'js-cookie';
import { AllASsessmentList } from '../../components/AllAssessmentList';
import { Header } from '../../components/Header';
import * as S from './styles';

export function AllAssements() {
	const userName = Cookies.get('user') as string;

	return (
		<S.Container>
			<Header title={userName} />
			<AllASsessmentList />
		</S.Container>
	);
}