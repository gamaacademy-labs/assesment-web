import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
`;
export const Content = styled.div`
	width: 80%;
	height: 70%;
	border: 1px solid #d7dbda;
	border-radius: 8px;
	margin: auto;
	padding: 1rem;
	position: relative;

	.avaliation {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
		padding: 1rem;
		border: 1px solid #d7dbda;
		border-radius: 8px;
		width: 100%;
		position: relative;

		p {
			margin: 0;
		}
	}

	.teste {
		border: 1px solid #d7dbda;
		border-radius: 8px;
		margin-bottom: 1rem;
		display: flex;
		position: absolute;
		left: 0;
	}
`;
