import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 2rem;
	background: #f8f8f8;
	gap: 2rem;
	height: calc(100vh - 4.5rem);

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: fit-content;
	}

	/* @media (max-width: 768px) {
		max-width: 80%;
	} */
`;
