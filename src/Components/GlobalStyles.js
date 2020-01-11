import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    body{
        background-color: rgba(20,20,20,0.9);
        color: white;
        padding-top: 10px;
    }
`;

export default globalStyles;
