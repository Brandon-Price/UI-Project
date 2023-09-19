import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.footer`
    left: 0;
    position: relative;
    bottom: 0;
    right: 0;
    display: flex;
    width: 100%;
    background-color: #555555;
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1%;
`

export const UsefulLinks = styled.h3`
    margin-bottom: 1.5%;
    color: white;
`

export const Links = styled.ul`
    margin: 0%;
    padding: 0%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

export const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:hover, &:focus{
        text-decoration: underline;
    };
    &:active{
        color: teal;
    };
`

export const LinksList = styled.li`
    width: 40%;
    margin-bottom: 0%;
`

export const Logo = styled.h1`
    color: white;
    display: flex;
    align-items: center;
    margin: 4%;
`

export const SocialContainer = styled.div`
    display: flex;
`

export const SocialIcon = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    cursor: pointer;
`

export const Right = styled.div`
    display: flex;
    align-items: end;
    justify-content: flex-end;
    flex-direction: column;
    padding: 20px;
`

export const Center = styled.div`
    flex: 1;
`