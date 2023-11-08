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

export const ImageContainer = styled.div`
    max-height: 400px;
    height: 400px;
    min-width: 100%;
    vertical-align: middle;
    background-image: url("https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/22/10/istock-683044558.jpg");
    background-size: cover;
    background-position: right bottom;
    filter: drop-shadow(black 1px 1px 5px);
    position: relative;
    z-index: 1;
`