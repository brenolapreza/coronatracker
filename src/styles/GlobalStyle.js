import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
   padding: 0; margin: 0; box-sizing: border-box;
  }

  html {
    --main-color: #6BFFA7;
    --main-text-color: #0E002B;
    --new-black: #26262C;
}
body {
    font-family: 'Roboto Mono', monospace;
}

.container{
  max-width: 80%;
  margin: 0 auto;
}
`
export default GlobalStyle
