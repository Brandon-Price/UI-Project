import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import {Add, Remove } from "@material-ui/icons";
import {Container, Wrapper, ImgContainer, InfoContainer, Image, Title, Desc, Price, AddtoCart, AmountContainer, Amount, Button} from "../styles/Item.styles"

const Item = () => {
    return (
        <Container>
            <Navbar/>
            <SubHeader/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.jacquelinestallone.com/wp-content/uploads/2022/11/Starbucks-Coffee-Mug-Seattle-2008-Mt-Rainier-Global-Icon-Collector-Series.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Seattle Mug</Title>
                    <Desc>Mug is from Seattle Starbucks location.</Desc>
                    <Price>$20.99</Price>
                    <AddtoCart>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                    </AddtoCart>
                    <Button>Add to Cart</Button>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Item