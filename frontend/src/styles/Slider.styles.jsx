import styled, {keyframes} from "styled-components";
import {COLORS} from "./Navbar.styles.jsx";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: top;
    height: auto;
    position: relative;
    z-index: 1;
    margin-top: 61px;
`

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.0s ease;
    transform: translateX(${props => props.slideIndex * -100}vw)
`

export const SlideContainer = styled.div`
    width: 100vw;
    height: 110vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`

export const TC = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 400px;
    height: 400px;
    width: 100%;
    max-width: 1920px;
    position: relative;
    z-index: 1;

    padding: 40px;
    padding-left: 0;
    padding-right: 0;
`

export const ImageContainer = styled.div`
    max-height: 400px;
    height: 400px;
    width: 70%;
    vertical-align: middle;
    background-image: url("https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/22/10/istock-683044558.jpg");
    background-size: cover;
    background-position: right bottom;    

    border-radius: 50px;
    margin-left: 20px;
`

export const InfoContainer = styled.div`
    text-align: left;
    padding-left: 2vw;

    position: relative;
    z-index: 1;
`

export const Title = styled.h1`
    margin: 15px;
    font-size: 55px;
    color: ${COLORS.sub};
`

export const Description = styled.p`
    margin: 50px 0px;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 2px;
    color: ${COLORS.sub};
`

export const Button = styled.button`
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    color: ${COLORS.text};
    background-color: ${COLORS.sub};
    border-color: transparent;
    border-radius: 5px;

    &:hover {
        transform: scale(1.05);
    }
`

export const Image = styled.img`
    height: 85%;
    width: 100%;
    object-fit: cover;
`

/* added */
export const BottomSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 90%;
    max-width: 1920px;
    margin-bottom: 25px;
    padding-top: 50px;
    padding-left: 100px;
`

export const SubTitle = styled.h2`
    text-align: left;
    font-size: 50px;
    width: auto;
    max-width: 1500px;
    padding-bottom: 5px;
    color: ${COLORS.sub};
    background-color: white;
`

export const ShopAll = styled.h4`
    margin-left: 20px;
    padding: 5px;
    padding-left: 8px;
    padding-right: 8px;

    color: #777777;

    border: 2px solid #d4d4d4;
    border-radius: 15px;

    transition: 0.15s;
    cursor: pointer;

    &:hover {
        color: #FFFFFF;
        background-color: ${COLORS.sub};
        border-color: ${COLORS.sub};
        transform: scale(1.03);
    }
`

export const BottomInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`

export const ProductContainer = styled.div`
    float: left;
    height: calc(20vw + 80px);
    width: 20vw;
    max-height: 475px;
    max-width: 400px;
    
    transition-duration: 0.15s;
    cursor: pointer;

    &:hover {
        transform: scale(1.005);
        filter: drop-shadow(lightgray 1px 1px 10px);
    }
`

export const ProductImage = styled.img`
    height: 20vw;
    width: 20vw;
    max-height: 400px;
    max-width: 400px;
    object-fit: cover;
    overflow: hidden;
`

export const ProductNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 75px;
    color: white;
    color: ${COLORS.text};
    background-color: ${COLORS.sub};
    align-items: center;
    justify-content: center;
    text-align: center;
`

/* skeleton loading */
const loading = keyframes`
    to {background-position-x: 20vw;}
`

export const Skeleton = styled.div`
    height: calc(20vw + 50px);
    width: 20vw;
    max-height: 400px;
    max-width: 400px;
    background: linear-gradient(to right, #e0e0e0 8%, #ececec 18%, #e0e0e0 33%);
    animation: 1s ${loading} linear infinite;
`