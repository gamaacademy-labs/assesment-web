import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ilus1 from '../../assets/illustration.png';

import {
	Button,
	DivButton,
	DivCard,
	DivInformation,
	DivModal,
	Img,
} from './styles';
import {
	Button as ButtonSmash,
	ThemeColorsName,
} from '@gama-academy/smash-web';

interface Props {
	title: string;
	text: string;
	colorButton: ThemeColorsName;
	textButton: string;
	displayButton?: string;
	imageModal?: string;
	onClickCancel: () => void;
	onClickConfirm: () => void;
}

export const ModalInfo = (props: Props) => {
	const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);
	return (
		<DivModal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<DivCard>
					<Img src={props.imageModal ? props.imageModal : ilus1} alt="ilustração" />
					<DivInformation>
						<h4>{props.title}</h4>
						<p>{props.text}</p>
					</DivInformation>
				</DivCard>
				<DivButton>
					<Button>
						<ButtonSmash
							color={props.colorButton}
							onClick={props.onClickConfirm}
							fluid
						>
							{props.textButton}
						</ButtonSmash>
					</Button>
					<Button display={props.displayButton}>
						<ButtonSmash
							color="brand.secondary"
							onClick={props.onClickCancel}
							fluid
							variant="outline"
						>
							canclear
						</ButtonSmash>
					</Button>
				</DivButton>
			</Modal.Body>
		</DivModal>
	);
};
