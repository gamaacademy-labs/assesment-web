import Cookies from 'js-cookie';
import * as S from './styles';
import { Header } from '../../components/Header';
import { AllASsessmentList } from '../../components/AllAssessmentList';

export function AllAssements() {
	const userName = Cookies.get('user') as string;

	return (
		<S.Container>
			<Header title={userName} />
			<AllASsessmentList />
		</S.Container>
	);
}
