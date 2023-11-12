import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: calc(100vh - 363px);
    width: 100%;

    padding-top: 61px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

    height: 300px;
    width: 60%;
    max-width: 1500px;

    margin-top: 25px;
    padding: 25px;

    border: 2px solid #79C27A;
    border-radius: 15px;

    background-color: white;
    filter: drop-shadow(#B3DFB3 0px 0px 3px);
`

export const Thanks = styled.div`
    width: 70%;
    margin-right: 5%;
    border-right: 1px solid #d4d4d4;
`

export const Head = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;

    margin-bottom: 15px;

    color: #0D8B18;
`

export const Tail = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    color: black;
`