import styles from "styled-components";

export const Row = styles.div`
    min-width:300px;
    max-width:900px;
    height:350px;    
    display:flex;
`;

export const Col = styles.div`
    display:flex;
    flex:1;    
    margin:3px;
    padding:3px;
`;

export const Card = styles.div`
    flex:1;
    padding:5px;
    margin:5px;
    box-shadow:0.1em 0.1em 0.3em #222;
    background-color:#444;
    border-radius:10px;
    display:flex;
`;
