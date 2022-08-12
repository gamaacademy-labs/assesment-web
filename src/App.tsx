import { ThemeProvider } from "styled-components";
import { AvaliationQuestions } from "./components/AvaliationQuestions";
import { QuestionsMap } from "./components/QuestionsMap";
import { HomeAvaliations } from "./pages/HomeAvaliations";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        {/* <AvaliationQuestions /> */}
        <HomeAvaliations />
        {/* <QuestionsMap /> */}

        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
