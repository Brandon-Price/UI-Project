import styled, {keyframes} from "styled-components";
import {COLORS} from "./Navbar.styles.jsx";

export const Container = styled.div`
    
`

export const Wrapper = styled.div`
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

export const ImageContainer = styled.div`
    max-height: 500px;
    height: 500px;
    min-width: 100%;
    vertical-align: middle;
    background-image: url("https://dailymedia.case.edu/wp-content/uploads/2018/09/17144905/apple-tree.jpg");
    background-size: cover;
    background-position: right bottom;
    position: relative;
    z-index: 1;
`

export const InfoContainer = styled.div`
    width: fit-content;
    margin-left: 10vw;
    margin-top: 100px;
    padding: 10px;
    text-align: left;
    overflow: hidden;
    position: relative;
    z-index: 1;
`

export const Title = styled.h1`
    font-size: 70px;
    color: ${COLORS.text};
`

export const Header = styled.h1`
    font-size: 60px;
    color: #f85c24;
    padding-bottom:50px;
    padding-top: 30px;
`

export const Description = styled.p`
    padding: 30px 200px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`

export const Biography = styled.p`
    padding: 0px 200px;
    margin-bottom:90px;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 2px;
`

export const Row = styled.div`
    display: flex;
    text-align: center;
    width: auto;
    min-height: 200px;
    padding-bottom: 70px;
`

export const RowHeader = styled.h1`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center; 
    color: #2e2e2e;
`

export const ThumbnailContainer = styled.div`
    width: 250px;
    height: 250px;
    object-fit: contain;
    padding: 0px 60px;
    overflow: hidden;
`

export const Image = styled.img`
    height: 250px;
    width: 250px;
    object-fit: cover;
    thumbnail-image: url("https://www.shutterstock.com/image-photo/happy-female-farmer-holding-box-260nw-2054595686.jpg");
`

export const RightDescription = styled.p`
    padding-right: 300px;
    padding-left: 20px;
    font-size: 24px;
    text-align: left;
    font-weight: 400;
    letter-spacing: 2px;
`

export const LeftDescription = styled.p`
    padding-left: 300px;
    font-size: 24px;
    font-weight: 400;
    text-align: right;
    letter-spacing: 2px;
`
