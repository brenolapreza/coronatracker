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

    --width-medium: max-width: 450px;
    --width-large: 900px
    --width-extra-large:1200px
}
body {
    font-family: 'Roboto Mono', monospace;
}

h1, h2, h3, h4, h5, p{
  color: var(--new-black);
}
.btn-sucess{
        background-color: var(--main-color);
    }
.container{
  max-width: 1140px;
  margin: 0 auto;
}
`
export default GlobalStyle
