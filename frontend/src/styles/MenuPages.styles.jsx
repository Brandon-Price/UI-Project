import styled from "styled-components";
import { COLORS } from "./Navbar.styles";

export const FruitContainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 25px;
    margin-left: 15px;
    margin-right: 15px;
    justify-content: space-between;
    overflow:hidden;
    width: 80%;
    max-width: 1920px;
    border-top: 2px solid #d4d4d4;
    border-bottom: 2px solid #d4d4d4;
`