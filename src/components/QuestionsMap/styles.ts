import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.aside`
	padding: 2rem;
	background-color: #fff;
	border: 1px solid #d7dbda;
	border-radius: 8px;
	width: fit-content;
	height: fit-content;
	background: #fff;

	color: ${props => props.theme['color-text']};
	width: 100%;
	max-width: 300px;

	@media (max-width: 768px) {
		max-width: 100%;
	}

	header {
		img {
			margin-right: 0.75rem;
		}
	}

	button {
		background: ${props => props.theme['purple']};
		border-radius: 8px;
		padding: 0.35rem;
		color: ${props => props.theme['white']};
		font-size: 0.875rem;
		font-weight: 700;
		border: 0;
		width: 100%;
		margin-top: 1rem;
		cursor: pointer;
	}
`;

export const SubContainerQuestions = styled.div`
	margin: 1rem auto;
	color: ${props => props.theme['purple']};
	font-size: 0.75rem;
	gap: 1rem;

	display: grid;
	grid-template-columns: repeat(5, auto);
	grid-template-rows: auto;

	border: 1px solid #d7dbda;
	border-radius: 8px;
	padding: 1rem 1.5rem;
`;

interface TypeLinkMapQuestions {
	variant: 'checked' | 'unchecked';
	isactive: 'active' | 'disabled';
}

export const LinkMapQuestions = styled(Link)<TypeLinkMapQuestions>`
	font-size: 0.75rem;
	font-weight: ${props => props.isactive && 'bold'};
	width: 2rem;
	height: 2rem;
	color: #d7dbda;
	text-decoration: none;
	border: ${props =>
		props.isactive === 'active' ? '1px solid #7d38db' : '1px solid #d7dbda'};
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.variant === 'checked' && '#7d38db'};
	color: ${props =>
		(props.variant === 'checked' && '#fff') ||
		(props.isactive === 'active' && '#7d38db')};
	transition: opacity 0.2s;

	&:hover {
		color: ${props => props.variant === 'checked' && '#fff'};
		opacity: ${props => props.variant === 'checked' && '0.85'};
	}
`;

export const DivInputRadio = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;

	margin-bottom: 0.5rem;

	label {
		font-size: 0.625rem;
		letter-spacing: 0.05em;
	}
`;
