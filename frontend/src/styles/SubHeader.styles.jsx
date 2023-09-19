import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 46px;
    width: 100%;
    background-color: white;
    position: relative;
`

export const Wrapper = styled.div`
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F5F5F5;
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px 0px;
`

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 10px;
`

export const Menu = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 20px;
`

export const MenuLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover, &:focus{
        text-decoration: underline;
    }
`

export const Menu2 = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 5px;
`