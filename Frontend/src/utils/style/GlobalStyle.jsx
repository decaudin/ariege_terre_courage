import { createGlobalStyle } from "styled-components";
import { useTheme } from "../hooks/context/Theme";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',  'Helvetica Neue';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      background-color: ${({ isDarkMode }) => isDarkMode ? colors.backgroundDark : colors.backgroundLight};
      margin: 0;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }
`

const GlobalStyle = () => {

    const { theme } = useTheme();

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle;