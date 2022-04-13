import style, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;1,200&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline:none;        
        font-family: 'Oswald', sans-serif;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }

    html, body{
        width: 100vw;
        height:100vh;
        display:flex;
    }

    #root{        
        display:flex;
        flex: 1;
        background-color: ${(props) => (props.theme ? "#333" : "#f2f2f2")};
        color: ${(props) => (props.theme ? "#999" : "#333")};

    }

`;

export const Container = style.div`
    display:flex;
    flex:1;
    align-items:center;
    justify-content:center;
`;
