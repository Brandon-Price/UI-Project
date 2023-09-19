import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover, &:focus{
        text-decoration: underline;
    }
`


const Success = () => {
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
        <p>Successfull. Your order is being prepared.</p>
      <button style={{ padding: 10, marginTop: 20 }}>
        <ButtonLink to="/">
          Go to Homepage
        </ButtonLink>
      </button>
    </div>
    )
}

export default Success;