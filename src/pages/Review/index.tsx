import Cookies from 'js-cookie';
import { Header } from '../../components/Header';
import { ReviewAnswers } from '../../components/ReviewAnswers';
import { Container, SubContainer } from './styles';

export const Review = () => {
	const title = Cookies.get('titleAssessment') as string;

	return (
		<Container className="body-container">
			<Header title={title} />
			<SubContainer className="body-container">
				<ReviewAnswers/>
			</SubContainer>
		</Container>
	);
};
