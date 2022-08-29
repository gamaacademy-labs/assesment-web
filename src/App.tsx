import './App.scss';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { createTheme, SmashGlobalStyle } from '@gama-academy/smash-web';
import { defaultTheme } from './styles/themes/default';
import { MyRoutes } from './routes';
import { Provider } from 'react-redux';
import { store } from './store';

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
