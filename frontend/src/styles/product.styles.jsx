import styled from "styled-components"
import { COLORS } from "./Navbar.styles"

// Handles ItemList Page Styles
export const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`

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

export const Name = styled.label`
    font-weight: bold;
    margin: 10px;
    margin-bottom: 5px;
`

export const Price = {
    marginBottom: "10px",
    marginTop: "0px",
    fontFamily: "Courier New",
};

export const Container = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    filter: drop-shadow(#aaaaaa 1px 1px 3px);

    &:hover ${ProdInfo} {
        background-color: color-mix(in srgb, ${COLORS.sub} 70%, black);
    }

    &:hover ${Info} {
        opacity: 1;
    }
`

export const Image = styled.img`
    z-index: 2;
    height: 250px;
    width: 250px;
    object-fit: cover;
`

export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: white;
    border-color: #c04547;
    cursor: pointer;
    color: #c04547;
    transition: all .5s ease;
    border-radius: 15px;
    z-index: 4;

    &:hover {
        transform: scale(1.1);
        background-color: #c04547;
        color: white;
    }
`

export const IconButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    color: #c04547;
    border-color: #c04547;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all .5s ease;
    cursor: pointer;

    &:hover{
        background-color: #c04547;
        color: white;
        transform: scale(1.2);
    }
`