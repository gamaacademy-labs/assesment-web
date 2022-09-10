import styled from 'styled-components';
import { boolean } from 'yup';

interface TypeContainer {
	showQuestion: boolean;
}

export const Container = styled.main<TypeContainer>`
	padding: 2rem;
	border: 1px solid #d7dbda;
	border-radius: 8px;
	color: ${props => props.theme['color-text']};
	flex: 1;
	background-color: #fff;

	.icon-dropdown {
		span {
			margin: 0;
			font-size: 1.2rem;
		}
		cursor: pointer;
		transform: ${props =>
			props.showQuestion ? 'rotateZ(-180deg)' : 'rotateZ(0deg)'};
		transition: transform 0.5s ease-in-out;
		margin-left: auto;
	}

	.questionBody {
		max-height: ${props => (props.showQuestion ? '100vh' : '0px')};
		overflow: hidden;
		transition: max-height 0.5s ease-in-out;
	}

	h3 {
		font-size: 1rem;
		margin-bottom: 0rem;
		display: flex;
		gap: 0.3rem;
		cursor: pointer;
	}

	p {
		font-size: 0.75rem;
		font-weight: 500;
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	span {
		font-size: 0.75rem;
		margin-top: 0.5rem;
		font-weight: 600;
	}
`;

interface TypeContainerInput {
	variant: string;
	checked: boolean;
}

export const ContainerInput = styled.div<TypeContainerInput>`
	font-size: 0.75rem;
	font-weight: 700;
	margin-top: 1rem;
	display: flex;

	border: 1px solid #ccd1cf;
	border-radius: 8px;

	background: ${props => props.variant};
	color: ${props =>
		props.variant === 'red' ? '#FFF' : props.theme['color-text']};
	box-shadow: ${props =>
		props.variant !== '#fff' ? '-4px 4px 0px #202020' : '0'};

	input {
		display: none;
	}

	label {
		padding: 0.5rem 0;
		width: 100%;
		cursor: pointer;
	}
	.styledInput {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 9px;
		height: 9px;
		padding: 0;
		margin: auto 0.5rem;
		border: ${props =>
			props.variant === 'red' ? '1px solid #fff' : '1px solid black'};
		border-radius: 50%;

		.active {
			width: 4px;
			height: 4px;
			background-color: ${props =>
				props.variant === 'red' ? '#fff' : 'black'};
			border-radius: 50%;
			display: ${props => props.checked ? 'block' : 'none'};
		}
	}
`;
