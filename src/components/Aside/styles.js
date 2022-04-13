import styles from "styled-components";

export const Container = styles.div`
    flex:1;  
    display:flex;
    padding:15px;
    flex-direction:column;
`;

export const H1 = styles.h1`
    font-size:32px;
    font-weight:500;
`;

export const P = styles.p`
    font-size:12px;
    margin-bottom:10px;
`;

export const HR = styles.hr`    
    display: block;
    height: 0.5px;
    border: 0;
    border-top: 1px solid #666;
    border-bottom: 1px solid #555;
    margin: 1em 0; padding: 0;
`;

export const Item = styles.button`
    background-color:transparent;
    border:0;
    color: #888;
    font-size:15px;
    font-weight:400;
    cursor:pointer;
    transition:opacity 0.2s;

    &:hover{
        opacity : 0.5;
    }
`;
