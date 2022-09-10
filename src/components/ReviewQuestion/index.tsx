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
	name: string;
	title: string;
	index: number;
	correctAnswer: CorrectAnswer;
}

export function ReviewQuestion({
	alternative,
	index,
	title,
	correctAnswer,
}: ReviewQuestionProps) {
	const [showQuestion, setShowQuestion] = useState(false);

	const checkedAnswer =
		correctAnswer?.Correct[0] === correctAnswer?.alternativeId;
	const arrayLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

	const richtTextConverter = (richText: string) => {
		return { __html: richText };
	};

	const checkedAnswerColor = (indexAlternative: number) => {
		if (indexAlternative === correctAnswer.Correct[0]) {
			return '#0FD03F';
		}
		if (indexAlternative === correctAnswer.alternativeId) {
			return '#E2002F';
		}
		return '#fff';
	};

	return (
		correctAnswer && (
			<Container showQuestion={showQuestion}>
				<h3 onClick={() => setShowQuestion(!showQuestion)}>
					<div className="titleQuestion">
						<img src={iconAvaliationQuestions} />
						<p>
							Questão {index + 1}
							{checkedAnswer ? (
								<SubTitleAnswer circleColor="#0FD03F">
									<span className="circle" />
									<span>Resposta correta</span>
								</SubTitleAnswer>
							) : (
								<SubTitleAnswer circleColor="#E2002F">
									<span className="circle" />
									<span>Resposta incorreta</span>
								</SubTitleAnswer>
							)}
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
							{checkedAnswer
								? 'Parabéns, você acertou esta questão!'
								: `Ops! Você errou esta questão, a resposta correta é a alternativa ${
										arrayLetters[correctAnswer.Correct[0] - 1]
								  }!`}
						</p>
						<p>
							<strong>Explicação:</strong> Lorem ipsum dolor sit amet
						</p>
					</ContainerExplanation>
				</div>
			</Container>
		)
	);
}
