import styled, { css, createGlobalStyle } from 'styled-components';

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

        --text-primary-color: #1A1A1A;
        --text-gray-color: #E9E9E9;
        --text-desktop-title-size: 6rem;
        --text-mobile-title-size: 3.2rem;
        --text-desktop-subtitle-size: 2.4rem;
        --text-mobile-subtitle-size: 2.0rem;
        --text-desktop-text-size: 1.4rem;
        --text-mobile-text-size: 1.2rem;
        --text-font-family: 'Titillium Web', sans-serif;

        --rs-tablet: 821px;
        --rs-tablet-half: 410px;
        --rs-desktop: 1041px;
        --rs-desktop-half: 520px;
    }

    body {
        margin: 0;
        padding: 0;
        height: 100vh;

        background-color: var(--bg-primary-color);

        color: var(--text-primary-color);
        font-size: var(--text-desktop-text-size);
        font-family: var(--text-font-family);
        font-weight: 300;
    }

    body:before {
        content: '';

        display: block;
        width: 1px;
        height: 100vh;

        position: absolute;
        top: 0;
        left: 50%;

        background-color: var(--bg-gray-color);

        z-index: -1;
    }
`;

export const Main = styled.main`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;

    font-family: var(--text-font-family);
    font-size: var(--text-mobile-text-size);

    @media only screen and (min-width: 1024px) {
        max-width: var(--rs-tablet);
        
        border-left: 1px solid var(--bg-gray-color);
        border-right: 1px solid var(--bg-gray-color);

        font-size: var(--text-desktop-text-size);
    }

    @media only screen and (min-width: 1440px) {
        max-width: var(--rs-desktop);
    }
`;

export default GlobalStyles;
