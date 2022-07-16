// Atibuindo minha propria tipagem ao Styled Component
import "styled-components";
declare module "styled-components" {
  export interface DefaulTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      white: string;
      black: string;
      gray: string;
      success: string;
      info: string;
      warning: string;
    };
  }
}
