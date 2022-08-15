import { Checkbox } from "@gama-academy/smash-web";
import iconAvaliationInstruction from "../../assets/iconAvaliationInstruction.svg";
import { MainContainer } from "./styles";

interface AvaliationInstructionProps {
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled: boolean;
}

export function AvaliationInstructions({
  setIsDisabled,
  isDisabled,
}: AvaliationInstructionProps) {
  return (
    <>
      <MainContainer>
        <span>
          <img src={iconAvaliationInstruction} /> Instruções
        </span>

        <p>Oi, nome do usuário.</p>
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

        {/* <Checkbox
            fluid
            label="Lorem Ipsum"
            name="checkbox-story"
            onChange={function noRefCheck() {}}
            variant="card"
          /> */}

        <div>
          <input
            onClick={() => setIsDisabled(!isDisabled)}
            id="checkboxInstructions"
            type="checkbox"
          />
          <label htmlFor="checkboxInstructions">
            Li as instruções e concordo com as regras aqui estabelecidas.
          </label>
        </div>
      </MainContainer>
    </>
  );
}
