import styled, { keyframes } from "styled-components"
import { COLORS } from "./Navbar.styles"

/* Added for filter shelf */
export const FilterShelfContainer = styled.div`
    min-width: 300px;
    height: 750px;
    background-color: white;
`

export const FilterLabelContainer = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    color: ${COLORS.text};
    background-color: ${COLORS.sub};
    filter: drop-shadow(#aaaaaa 1px 1px 1px);
`

export const FilterLabel = styled.label`

`

export const FilterShelf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-left: 50px;
    background-color: white;
`

export const FilterType = styled.label`
    color: rgb(61, 61, 61);
    margin-bottom: 5px;
    font-weight: bold;
`

export const FilterName = styled.label`
    margin-top: 8px;
    margin-left: 10px;
`

export const PriceInput = {
    width: "75px",
};

export const PriceButton = styled.button`
    height: 25px;
    width: 75px;
    
    margin-left: 17px;
`

/* skeleton loading */
const loading = keyframes`
    to {background-position-x: 15vw;}
`

export const Skeleton = styled.div`
    height: calc(20vw + 50px);
    width: 20vw;
    max-height: 300px;
    max-width: 250px;
    background: linear-gradient(to right, #e0e0e0 8%, #ececec 18%, #e0e0e0 33%);
    animation: 1s ${loading} linear infinite;
`

export const SkeleCon = styled.div`
    margin: 10px;
`