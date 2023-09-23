import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
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
    flex:1;
    height: 100%;
    transform: translateZ(0);
`

export const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 33%;
    z-index: 3
`

export const Title = styled.h1`
    font-size: 70px;
    color: white;
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
        transform: scale(1.03);
    }
`

export const Image = styled.img`
    height: 85%;
    width: 100%;
    object-fit: cover;
`