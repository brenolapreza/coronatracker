import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
   padding: 0; margin: 0; box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }

  html {
    --main-color: #6BFFA7;
    --main-text-color: #0E002B;
    --new-black: #26262C;
    --main-color-hover: #4aad72;
}
body {
    font-family: 'Roboto Mono', monospace;
}

h1, h2, h3, h4, h5, p{
  color: var(--new-black);
}

.container{
  max-width: 1140px;
  margin: 0 auto;
}
`
export default GlobalStyle
