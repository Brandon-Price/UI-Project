import styled from "styled-components"
import { COLORS } from "./Navbar.styles"

/* Added for item info */
export const ProdInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: white;
    background-color: ${COLORS.sub};
    width: 250px;
    height: auto;
`

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #fff;
`;

export const Image = styled.img`
  height: 220px;
  object-fit: contain;
  max-width: 100%;
`;

export const Info = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

export const Price = styled.p`
  font-size: 16px;
`;

export const Quantity = styled.p`
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${COLORS.sub};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #9E4200;
  }
`