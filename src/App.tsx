import { ThemeProvider } from "styled-components";
import { AvaliationQuestions } from "./components/AvaliationQuestions";
import { QuestionsMap } from "./components/QuestionsMap";
import { HomeAvaliations } from "./pages/HomeAvaliations";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { createTheme, SmashGlobalStyle } from "@gama-academy/smash-web";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={theme}>
        <SmashGlobalStyle />
        <GlobalStyle />
        <h1>Hello World!</h1>
        {/* <AvaliationQuestions /> */}
        <HomeAvaliations />
        {/* <QuestionsMap /> */}
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
