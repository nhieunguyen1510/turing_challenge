import { createGlobalStyle } from 'styled-components';
import FontFaceObserver from 'fontfaceobserver';
import '!style-loader?insertAt=top!css-loader!sanitize.css/sanitize.css';
import '!style-loader?insertAt=top!css-loader!./styles.css';
import '!style-loader?insertAt=top!css-loader!./fonts.css';

// Observe loading of Playfair Display
const playfairDisplayObserver = new FontFaceObserver('Playfair Display', {});
// Observe loading of Montserrat
const montserratObserver = new FontFaceObserver('Montserrat', {});

// When Playfair Display is loaded, add a font-family using Playfair Display to the body
playfairDisplayObserver.load().then(() => {
  document.body.classList.add('font-playfair-display-loaded');
});
// When Montserrat is loaded, add a font-family using Montserrat to the body
montserratObserver.load().then(() => {
  document.body.classList.add('font-montserrat-loaded');
});

const GlobalStyle = createGlobalStyle`
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
