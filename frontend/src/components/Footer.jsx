import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import {Container, Left, UsefulLinks, Links, LinksList, Logo, SocialContainer, SocialIcon, Right, Center} from "../styles/Footer.styles";

// Footer contains the socials, and links to the other pages, so that the user
// doesn't have to scroll back up


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