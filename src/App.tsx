import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {


  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <h1>Hello world</h1>

        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
