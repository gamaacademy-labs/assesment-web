import {
	Container,
	ContainerExplanation,
	ContainerInput,
	Content,
	SubTitleAnswer,
} from './styles';
import iconAvaliationQuestions from '../../assets/icons/iconAvaliationQuestions.svg';
import { useState } from 'react';
import { Alternative, CorrectAnswer } from '../../@types';
import { MaterialIcon } from '@gama-academy/smash-web';

interface ReviewQuestionProps {
	alternative: Alternative[];
	id: string;
	title: string;
	index: number;
	correctAnswer: CorrectAnswer;
}

export function ReviewQuestion({
	alternative,
	index,
	title,
	correctAnswer,
	id
}: ReviewQuestionProps) {
	const [showQuestion, setShowQuestion] = useState(false);

	const checkedAnswer =
		correctAnswer?.isCorrect == correctAnswer?.alternativeId;

	const arrayLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

	const richtTextConverter = (richText: string) => {
		return { __html: richText };
	};

	const checkedAnswerColor = (indexAlternative: number) => {
		if (indexAlternative === correctAnswer.isCorrect) {
			return '#0FD03F';
		}
		if (indexAlternative === correctAnswer.alternativeId) {
			return '#E2002F';
		}
		return '#fff';
	};

	const renderSubTitle = () => {
		if (checkedAnswer) {
			return (
				<SubTitleAnswer circleColor="#0FD03F">
					<span className="circle" />
					<span>Resposta correta</span>
				</SubTitleAnswer>
			);
		}
		if (!checkedAnswer && correctAnswer?.alternativeId !== null) {
			return (
				<SubTitleAnswer circleColor="#E2002F">
					<span className="circle" />
					<span>Resposta incorreta</span>
				</SubTitleAnswer>
			);
		}
		if (correctAnswer?.alternativeId == null) {
			return (
				<SubTitleAnswer circleColor="#D7DBDA">
					<span className="circle" />
					<span>Não respondida</span>
				</SubTitleAnswer>
			);
		}
	};

	const textExplanation = () => {
		if (checkedAnswer) {
			return 'Parabéns, você acertou esta questão!';
		}
		if (!checkedAnswer && correctAnswer?.alternativeId !== null) {
			return `Ops! Você errou esta questão, a resposta correta é a alternativa ${
				arrayLetters[correctAnswer.isCorrect - 1]
			}!`;
		}
		if (correctAnswer?.alternativeId == null) {
			return 'Ops, você não respondeu esta questão!'
		}
	};

	return (
		correctAnswer && (
			<Container showQuestion={showQuestion}>
				<h3 onClick={() => setShowQuestion(!showQuestion)}>
					<div id={id} className="titleQuestion">
						<img src={iconAvaliationQuestions} />
						<p>
							Questão {index + 1}
							{renderSubTitle()}
						</p>
						<div className="icon-dropdown">
							<MaterialIcon color="#202020" name="expand_more" />
						</div>
					</div>
				</h3>

				<div className="questionBody">
					<div dangerouslySetInnerHTML={richtTextConverter(title)} />

					{alternative.map((item, index) => (
						<Content key={item.id}>
							<ContainerInput
								variant={checkedAnswerColor(index + 1)}
								changeDisplay={
									checkedAnswerColor(index + 1) !== '#fff' ? true : false
								}
								width={10}
								marginRight={1}
							>
								<strong>
									{checkedAnswerColor(index + 1) === '#0FD03F' ? (
										<span className="checked-answers">
											<MaterialIcon color="##fff" size={13} name="done" />
											Correta
										</span>
									) : (
										<span className="checked-answers">
											<MaterialIcon color="##fff" size={13} name="close" />
											Escolhida
										</span>
									)}
								</strong>
							</ContainerInput>

							<ContainerInput
								width={100}
								key={item.id}
								variant={checkedAnswerColor(index + 1)}
								checked={
									checkedAnswerColor(index + 1) !== '#fff' ? true : false
								}
								changeDisplay
							>
								<input
									onChange={() => {}}
									value={item.id}
									id={item.id}
									type="radio"
									disabled
								/>

								<label className="styledInput" htmlFor={item.id}>
									<div className="active" />
								</label>

								<label htmlFor={item.id}>{item.title}</label>
							</ContainerInput>
						</Content>
					))}
					<ContainerExplanation TextColor={checkedAnswer}>
						<p className="textExplanation">
							{textExplanation()}
						</p>

						{correctAnswer?.alternativeId !== null && (
							<p>
								<strong>Explicação:</strong> Lorem ipsum dolor sit amet
							</p>
						)}
					</ContainerExplanation>
				</div>
			</Container>
		)
	);
}
