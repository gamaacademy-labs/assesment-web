import { AvaliationInstructions } from "../../components/AvaliationInstructions";
import { SummaryAvaliation } from "../../components/SummaryAvaliation";
import { Container } from "./styles";

export function HomeAvaliations() {
  return (
    <Container>
      <SummaryAvaliation />
      <AvaliationInstructions />
    </Container>
  );
}
