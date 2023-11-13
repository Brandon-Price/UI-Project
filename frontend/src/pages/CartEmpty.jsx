import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Container, Wrapper, Title, Line, CLink} from "../styles/ShoppingCart.styles";
import { Desc } from "../styles/Item.styles";

const CartEmpty = () => {


    return (
        <Container>
            <Navbar/>
            <Wrapper style={{minHeight: "calc(100vh - 403px)"}}>
                <Title style={{color: "white"}}>Your Cart</Title>
                <Line/>
                
                <Title>Your cart is currently empty</Title>
                <Desc style={{textAlign: "center", margin: "0", fontSize: "20px"}}>
                Looks like your fruit basket is waiting to be filled! Your cart is currently empty—time to add some delicious fruits!
                </Desc>
                <Desc style={{textAlign: "center", margin: "0", fontSize: "20px"}}>
                    Explore our delicious selection of fresh, ripe fruits to fill it with nature's sweetness. Happy shopping!
                </Desc>
                <Desc style={{textAlign: "center", margin: "0", fontSize: "20px"}}>
                    View our <CLink to={"/products"}>entire inventory</CLink> or go to the&nbsp;
                    <CLink to={"/"}>Homepage</CLink> to get an overview of what we have.
                </Desc>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default CartEmpty;