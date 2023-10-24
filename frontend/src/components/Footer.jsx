import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import { Foot, Row, Col1, Head3, SVG, SPN, Col2, Col3, Para, tname, Name} from "../styles/Footer.styles";

// Footer contains the socials, and links to the other pages, so that the user
// doesn't have to scroll back up


//TODO
// Footer needs to be redone

const Footer = () => {
    return (
        <Foot>
            <Row>
                <Col1>
                    <Head3>Fruits R Us!</Head3>
                    <a href="https://github.com/Brandon-Price/UI-Project" target="_blank" rel="noopener noreferrer">
                        <SVG aria-hidden="true" viewBox="0 0 16 16">
                            <path d="M 8 0 c 4.42 0 8 3.58 8 8 a 8.013 8.013 0 0 1 -5.45 7.59 c -0.4 0.08 -0.55 -0.17 -0.55 -0.38 c 0 -0.27 0.01 -1.13 0.01 -2.2 c 0 -0.75 -0.25 -1.23 -0.54 -1.48 c 1.78 
                            -0.2 3.65 -0.88 3.65 -3.95 c 0 -0.88 -0.31 -1.59 -0.82 -2.15 c 0.08 -0.2 0.36 -1.02 -0.08 -2.12 c 0 0 -0.67 -0.22 -2.2 0.82 c -0.64 -0.18 -1.32 -0.27 -2 -0.27 c -0.68 0 -1.36 
                            0.09 -2 0.27 c -1.53 -1.03 -2.2 -0.82 -2.2 -0.82 c -0.44 1.1 -0.16 1.92 -0.08 2.12 c -0.51 0.56 -0.82 1.28 -0.82 2.15 c 0 3.06 1.86 3.75 3.64 3.95 c -0.23 0.2 -0.44 0.55 -0.51 
                            1.07 c -0.46 0.21 -1.61 0.55 -2.33 -0.66 c -0.15 -0.24 -0.6 -0.83 -1.23 -0.82 c -0.67 0.01 -0.27 0.38 0.01 0.53 c 0.34 0.19 0.73 0.9 0.82 1.13 c 0.16 0.45 0.68 1.31 2.69 0.94 
                            c 0 0.67 0.01 1.3 0.01 1.49 c 0 0.21 -0.15 0.45 -0.55 0.38 A 7.995 7.995 0 0 1 0 8 c 0 -4.42 3.58 -8 8 -8 Z"></path>
                        </SVG>
                    </a>
                    <SPN>|</SPN>
                    <SPN>GitHub</SPN>
                </Col1>
                <Col2>
                    <Head3>About Us</Head3>
                    <Para>
                        &emsp; Our story is a tale of passion, health, and community, rooted in the vibrant world of fresh,
                        juicy fruits. It all began when a group of like-minded individuals came together with a shared
                        dream - to bring the bounty of nature's goodness to doorsteps worldwide. And so, our online fruit store was born.
                    </Para>
                </Col2>
                <Col3>
                    <Head3>Our Founders</Head3>
                        <a style={tname} href="https://github.com/i-simba" target="_blank" rel="noopener noreferrer">
                            <Name>Ivan Simbulan</Name>
                        </a><br></br>
                        <a style={tname} href="https://github.com/Brandon-Price" target="_blank" rel="noopener noreferrer">
                            <Name>Brandon Price</Name>
                        </a><br></br>
                        <a style={tname} href="https://github.com/mDean1" target="_blank" rel="noopener noreferrer">
                            <Name>Morgan Dean</Name>
                        </a><br></br>
                        <a style={tname} href="https://github.com/ThanhlanTrinh" target="_blank" rel="noopener noreferrer">
                            <Name>Thanhlan Trinh</Name>
                        </a><br></br>
                        <a style={tname} href="https://github.com/CyberLykan" target="_blank" rel="noopener noreferrer">
                            <Name>Julian Legere</Name>
                        </a><br></br>
                </Col3>
            </Row>
        </Foot>
    )
}

export default Footer