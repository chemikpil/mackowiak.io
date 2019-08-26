import styled, { css, createGlobalStyle, keyframes } from 'styled-components';

const normalize = css`
    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
    }

    main {
        display: block;
    }

    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    pre {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    a {
        background-color: transparent;
    }

    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
    -webkit-appearance: button;
        font: inherit;
    }

    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none;
    }
`;

const GlobalStyles = createGlobalStyle`
    ${normalize}

    :root {
        font-size: 10px;

        --bg-primary-color: #F7F7F7;
        --bg-gray-color: #E9E9E9;

        --text-primary-color: #282828;
        --text-gray-color: #E9E9E9;

        --logo-primary: #282828;
        --logo-secondary: #575757;

        @media (prefers-color-scheme: dark) {
            --bg-primary-color: #282828;
            --bg-gray-color: #2F2F2F;

            --text-primary-color: #F7F7F7;
            --text-gray-color: #2F2F2F;

            --logo-primary: #F7F7F7;
            --logo-secondary: #BBBBBB;
        }

        --text-title-size: 3.2rem;
        --text-subtitle-size: 2.0rem;
        --text-size: 1.2rem;

        --text-font-family: 'Titillium Web', sans-serif;

        @media only screen and (min-width: 1024px) {
            --text-title-size: 6rem;
            --text-subtitle-size: 2.4rem;
            --text-size: 1.4rem;
        }
    }

    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin: 0;
        padding: 0;
        height: 100vh;

        background-color: var(--bg-primary-color);
        
        font-size: var(--text-size);
        color: var(--text-primary-color);
        font-family: var(--text-font-family);
        font-weight: 300;
    }

    a, a:visited, a:hover {
        color: inherit;
        text-decoration: none;
    }
`;

const startAnimation = keyframes`
    from { height: 0; }
    to { height: 100vh; }
`;

export const Main = styled.main`
    --max-width: 100%;

    @media only screen and (min-width: 1024px) {
        --max-width: 821px;
    }
    
    @media only screen and (min-width: 1440px) {
        --max-width: 1041px;
    }

    max-width: var(--max-width);
    height: 0;
    margin: 0 auto;

    font-family: var(--text-font-family);
    font-size: var(--text-size);

    animation: ${startAnimation} 1s ease forwards;

    &:before {
        content: '';

        display: block;
        width: 1px;
        height: 100vh;

        position: absolute;
        top: 0;
        left: 50%;

        background-color: var(--bg-gray-color);

        animation: ${startAnimation} 1s ease forwards;
        z-index: -1;
    }
`;

export default GlobalStyles;
