import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from "styled-components";
import Lottie from 'lottie-react';
import animData from '../assets/Animation.json';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toRemoveAll } from '../redux/cartRedux.js';
import { Container, Head, Tail, Thanks, Wrapper } from '../styles/Success.styles.jsx';
import Product from '../components/Product.jsx';

const ButtonLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover, &:focus{
        text-decoration: underline;
    }
`

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

const Success = () => {
    // Redux keeps track of the state of the user and cart where you want to use their values
    // dispatch is for the updating those values
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const cartItems = useSelector(state => state.cart.quantity);

    // When you click on the button in the success page it removes all of the cart
    // So whent the user goes to the homepage nothing should be in the cart
    // You will also want to handle calling the api data to post the items to orders
    const handleCart = (e) => {
      e.preventDefault();
      dispatch(toRemoveAll(cartItems))
    };

    // Products to display as recommended.
    const [products, setProducts] = useState([]);

    // Grabs all products
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/products");
          setProducts(res.data);
          console.log(res)
        } catch (err) {}
      };
      getProducts();
    }, []);
    const recommend = shuffleArray(products).slice(0, 4);

    return (
      <div>
        <Navbar/>
          <Container>
            <Wrapper>
            <svg xmlns="http://www.w3.org/2000/svg" height="37px" viewBox="0 0 24 24" width="37px" fill="#000000" style={{marginRight: "15px"}}>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill='#0D8B18'/>
            </svg>
            <Thanks>
              <Head>Order placed successfully!</Head>
              <Tail>Thank you for choosing Fruits R Us!</Tail>
              <Tail>Your order is being prepared.</Tail>
              <Tail>We will send an email to </Tail>
              <button style={{marginTop: "25px"}}>
                <ButtonLink to="/">
                  Go to Homepage
                </ButtonLink>
              </button>
            </Thanks>
            <Lottie animationData={animData}/>
            </Wrapper>
            <div style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              marginTop: "25px"
            }}>
              <Head style={{
                color: "#777777",
              }}>Some fruits we think you might like ...</Head>
            </div>
            <Wrapper style={{
              border: "none", 
              filter: "none",
              width: "70%"}}>
                {recommend.map(item=>(
                  <Product item={item} key={item._id}/>
                ))}
            </Wrapper>
          </Container>
        <Footer/>
      </div>
    )
}

export default Success;