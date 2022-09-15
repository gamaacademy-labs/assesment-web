import { Box, Button, MaterialIcon, Typography } from '@gama-academy/smash-web';
import { useNavigate } from 'react-router-dom';
import { startingAssessment } from '../../services/userAssessment';
import * as S from './styles';

interface FooterProps {
	isDisabled: boolean;
	assessmentId: string;
}

export const Footer = ({ isDisabled, assessmentId }: FooterProps) => {
	const navigate = useNavigate();

	async function handleStartedAssessment() {
		await startingAssessment(assessmentId)
		navigate('/assessment')
	}

	return (
		<S.SFooterContainer>
			<Button
				onClick={handleStartedAssessment}
				size="1"
				color="white"
				borderRadius="md"
				disabled={isDisabled}
			>
				<Box alignment="center" dir="row" justifyContent="space-between">
					<Typography fontWeight="semi_bold" mr="1">
						Iniciar avaliação
					</Typography>
					<MaterialIcon
						name="play_arrow"
						color="primary.3"
						shape="round"
						shapeBackground="primary.3"
						stroke={2}
						strokeColor="primary.3"
						type="round"
					/>
				</Box>
			</Button>
		</S.SFooterContainer>
	);
};
