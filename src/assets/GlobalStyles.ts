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

    --input-color: #99A3BA;
    --input-border: #CDD9ED;
    --input-background: #fff;
    --input-placeholder: #CBD1DC;
    --input-border-focus: #275EFE;
    --group-color: var(--input-color);
    --group-border: var(--input-border);
    --group-background: #EEF4FF;
    --group-color-focus: #fff;
    --group-border-focus: var(--input-border-focus);
    --group-background-focus: #678EFE;
    --border: 5px;
		--slant: 0.7em;

    margin:0 auto;
    background-color: rgba(132, 207, 217, 0.29);
    }
    
    button {
		padding: 0.4em 1.2em;
		border: none;
		cursor: pointer;
		font-weight: bold;
		color: var(--color);
		background: linear-gradient(to bottom left, var(--color) 50%, #0000 50.1%)
				top right,
			linear-gradient(to top right, var(--color) 50%, #0000 50.1%) bottom left;
		background-size: calc(var(--slant) + 1.3 * var(--border))
			calc(var(--slant) + 1.3 * var(--border));
		background-repeat: no-repeat;
		box-shadow: 0 0 0 200px inset var(--s, #0000),
			0 0 0 var(--border) inset var(--color);
		clip-path: polygon(
			0 0,
			calc(100% - var(--slant)) 0,
			100% var(--slant),
			100% 100%,
			var(--slant) 100%,
			0 calc(100% - var(--slant))
		);
		transition: color var(--t, 0.3s), background-size 0.3s;

    &.btn-submit{
      --color: #377dfc; 
    }

    &.btn-reset{
      --color: #fc3737a3; 
    }

    &:hover{ 
		background-size: 100% 100%;
		color: #fff;
		--t: 0.2s 0.1s;
	  }

    &[disabled]:hover{
		background-size: calc(var(--slant) + 1.3 * var(--border))
			calc(var(--slant) + 1.3 * var(--border));;
		color: var(--color);
		--t: unset;
    }
    
    &:disabled{
    opacity: 0.5;
    cursor: not-allowed;
    }
	}
    `;
