import styled from "styled-components";
import {COLORS} from "./Navbar.styles.jsx";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: top;
    height: auto;
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

export const ImageContainer = styled.div`
    max-height: 500px;
    height: 500px;
    min-width: 100%;
    vertical-align: middle;
    background-image: url("https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/22/10/istock-683044558.jpg");
    background-size: cover;
    filter: drop-shadow(black 1px 1px 5px);
`

export const InfoContainer = styled.div`
    width: fit-content;
    margin-left: 10vw;
    margin-top: 100px;
    padding: 10px;
    text-align: left;
    overflow: hidden;
`

export const Title = styled.h1`
    font-size: 70px;
    color: ${COLORS.text};
    background-color: rgba(52, 52, 52, 0.2);
    
`

export const Description = styled.p`
    margin: 50px 0px;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 2px;
    color: white;
    background-color: rgba(52, 52, 52, 0.2);
`

export const Button = styled.button`
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    color: black;
    background-color: white;
    border-color: transparent;
    border-radius: 15px;

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
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding-top: 50px;
`

export const SubTitle = styled.h2`
    font-size: 50px;
    width: 80vw;
    max-width: 1500px;
    padding-bottom: 5px;
    color: ${COLORS.sub};
    background-color: white;
    text-shadow: 2px 2px 3px gray;
    border-top: 2px solid #d4d4d4;
    border-bottom: 2px solid #d4d4d4;
`
export const BottomInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductContainer = styled.div`
    margin: 20px;
    margin-top: 50px;
    float: left;
    height: calc(20vw + 50px);
    width: 20vw;
    max-height: 400px;
    max-width: 400px;
    filter: drop-shadow(gray 1px 1px 5px);
    transition-duration: 0.15s;
    cursor: pointer;

    &:hover {
        transform: scale(1.03);
        filter: drop-shadow(gray 1px 1px 10px);
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
    height: 45px;
    color: white;
    color: ${COLORS.text};
    background-color: ${COLORS.sub};
    align-items: center;
    justify-content: center;
    text-align: center;
`