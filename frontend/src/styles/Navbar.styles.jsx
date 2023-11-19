import styled from "styled-components"
import {mobile} from "../components/responsive";
import { Link } from "react-router-dom";
import { ExitToApp } from "@material-ui/icons";

export const COLORS = {
    main: '#0C2340',
    sub: '#F15A22',
    text: '#FFFFFF',
};

export const Container = styled.nav`
    position: fixed;
    top: 0;
    z-index: 999;
    height: 59px;
    width: 100%;
    background-color: ${COLORS.main};
    
    ${mobile({height: "50px"})}
`

/* Sub container used to remove drop shadow on Container */
export const SubCon = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
    height: 10%;
    width: 100%;
    background-color: ${COLORS.main};
    ${mobile({height: "50px"})}
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLORS.main};
    ${mobile({padding: "10px 0px"})}
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0px 11px;
    background-color: ${COLORS.main};
`

export const SearchContainer = styled.div`
    border: .5px solid lightgray;
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 300px;
    height: 24px;
    margin-left: 25px;
    padding: 5px;
    background: #f2f2f2;
    transition: all .3s ease;
    ${mobile({width: "80px"})}
`

export const Input = styled.input`
    border: none;
    height: 100%;
    width: 100%;
    color: gray;
    outline: none;
    font-size: 16px;
    margin: 0px 7px;
    background-color: transparent; 
    ${mobile({width: "50px"})}
`

export const Center = styled.div`
    display: flex;
    text-align: center;
`

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Logo = styled.h1`
    width: 240px;
    color: ${COLORS.text}
    font-weight:bold;
    ${mobile({fontSize: "24px"})}
`

export const Menu = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-right: 25px;
    padding: 0px;
    display: flex;
`
export const Menu2 = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 20px;
    padding: 0px;
    display: flex;
`

export const MenuLink = styled(Link)`
    color: ${COLORS.text};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        transform: scale(1.03);
    }
`

export const ProdButton = styled.button`
    color: ${COLORS.text};
    text-decoration: none;
    background-color: transparent;
    border: none;

    &:hover {
        text-decoration: underline;
        transform: scale(1.03);
    }
`

/* added for cart animation */
export const CartAnim = styled.div`
    transistion: 0.15s;

    &:hover, &:focus {
        filter: drop-shadow(${COLORS.text} 1px 1px 10px);
        transform: scale(1.05);
    }
`

export const Line = styled.div`
    background-color: lightgray;
    margin: 0px 5px;
    height: 100%;
    padding: 1px;
    color: gray;
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-left: 10px;
    margin-bottom: 5px;
`

export const Button = styled.button`
    padding: 10px;
    font-size: 12px;
    background-color: transparent;
    cursor: pointer;
`

/* added for colapsable products menu */
export const Expand = styled.div`
    position: relative;
    z-index: 999;
    transition: height 0.15s ease;
    background-color: color-mix(in srgb, ${COLORS.main} 90%, white);
`

export const ProductMenu = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1%;
    height: 450px;
    width: auto;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
    padding-left: 3vw;
    height: 90%;
    width: 25%;
    border-right: 2px solid white;
`

export const MenuButtons = styled.div`
    font-weight: bold;
    font-size: 200%;
`

export const Logout = styled(ExitToApp)`
    transistion: 0.15s;

    &:hover, &:focus {
        filter: drop-shadow(${COLORS.text} 1px 1px 5px);
        transform: scale(1.05);
    }
`