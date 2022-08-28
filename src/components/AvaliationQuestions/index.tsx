import { useState } from 'react';
import iconAvaliationQuestions from '../../assets/icons/iconAvaliationQuestions.svg';
import { Container, ContainerInput } from './styles';

export function AvaliationQuestions() {
	const [checkInput, setCheckInput] = useState('');

	return (
		<Container>
			<h3>
				<img src={iconAvaliationQuestions} /> Questão 1
			</h3>
			<p>A adoção do DevOps está sendo impulsionada por fatores como:</p>
			<p>
				I - Uso de Agile e outros processos e metodologias de desenvolvimento.
			</p>
			<p>
				II - Demanda por uma taxa maior de lançamentos de produção de
				aplicativos e partes interessadas da unidade de negócios.
			</p>
			<p>
				III - Ampla disponibilidade de infraestrutura virtualizada e em nuvem de
				provedores internos e externos.
			</p>
			<p>
				IV - Maior uso de automação de data center e ferramentas de
				gerenciamento de configuração Quais fatores estão corretos?
			</p>

			<span>Marque as alternativas verdadeiras:</span>

			<ContainerInput variant={checkInput === 'a' ? true : false}>
				<input
					onClick={() => setCheckInput('a')}
					value="a"
					id="a"
					type="radio"
					name="questão-1"
				/>
				<label htmlFor="a">A. I , II e III apenas</label>
			</ContainerInput>
			<ContainerInput variant={checkInput === 'b' ? true : false}>
				<input
					onClick={() => setCheckInput('b')}
					value="b"
					id="b"
					type="radio"
					name="questão-1"
				/>
				<label htmlFor="b">B. II e III apenas</label>
			</ContainerInput>
			<ContainerInput variant={checkInput === 'c' ? true : false}>
				<input
					onClick={() => setCheckInput('c')}
					id="c"
					type="radio"
					name="questão-1"
				/>
				<label htmlFor="c">C. Todas as alternativas</label>
			</ContainerInput>
			<ContainerInput variant={checkInput === 'd' ? true : false}>
				<input
					onClick={() => setCheckInput('d')}
					id="d"
					type="radio"
					name="questão-1"
				/>
				<label htmlFor="d">D. II apenas</label>
			</ContainerInput>
			<ContainerInput variant={checkInput === 'e' ? true : false}>
				<input
					onClick={() => setCheckInput('e')}
					id="e"
					type="radio"
					name="questão-1"
				/>
				<label htmlFor="e">E. III apenas</label>
			</ContainerInput>
		</Container>
	);
}
