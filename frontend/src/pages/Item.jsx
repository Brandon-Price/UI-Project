import styled from "styled-components";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import {Add, Remove } from "@material-ui/icons";

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Image = styled.img`
    width: 100%;
    height: 65vh;
    object-fit: cover;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;

`

const AddtoCart = styled.div`
    padding: 10px;
    width: 50%;
    display: flex;
    allign-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    allign-items: center;
    font-weight: 400;
`

const Amount = styled.span`
    width: 35px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid;
    display: flex;
    allign-items: center;
    justify-content: center;
    margin: 0px 20px;
`

const Button = styled.button`
    width: 150px;
    height: 80px;
    padding: 15px;
    border: 1px solid;
    background-color: white;
    cursor: pointer;
    transition: all .5s ease;
    border-radius: 15px;
    font-size: 18px;

    &:hover {
        transform: scale(1.1);
        background-color: black;
        color: white;
    }
`


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