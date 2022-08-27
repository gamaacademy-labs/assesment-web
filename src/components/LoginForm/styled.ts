import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { Button } from '@gama-academy/smash-web';

export const SForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2vh;

	span {
		color: #f00;
		padding: 0;
		margin: 0;
		font-weight: 700;
		font-size: 1.5rem;
	}
`;

export const SButton = styled(Button)`
	span {
		color: #000;
		font-size: 1.25rem;
	}
`;

export const SContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
`;
