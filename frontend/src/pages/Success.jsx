import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toRemoveAll } from '../redux/cartRedux.js';

const ButtonLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover, &:focus{
        text-decoration: underline;
    }
`

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

    return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <p>Successfull. Your order is being prepared. We will send an email to {user.email}</p>
      <button onClick={handleCart} style={{ padding: 10, marginTop: 20 }}>
        <ButtonLink to="/">
          Go to Homepage
        </ButtonLink>
      </button>
    </div>
    )
}

export default Success;