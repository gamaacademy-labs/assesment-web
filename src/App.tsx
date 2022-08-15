import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { createTheme, SmashGlobalStyle } from "@gama-academy/smash-web";
import { defaultTheme } from "./styles/themes/default";
import { MyRoutes } from "./routes";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={theme}>
        <SmashGlobalStyle />
        <GlobalStyle />
        <MyRoutes />
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
