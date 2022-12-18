import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', sans-serif;
    }

    .popup-close-btn {
        border: 1px solid;
        border-radius: 5px;
        padding: 0px 5px 2px 5px;
        background: #ABD8FE;
        position: absolute;
        top: 5px;
        right: 10px;
    }

    .popup-submit-btn {
        border: 1px solid;
        border-radius: 5px;
        padding: 5px 10px;
        background: #ABD8FE;
    }
`;

// #374955,#9fafbb, #E991CD, #B05C97, #05BAF9

// for gradient #3D5D74 #3C5D74 #374955
