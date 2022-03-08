import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
        * {     
                ul, li, button, input, a{
                        all: unset;
                }
                body{
                        background-color: #FFFFFF;
                }
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font-weight: normal;
                vertical-align: baseline;
                font-family: 'Roboto', sans-serif;
                box-sizing: border-box;
               ::-webkit-scrollbar {
                        width: 8px;
                        }
                ::-webkit-scrollbar-track { 
	                background: none; 
                        border-radius: 5px;
                        }
                ::-webkit-scrollbar-thumb {
                        background: #d8d8d8; 
                        border-radius: 5px;
                        }
                ::-webkit-scrollbar-thumb:hover {
                        background: #c4c4c4; 
                        }
        }
`;

export { GlobalStyle };