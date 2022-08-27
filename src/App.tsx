import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { createTheme, SmashGlobalStyle } from '@gama-academy/smash-web';
import { defaultTheme } from './styles/themes/default';
import { MyRoutes } from './routes';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<ThemeProvider theme={createTheme()}>
				<SmashGlobalStyle />
				<GlobalStyle />
				<MyRoutes />
			</ThemeProvider>
		</ThemeProvider>
	);
}

// Configurar acesso as paginas HomeAssessment e Assessment apenas para usuarios logados
