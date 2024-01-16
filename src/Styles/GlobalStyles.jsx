import { createGlobalStyle } from "styled-components";

import "../fonts/fonts.css";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'SirinStencil', sans-serif;
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyles;
