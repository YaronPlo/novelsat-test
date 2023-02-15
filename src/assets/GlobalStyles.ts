import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root {
    margin:0 auto;
    background-color: rgba(132, 207, 217, 0.29);
    }
    
    button {
      cursor: pointer;
      &:disabled{
        cursor: not-allowed
      }
}

    
    `;
