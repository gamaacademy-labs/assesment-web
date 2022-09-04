import { createTheme, SmashGlobalStyle } from '@gama-academy/smash-web';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MyRoutes } from './routes';
import { store } from './store';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<ThemeProvider theme={createTheme()}>
				<Provider store={store}>
					<SmashGlobalStyle />
					<GlobalStyle />
					<MyRoutes />
				</Provider>
			</ThemeProvider>
		</ThemeProvider>
	);
}
