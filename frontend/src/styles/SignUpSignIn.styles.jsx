import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const Image = styled.div`
    background-image: url(https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?cs=srgb&dl=pexels-tae-fuller-1141853.jpg&fm=jpg);
    background-size: cover;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(3px);
`

export const Line = styled.div`
    background-color: gray;
    height: 34%;
    width: 1;
    color: gray;
`

export const LeftContainer = styled.div`
    width: 50%;
    min-height: 308px;
    
`

export const RightContainer = styled.div`
    width: 50%;
    min-height: 308px;
`

export const Wrapper = styled.div`
    width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: relative;
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-left: 10px;
    margin-bottom: 5px;
`

export const Form = styled.form`
    display: row;
    margin: 7px 4px 0px 0px;
    padding: 7px;
`

export const Input = styled.input`
    flex: 1;
    margin: 2px;
    min-width: 40%;
`

export const SocialContainer = styled.div`
    display: flex;
`

export const SocialIcon = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Button = styled.button`
    padding: 8px;
    font-size: 13px;
    background-color: white;
    border-color: #dd7973;
    cursor: pointer;
    color: #dd7973;
    transition: all .5s ease;
    border-radius: 15px;
    z-index: 4;
    margin-left: 5px;

    &:hover {
        transform: scale(1.1);
        background-color: #dd7973;
        color: white;
    }

    &:disabled {
        cursor: not-allowed;
        color: #dd7973;
    }
`

export const Error = styled.span`
    color: red;
    display: row;
`