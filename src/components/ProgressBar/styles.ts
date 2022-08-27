import { MaterialIcon } from '@gama-academy/smash-web';
import styled from 'styled-components';

interface props {
	margin?: number;
	num?: number;
	changeColor?: boolean;
}

export const Div = styled.div`
	position: fixed;
	width: 100%;
	height: 4.5rem;
	left: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	padding: 16px 32px;
	background: ${props => props.theme['purple']};
	box-shadow: 0px -2px 4px rgba(36, 37, 35, 0.24);

	@media (max-width: 768px) {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		height: auto;
		gap: 1rem;
	}
`;

export const DivInfoBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-right: 2.5rem;

	@media (max-width: 768px) {
		margin-right: 0;
	}
`;

export const DivInformation = styled.div<props>`
	display: flex;
	align-items: center;
	color: white;

	.question {
		display: flex;
		margin: 0;
		margin-left: 0.75rem;
		@media (max-width: 768px) {
			display: none;
		}
	}
	.numQuestion {
		margin: 0 0.5rem;
	}
`;

export const DivAllButton = styled.div`
	display: flex;
	gap: 1rem;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const DivButton = styled.div<props>`
	display: ${props => (props.num == 0 ? 'none' : 'block')};
	@media (max-width: 768px) {
		width: 100%;
	}

	.backButton {
		border: 1px solid white;

		&:active {
			border: none;
		}
	}
`;

export const MatiralIconStyles = styled(MaterialIcon)<props>`
	span {
		color: ${props => (props.changeColor ? 'black' : '#68DE5A')};
	}
`;
