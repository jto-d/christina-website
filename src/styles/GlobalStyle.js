import { createGlobalStyle } from "styled-components";
import fonts from './fonts'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        font-family: var(--font-inter);
        background-color: var(--bg-color);
        
    }

`

export default GlobalStyle;