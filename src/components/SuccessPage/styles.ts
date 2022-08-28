import styled from 'styled-components';

export const Container = styled.main`
	border: 1px solid #dadada;
	border-radius: 8px;
	padding: 1.5rem;
	flex: 1;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #141414;
	background: #fff;

	h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 1.5rem;
		margin-bottom: 1rem;
	}

	p {
		display: block;
		margin-bottom: 2rem;
	}

	button {
		padding: 0.5rem 3.5rem;
	}
`;
