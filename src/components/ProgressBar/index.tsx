import {
	Box,
	Button,
	MaterialIcon,
	ProgressBar as Progress_Bar,
	Typography
} from '@gama-academy/smash-web';
import { useEffect, useState } from 'react';
import { Question } from '../../@types';
import {
	Div,
	DivAllButton,
	DivButton,
	DivInfoBar,
	DivInformation,
	MatiralIconStyles
} from './styles';

interface ProgressBarProps {
	questions: Question[];
	questionIndex: number;
	setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ProgressBar = ({
	questions,
	questionIndex,
	setQuestionIndex,
}: ProgressBarProps) => {
	const [indexCopy, setIndexCopy] = useState(questionIndex);
	const numQuestion = questions.length;
	const change = indexCopy < numQuestion;

	const nextQuestion = (signal: string) => {
		if (signal === '+' && questionIndex < numQuestion - 1) {
			setQuestionIndex(questionIndex + 1);
			setIndexCopy(indexCopy + 1);
			return;
		}

		if (signal === '+' && indexCopy < numQuestion) {
			setIndexCopy(indexCopy + 1);
			return;
		}

		if (signal === '-' && questionIndex >= 1) {
			setQuestionIndex(questionIndex - 1);
			setIndexCopy(indexCopy - 1);
			return;
		}
	};

	useEffect(() => {
		setIndexCopy(questionIndex);
	}, [questionIndex]);

	return (
		<Div>
			<DivInfoBar>
				<DivInformation>
					<MaterialIcon color="white" name="ballot" />
					<p className="question">Questões</p>
					<p className="numQuestion">
						{indexCopy}/{numQuestion}
					</p>
				</DivInformation>
				<Progress_Bar
					max={numQuestion}
					value={indexCopy}
					percentageSide="right"
					margin={undefined}
					m={undefined}
					mt={undefined}
					marginTop={undefined}
					mb={undefined}
					marginBottom={undefined}
					ml={undefined}
					marginLeft={undefined}
					mr={undefined}
					marginRight={undefined}
					my={undefined}
					marginY={undefined}
					mx={undefined}
					marginX={undefined}
				/>
			</DivInfoBar>
			<DivAllButton>
				<DivButton num={indexCopy}>
					<Button
						className="backButton"
						size="2"
						fluid
						onClick={() => nextQuestion('-')}
						variant="filled"
						color="brand.secondary"
					>
						<Box alignment="center" dir="row" justifyContent="space-between">
							<MaterialIcon
								color="white"
								name="arrow_back"
								shapeBackground="primary.3"
							/>
							<Typography fontWeight="semi_bold" mr="2" numberOfLines={1}>
								Anterior
							</Typography>
						</Box>
					</Button>
				</DivButton>
				<DivButton>
					<Button
						size="2"
						fluid
						onClick={() => nextQuestion('+')}
						disabled={false}
						color={change ? 'white' : 'primary.3'}
					>
						<Box
							className="box"
							alignment="center"
							dir="row"
							justifyContent="space-between"
						>
							<Typography fontWeight="semi_bold" mr="2" numberOfLines={1}>
								{change ? 'Próxima' : 'Entregar avaliação'}
							</Typography>
							<MatiralIconStyles
								size={20}
								name={change ? 'arrow_forward' : 'flag'}
								shape="round"
								color="black"
								shapeBackground={change ? 'primary.3' : 'contrast.dark'}
								changeColor={change}
								type="round"
							/>
						</Box>
					</Button>
				</DivButton>
			</DivAllButton>
		</Div>
	);
};
