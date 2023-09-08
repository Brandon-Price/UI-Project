import styled from "styled-components"
import {mobile} from "../components/responsive";

export const Container = styled.nav`
    position: sticky;
    top: 0;
    z-index: 999;
    height: 10%;
    width: 100%;
    background-color: white;
    ${mobile({height: "50px"})}
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
`

export const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    padding: 0px 11px;
`

export const SearchContainer = styled.div`
    border: .5px solid lightgray;
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 360px;
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
    background-color: transparent; 
    ${mobile({width: "50px"})}
`

export const Center = styled.div`
    display: flex;
    text-align: center;
`

export const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize: "24px"})}
`

export const Menu = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 20px;
`