import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core';

// Using style components for the site
// Don't need a style js file
const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    margin-left: 50px;
`

const Center = styled.div`
    flex:.5;
    text-align: center;
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Logo = styled.h1`
    font-weight:bold;
`

const Menu = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
`

// Creating navigation bar
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>TBD</Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input/>
                        <Search style ={{color: "black", fontSize:20}}/>
                    </SearchContainer>
                </Center>
                <Right>
                    <Menu>Register/Sign In</Menu>
                    <Menu>
                        <Badge badgeContent={4} color = "primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </Menu>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar