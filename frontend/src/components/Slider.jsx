import React, {useState} from "react";
import { NavigateBeforeOutlined, NavigateNextOutlined } from "@material-ui/icons";
import { sliderItems, bestSellers } from "../data";
import {Container, Arrow, Wrapper, SlideContainer, ImageContainer, InfoContainer, Title, Description, Button, Image, BottomSlide, SubTitle, BottomInfo, ProductContainer, ProductImage, ProductNameContainer} from "../styles/Slider.styles.jsx";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    useNavigate,
  } from "react-router-dom";

// Slider is the carousel with the images and the arrows. 

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    // const handleClick = (direction) => {
    //     if(direction === "left"){
    //         setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2);
    //     }
    //     else {
    //         setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0);
    //     }
    // };
    // route to products page
    let navigate = useNavigate();
    const handleShopNow = () => {
        let path = '/products/';
        navigate(path);
    };

    return (
        <Container>
            <ImageContainer>
                {sliderItems.map(item=>(
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button onClick={() => handleShopNow()}>SHOP NOW</Button>
                    </InfoContainer>
                ))}
            </ImageContainer>

            <BottomSlide>
                <SubTitle>Some of our Best Sellers</SubTitle>
            </BottomSlide>
                {bestSellers.map(item=>(
                    <BottomInfo>
                        <ProductContainer>
                            <ProductImage src={item.first}></ProductImage>
                            <ProductNameContainer>
                                <h2>{item.fName}</h2>
                            </ProductNameContainer>
                        </ProductContainer>
                        <ProductContainer>
                            <ProductImage src={item.second}></ProductImage>
                            <ProductNameContainer>
                                <h2>{item.sName}</h2>
                            </ProductNameContainer>
                        </ProductContainer>
                        <ProductContainer>
                            <ProductImage src={item.third}></ProductImage>
                            <ProductNameContainer>
                                <h2>{item.tName}</h2>
                            </ProductNameContainer>
                        </ProductContainer>
                    </BottomInfo>
                ))}

        </Container>
    );
};

export default Slider