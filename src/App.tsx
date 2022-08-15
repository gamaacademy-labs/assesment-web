import { ThemeProvider } from "styled-components";
import { ModalInfo } from "./components/ModalInfo";
import { GlobalStyle } from "./styles/global";
import { createTheme, SmashGlobalStyle } from "@gama-academy/smash-web";
import { defaultTheme } from "./styles/themes/default";
import timeImage from "./assets/timeImage.png";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={theme}>
        <SmashGlobalStyle />
        <ModalInfo
          title="Tem certeza que deseja sair?"
          text="Atenção! ao sair, sua prova será finalizada"
          colorButton="error"
          textButton="Sair da avaliação"
          onClickCancel={()=>console.log('Cancelar')}
          onClickConfirm={()=>console.log('Tem certeza que quer sair')}
        />
        <ModalInfo
          title="Tem certeza que deseja entregar sua avaliação?"
          text="Atenção! ao sair, sua prova será finalizada"
          colorButton="success"
          textButton="Entregar a avaliação"
          onClickCancel={()=>console.log('Cancelar')}
          onClickConfirm={()=>console.log('Entregar a avaliação')}
        />
        <ModalInfo
          title="Tempo esgotado"
          text="Sua prova foi entregue automaticamente, pois o tempo de realização se esgotou. Não se preocupe: todas suas respostas foram registradas."
          colorButton="brand.secondary"
          textButton="Ok, fechar"
          imageModal={timeImage}
          displayButton="none"
          onClickCancel={()=>console.log('')}
          onClickConfirm={()=>console.log('Ok, fechar')}
        />
        <GlobalStyle />
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
