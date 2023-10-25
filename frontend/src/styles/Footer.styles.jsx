import styled from "styled-components";
import { Link } from 'react-router-dom';
import {COLORS} from "./Navbar.styles.jsx";

export const Foot = styled.footer`
    display: flex;
    justify-content: center;
    color: white;
    position: relative;
    width: 100%;
    bottom: 0;
    padding-top: 48px;
    margin-top: 50px;
    padding-bottom: 57px;
    background-color: ${COLORS.main};
`

export const Head3 = styled.h3`
    margin: 0;
    margin-bottom: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 150%;
`

export const Para = styled.p`
    font-style: italic;
`

export const gitLink = styled.a`
    text-decoration: none;
`

export const SVG = styled.svg`
    height: 25px;
    width: 25px;
    fill: #ececec;
    vertical-align: middle;
    cursor: pointer;
    transition: 0.15s;

    &:hover {
        fill: #ffffff;
        filter: drop-shadow( 0px 3px 5px rgba(255, 255, 255, 1));
    }
`

export const SPN = styled.span`
    color: ${COLORS.text};
    margin-left: 10px;
    margin-right: 0;
`

export const Row = styled.div`
    display: flex;
    flex-wrap: nowrap;
    text-align: left;
    padding-left: 15px;
    padding-right: 15px;
    width: auto;
`

export const Col1 = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    padding-right: 15px;
    padding-left: 15px;
`
export const Col2 = styled.div`
    margin-left: 30px;
    padding-bottom: 15px;
    padding-left: 30px;
    width: 500px;
    border-left: 2px solid ${COLORS.text};
    text-align: left!important;
`

export const Col3 = styled.div`
    margin-right: 30px;
    margin-left: 30px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    width: 150px;
    border-left: 2px solid ${COLORS.text};
    border-right: 2px solid ${COLORS.text});
    text-align: left!important;
`
export const Name = styled.label`
    color: ${COLORS.text};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-decoration: none;
    margin-top: 0;
    transition: color 0.5s;
    cursor: pointer;

    &:hover, &:focus {
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
`

export const tname = {
    color: "white",
    textDecoration: "none",
}