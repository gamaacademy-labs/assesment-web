import 'styled-components';
import { SmashTheme } from '@gama-academy/smash-web';
import { ThemeProviderComponent } from 'styled-components';
// import { DefaultTheme } from "styled-components";
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme | SmashTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}

export module 'styled-components';

// export interface DefaultTheme extends ThemeType {}

export const ThemeProvider: ThemeProviderComponent<
	AnyIfEmpty<DefaultTheme | SmashTheme>
>;
