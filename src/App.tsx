import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { createTheme, SmashGlobalStyle } from "@gama-academy/smash-web";

const theme = createTheme();

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SmashGlobalStyle />

        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
