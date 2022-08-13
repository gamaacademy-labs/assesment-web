import "styled-components";
import { DefaultTheme } from "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme | DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}