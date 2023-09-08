import styled from "styled-components";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";

// Footer contains the socials, and links to the other pages, so that the user
// doesn't have to scroll back up

const Container = styled.footer`
    left: 0;
    position: relative;
    bottom: 0;
    right: 0;
    display: flex;
    width: 100%;
    background-color: #555555;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1%;
`


const UsefulLinks = styled.h3`
    margin-bottom: 1.5%;
    color: white;
`

const Links = styled.ul`
    margin: 0%;
    padding: 0%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const LinksList = styled.li`
    width: 40%;
    margin-bottom: 0%;
    color: white;
`

const Logo = styled.h1`
    color: white;
    display: flex;
    align-items: center;
    margin: 4%;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
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

const Right = styled.div`
    display: flex;
    align-items: end;
    justify-content: flex-end;
    flex-direction: column;
    padding: 20px;
`

const Center = styled.div`
    flex: 1;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <UsefulLinks>Site Links</UsefulLinks>
                <Links>
                    <LinksList>Home</LinksList>
                    <LinksList>Products</LinksList>
                    <LinksList>Order History</LinksList>
                </Links>
            </Left>
            <Center>
                <Logo>LOGO</Logo>
            </Center>
            <Right>
            <Logo>TBD</Logo>
                <SocialContainer>
                    <SocialIcon color = "3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color = "55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color = "E4405F">
                        <Instagram/>
                    </SocialIcon>
                </SocialContainer>
            </Right>
        </Container>
    )
}

export default Footer