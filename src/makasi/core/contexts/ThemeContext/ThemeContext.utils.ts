import { CSSProperties } from "react";
import { TThemeColors } from "./ThemeContext.types";

export const getRootStyle = (colors: TThemeColors) =>
  ({
    fontFamily: "'Lato', sans-serif",
    ...Object.entries(colors).reduce<Record<string, string>>(
      (acc, [key, { value }]) => {
        acc[`--${key}`] = value;
        acc[`--${key}-dec`] = hexToRgb(value).join(",");

        return acc;
      },
      {}
    ),
  } as CSSProperties);

function hexToRgb(hex: string) {
  var r = parseInt(hex.substring(1, 3), 16);
  var g = parseInt(hex.substring(3, 5), 16);
  var b = parseInt(hex.substring(5, 7), 16);
  return [r, g, b];
}
