import styled from 'styled-components';

export const Content = styled.div`
	width: 80%;
	height: 70%;
	border: 1px solid #d7dbda;
	border-radius: 8px;
	margin: auto;
	padding: 1rem;
	position: relative;
	background-color: #fff;

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
		border: 2px solid #7d38db;
		background-color: #7d38db;
		color: #fff;
		transition: all 0.2s;

		p {
			margin: 0;
		}

		&:hover {
			border: 1px solid #202020;
			box-shadow: -4px 4px 0px #202020;
		}

		@media (max-width: 768px) {
			background-color: #7d38db;
			color: #fff;
		}

		@media (max-width: 425px) {
			flex-direction: column;

			p {
				margin-bottom: 0.5rem;
			}
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
