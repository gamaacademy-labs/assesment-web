import { createTheme, SmashGlobalStyle } from "@gama-academy/smash-web";
import { ThemeProvider, useTheme } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { LoginForm } from "./components/LoginForm";

export default function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <GlobalStyle />
      <SmashGlobalStyle />
      <LoginForm />
    </ThemeProvider>
  );
}
