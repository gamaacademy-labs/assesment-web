import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	margin-bottom: 0;
	padding-bottom: 0;
`;

export const SubContainer = styled.div`
	display: flex;
	padding: 2rem;
	gap: 2rem;
	padding-bottom: 7.5rem;
	margin-bottom: 0;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
