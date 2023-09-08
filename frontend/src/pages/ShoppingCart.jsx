import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { Remove, Add } from "@material-ui/icons";
import {Container, Wrapper, Top, TopTexts, TopText, Title, Bottom, Info, Product, ProductInfo, Image,
    ProductDetails, ProductName, ProductID, ProductPrice, PriceContainer, Quantity, Price, Hr, SmallLine,
    CartSummary, SummaryTitle, SummaryItem, SummaryItemText,
    SummaryItemPrice, Button, EmptyContainer, Line} from "../styles/ShoppingCart.styles";

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