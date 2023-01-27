import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/globalStyle";
import { HomePage } from "@/pages/Home";
import { theme } from "@/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
};
