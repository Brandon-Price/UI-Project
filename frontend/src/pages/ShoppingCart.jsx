import styled from "styled-components";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { Remove, Add } from "@material-ui/icons";

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
`

const Top = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TopTexts = styled.div`

`

const TopText = styled.span`
    text-decoration: underline;
    margin: 0px 10px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    padding: 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductInfo = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const ProductDetails = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductID = styled.span`

`

const ProductPrice = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`

const Quantity = styled.span`
    font-size: 24px;
    margin: 5px;
`

const Price = styled.span`
    font-size: 30px;
    font-weight: 200px;
`

const Hr = styled.hr`
    padding: 10px;
    background-color: transparent;
    border: none;
    height: 1px;
`

const SmallLine = styled.hr`
    background-color: darkgray;
    border: none;
    width: 100%;
    height: 1px;
`

const CartSummary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 30vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;

`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "20px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-weight: 600;
    background-color: white;
    border-color: black;
    cursor: pointer;
    color: black;
    transition: all .5s ease;
    border-radius: 15px;
    z-index: 4;

    &:hover {
        transform: scale(1.05);
        background-color: black;
        color: white;
    }
`

const EmptyContainer = styled.div`
    padding: 150px;
`

const Line = styled.hr`
    color: black;
`


const ShoppingCart = () => {
    return (
        <Container>
            <Navbar/>
            <SubHeader/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Line/>
                <Top>
                    <TopTexts>
                        <TopText></TopText>
                    </TopTexts>
                </Top>
                <Bottom>
                    <Info>
                    <Product>
                            <ProductInfo>
                                <Image src="https://starbucks-mugs.com/wp-content/uploads/2022/11/btc_philippines_main_786.jpg"/>
                                <ProductDetails>
                                    <ProductName><b>Item: </b>Philippines Mug</ProductName>
                                    <ProductID><b>Item ID: </b>1</ProductID>
                                </ProductDetails>
                            </ProductInfo>
                            <ProductPrice>
                                <PriceContainer>
                                    <Remove/>
                                    <Quantity>4</Quantity>
                                    <Add/>
                                </PriceContainer>
                                <Price>$ 20.99</Price>
                            </ProductPrice>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductInfo>
                                <Image src="https://starbucks-mugs.com/wp-content/uploads/2022/11/btc_philippines_main_786.jpg"/>
                                <ProductDetails>
                                    <ProductName><b>Item: </b>Philippines Mug</ProductName>
                                    <ProductID><b>Item ID: </b>1</ProductID>
                                </ProductDetails>
                            </ProductInfo>
                            <ProductPrice>
                                <PriceContainer>
                                    <Remove/>
                                    <Quantity>4</Quantity>
                                    <Add/>
                                </PriceContainer>
                                <Price>$ 20.99</Price>
                            </ProductPrice>
                        </Product>
                    </Info>
                    <CartSummary>
                        <SummaryTitle>Order Details</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal: </SummaryItemText>
                            <SummaryItemPrice>$ 167.92</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Flat Rate Shipping: </SummaryItemText>
                            <SummaryItemPrice>$ 8.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SmallLine/>
                        </SummaryItem>
                        <SummaryItem type= "total">
                            <SummaryItemText>Total: </SummaryItemText>
                            <SummaryItemPrice>$ 176.91</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Continue to Checkout</Button>
                    </CartSummary>
                </Bottom>
            </Wrapper>
            <EmptyContainer></EmptyContainer>
            <Footer/>
        </Container>
    )
}

export default ShoppingCart