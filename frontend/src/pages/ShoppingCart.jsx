import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { DeleteOutline } from "@material-ui/icons";
import {Container, Wrapper, Top, TopTexts, TopText, Title, Bottom, Info, Product, ProductInfo, Image,
    ProductDetails, ProductName, ProductID, ProductPrice, PriceContainer, Quantity, Price, Hr, SmallLine,
    CartSummary, SummaryTitle, SummaryItem, SummaryItemText,
    SummaryItemPrice, Button, EmptyContainer, Line, ButtonLink, Input} from "../styles/ShoppingCart.styles";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {userRequest} from "../request";
import { toRemove } from "../redux/cartRedux";

const ShoppingCart = ({ ifUser }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const shipping = 8.99;
    const [disc, setDisc] = useState('');
    const discount = (disc === "5OFF" ? 0.05 : 0.0);
    const tax = (cart.total *0.0825).toFixed(2);
    const finalTotal = (cart.total + (cart.total *0.0825) + shipping).toFixed(2);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    };
    
    /*------------------IMPORTANT------------------------------------ */
    // When using stripe checkout test card data is
    // 4242 4242 4242 4242
    // 12/23 and any 3 digits
    /*------------------------------------------------------ */

    // Right now the solution for stripe is when it is being used it will just resend the
    // user to the success page, which is fine as it doesn't actually have to connect
    // to the api
    useEffect(() => {
        const makeRequest = async () => {
            history("/success");
          try {
                const res = await userRequest.post("checkout/payment", {
                tokenId: stripeToken.id,
                amount: cart.total * 100,
            });
          } catch {

          }
        };
        stripeToken && makeRequest();
      }, [stripeToken, cart, history]);

    return (
        <Container>
            <Navbar ifUser={ifUser}/>
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
                        { cart.products.map((product) => (
                        <Product>
                            <ProductInfo>
                                <Image src={product.img}/>
                                <ProductDetails>
                                    <ProductName><b>Item: </b>{product.title}</ProductName>
                                    <ProductID><b>Item ID: </b>{product._id}</ProductID>
                                </ProductDetails>
                            </ProductInfo>
                            <ProductPrice>
                                <PriceContainer>
                                    <Quantity>{product.quantity}</Quantity>
                                </PriceContainer>
                                <Price>$ {product.price * product.quantity}</Price>
                            </ProductPrice>
                            <DeleteOutline style={{cursor: "pointer"}} onClick={() => dispatch(toRemove(product))}/>
                        </Product>))}
                        <Hr/>
                    </Info>
                    <CartSummary>
                        <SummaryTitle>Order Details</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal: </SummaryItemText>
                            <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Flat Rate Shipping: </SummaryItemText>
                            <SummaryItemPrice>$ {shipping}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount: <Input/></SummaryItemText>
                            <SummaryItemText>- $ {disc}</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Tax: </SummaryItemText>
                            <SummaryItemPrice>$ {tax}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SmallLine/>
                        </SummaryItem>
                        <SummaryItem type= "total">
                            <SummaryItemText>Total: </SummaryItemText>
                            <SummaryItemPrice>$ {finalTotal}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name = "TBD"
                            billingAddress
                            shippingAddress
                            description={`Total $${finalTotal}`}
                            amount = {finalTotal * 100}
                            currency="USD"
                            token = {onToken}
                            stripeKey={process.env.REACT_APP_STRIPE}> 
                            <Button>
                                <ButtonLink >
                                        Checkout
                                </ButtonLink>
                            </Button>
                        </StripeCheckout>
                    </CartSummary>
                </Bottom>
            </Wrapper>
            <EmptyContainer></EmptyContainer>
            <Footer/>
        </Container>
    )
}

export default ShoppingCart