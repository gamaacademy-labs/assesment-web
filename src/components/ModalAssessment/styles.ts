import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

interface props {
	transform?: number;
	backgroundColor?: string;
	display?: string;
}

export const DivModal = styled(Modal)`
	.modal-content {
		width: 100%;
		display: flex;
		height: auto;
	}
	.modal-header {
		border: none;
		z-index: 1;
	}
	.modal-body {
		margin-top: -3rem;
		margin-bottom: 0;
		overflow: hidden;
	}
	.btn-close {
		font-size: 12px;
	}
	.btn-close:focus {
		outline: 0;
		box-shadow: none;
	}
	@media (max-width: 800px) {
		width: 100%;
	}
`;

export const DivCard = styled.div<props>`
	transition: display 0.5s ease 0s;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	padding-bottom: 0;
`;

export const Img = styled.img`
	width: 150px;
	margin: 0 auto;
	@media (max-width: 800px) {
		width: 50%;
		height: 100%;
		margin: 0 auto;
	}
`;

export const DivInformation = styled.div`
	text-align: center;
	margin: 0 auto;
	h4 {
		margin: 1rem 0;
		font-weight: bold;
	}
	p {
		margin: 0;
	}
`;

export const DivButton = styled.div<props>`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	gap: 1rem;
	@media (max-width: 768px) {
		flex-direction: column-reverse;
		gap: 1rem;
	}
`;

export const Button = styled.div<props>`
	width: 100%;
	display: ${props => props.display};
	@media (max-width: 768px) {
		width: 100%;
	}
`;
