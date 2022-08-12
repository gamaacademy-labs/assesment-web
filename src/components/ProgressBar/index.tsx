import { ProgressBar as Progress_Bar } from "@gama-academy/smash-web";
import icon from '../../assets/icon.png'
import { Div, DivInformation } from "./styles";

export const ProgressBar = () => {
    let num = 15
    let numQuestion = 40
  return (
    <Div>
      <DivInformation>
        <img src={icon} alt="icone" />
        <p className="question">Questões</p>
        <p className="numQuestion">{num}/{numQuestion}</p>
      </DivInformation>
      <Progress_Bar max={numQuestion} value={num} percentageSide = 'right' />
    </Div>
  );
};
