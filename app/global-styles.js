import { createGlobalStyle } from 'styled-components';
import fontStyle from 'styles/fonts.css';

const GlobalStyle = createGlobalStyle`
${fontStyle}

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 10px;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
