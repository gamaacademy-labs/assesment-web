import styled from 'styled-components';

export const Container = styled.main`
	padding: 2rem;
	border: 1px solid #d7dbda;
	border-radius: 8px;
	color: ${props => props.theme['color-text']};
	flex: 1;

	h3 {
		font-size: 1rem;
		margin-bottom: 1rem;
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
	variant: boolean;
}

export const ContainerInput = styled.div<TypeContainerInput>`
	font-size: 0.75rem;
	font-weight: 700;
	margin-top: 1rem;
	padding: 0.5rem;
	display: flex;

	border: 1px solid #ccd1cf;
	border-radius: 8px;

	background: ${props => (props.variant ? '#7D38DB' : '#FFF')};
	color: ${props => (props.variant ? '#FFF' : props.theme['color-text'])};
	box-shadow: ${props => props.variant && '-4px 4px 0px #202020'};

	input {
		margin-right: 0.5rem;
	}

	&:checked {
		background: #7d38db;
	}

	label {
		flex: 1;
	}
`;
