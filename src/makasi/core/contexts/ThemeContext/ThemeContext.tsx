import { createContext, FC, ReactNode, useContext } from "react";
import { TThemeColors } from "./ThemeContext.types";
import { getRootStyle } from "./ThemeContext.utils";

interface TThemeContext {
  colors: TThemeColors;
}

const themeContext = createContext<TThemeContext>({
  colors: {},
});

export const useTheme = () => {
  const { colors } = useContext(themeContext);

  return {
    getColors: () =>
      Object.entries(colors).map(([key, value]) => ({ key, value })),
  };
};

interface TThemeProviderProps {
  children: ReactNode;
  colors: TThemeColors;
}

export const ThemeProvider: FC<TThemeProviderProps> = ({
  children,
  colors,
}) => {
  return (
    <themeContext.Provider value={{ colors }}>
      <div style={getRootStyle(colors)}>{children}</div>
    </themeContext.Provider>
  );
};
