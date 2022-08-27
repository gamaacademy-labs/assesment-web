import { useEffect, useState } from "react";
import {format} from 'date-fns'

import { AvaliationInstructions } from "../../components/AvaliationInstructions";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalInfo } from "../../components/ModalInfo";
import { SummaryAvaliation } from "../../components/SummaryAvaliation";
import { getAssessment } from "../../services/mainApi/assessments";
import { Assessment } from "../../types";
import { Container } from "./styles";
import Cookies from "js-cookie";

export function HomeAssessment() {
	const [isDisabled, setIsDisabled] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [assessment, setAssessment] = useState({} as Assessment);

	useEffect(() => {
		const takeAssessment = async () => {
			const response = await getAssessment(
				"0416f181-78b4-499c-91c0-7b32a89773d5"
			);
			Cookies.set('titleAssessment', response.title)
			return setAssessment(
        {...response,
          finishedAt: format(new Date(response.finishedAt), 'dd/MM/yyyy')
        }
      );
		};
		takeAssessment();
	}, [assessment]);

	return (
		<>
			<Header title={assessment.title} />
			<Container>
				<SummaryAvaliation
					title={assessment.title}
					qtdQuestions={assessment.qtdQuestions}
					maxScore={assessment.maxScore}
					setShowModal={setShowModal}
          finishedAt={assessment.finishedAt}
				/>
				<AvaliationInstructions
					isDisabled={isDisabled}
					setIsDisabled={setIsDisabled}
				/>
				<ModalInfo showModal={showModal} setShowModal={setShowModal} />
			</Container>
			<Footer isDisabled={isDisabled} />
		</>
	);
}
