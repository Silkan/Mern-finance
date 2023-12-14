//eslint-disable-next-line
import { Palette, PaletteColor } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteColor {
    [key: number]: string;
  }

  interface  Palette {
    tertiary: PaletteColor;
  }
}
