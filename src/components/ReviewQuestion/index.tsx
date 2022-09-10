import { Container, ContainerInput, Content } from './styles';
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

	console.log(correctAnswer);

	return (
		correctAnswer && (
			<Container showQuestion={showQuestion}>
				<h3 onClick={() => setShowQuestion(!showQuestion)}>
					<img src={iconAvaliationQuestions} /> Questão {index + 1}
					<div className="icon-dropdown">
						<MaterialIcon color="#202020" name="expand_more" />
					</div>
				</h3>

				<div className="questionBody">
					<div dangerouslySetInnerHTML={richtTextConverter(title)} />

					{alternative.map((item, index) => (
						<Content>
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
				</div>
			</Container>
		)
	);
}
