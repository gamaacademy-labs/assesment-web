import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { createTheme, SmashGlobalStyle } from "@gama-academy/smash-web";
import { ProgressBar } from "./components/ProgressBar";

const theme = createTheme();

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SmashGlobalStyle />
        <ProgressBar/>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
