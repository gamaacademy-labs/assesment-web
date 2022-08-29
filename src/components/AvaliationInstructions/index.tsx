import { Checkbox } from '@gama-academy/smash-web';
import { useEffect, useState } from 'react';
import iconAvaliationInstruction from '../../assets/icons/iconAvaliationInstruction.svg';
import { MainContainer } from './styles';
import Cookie from 'js-cookie';

interface AvaliationInstructionProps {
	setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
	isDisabled: boolean;
}

export function AvaliationInstructions({
	setIsDisabled,
	isDisabled,
}: AvaliationInstructionProps) {
	const [username, setUsername] = useState('');

	useEffect(() => {
		const user = String(Cookie.get('user'));
		setUsername(user);
	}, []);

	return (
		<>
			<MainContainer>
				<span>
					<img src={iconAvaliationInstruction} /> Instruções
				</span>

				<p>Oi, {username}</p>
				<p>
					Esta avaliação é composta por número de questões e equivale a
					pontuação definida pelo backoffice pontos.
				</p>
				<p>
					Para ter uma boa experiência, recomendamos que você verifique se está
					conectado à internet. Caso sua conexão falhe durante a prova não será
					possível resgatar suas respostas.
				</p>
				<p>
					Lembre-se de escolher um local silencioso, em que você tenha
					privacidade e consiga se concentrar.
				</p>
				<p>
					Evite abrir muitas abas no navegador, elas podem sobrecarregar seu
					computador e trazer distrações.
				</p>
				<p>
					Não se esqueça de deixar o carregador ou fonte do seu computador por
					perto, para evitar imprevistos.
				</p>
				<p>Boa avaliação!</p>

				<Checkbox
					fluid
					label="Li as instruções e concordo com as regras aqui estabelecidas."
					variant="card"
					checked={!isDisabled}
					onChange={() => setIsDisabled(!isDisabled)}
				/>
			</MainContainer>
		</>
	);
}
