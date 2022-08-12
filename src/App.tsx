import { ThemeProvider } from "styled-components"
import { ModalInfo } from "./components/ModalInfo"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { createTheme, SmashGlobalStyle } from '@gama-academy/smash-web'

const theme = createTheme()

function App() {


  return (
    <div>
      <ThemeProvider theme={theme}>
        <SmashGlobalStyle/>
          <ModalInfo/>
          <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
