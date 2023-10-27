import styled from "styled-components"

export const Container = styled.div`
    margin-top: 61px;
`

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

export const ImgContainer = styled.div`
    flex: 1;
`

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

export const Image = styled.img`
    width: 100%;
    height: 65vh;
    object-fit: contain;
`

export const Title = styled.h1`
    font-weight: 200;
`

export const Desc = styled.p`
    margin: 20px 0px;
`

export const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

export const Quantity = styled.span`
    font-weight: 200;
    font-size: 20px;
`

export const AddtoCart = styled.div`
    padding: 10px;
    width: 50%;
    display: flex;
    allign-items: center;
    justify-content: space-between;
`

export const Hr = styled.hr`
    padding: 30px;
    background-color: transparent;
    border: none;
    height: 1px;
`

export const AmountContainer = styled.div`
    display: flex;
    allign-items: center;
    font-weight: 400;
`

export const Amount = styled.span`
    width: 35px;
    height: 30px;
    display: flex;
    allign-items: center;
    justify-content: center;
    margin: 0px 20px;
`

export const Button = styled.button`
    width: 150px;
    height: 80px;
    padding: 15px;
    border: 1px solid;
    background-color: white;
    cursor: pointer;
    transition: all .5s ease;
    border-radius: 15px;
    font-size: 18px;

    &:hover {
        transform: scale(1.1);
        background-color: black;
        color: white;
    }
`