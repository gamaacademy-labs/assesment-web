import { Button } from '@gama-academy/smash-web';
import Cookies from 'js-cookie';
import illustration from '../../assets/images/illustration-page-success.png';
import { Container } from './styles';

interface SuccessPageProps {
	score: number;
}

export function SuccessPage({ score }: SuccessPageProps) {
	const title = Cookies.get('titleAssessment') as string;

	return (
		<Container>
			<img src={illustration} />
			<h3>Quiz {title} entregue com sucesso</h3>
			<p>
				Parabéns! Você acertou <strong>{score} questões</strong>!
			</p>
			<Button
				color="success"
				onClick={function noRefCheck() { }}
				size="0"
				variant="filled"
			>
				Revisar tentativa
			</Button>
		</Container>
	);
}
