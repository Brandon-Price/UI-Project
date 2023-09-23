import React, {useState} from "react";
import { NavigateBeforeOutlined, NavigateNextOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import {Container, Arrow, Wrapper, SlideContainer, ImageContainer, InfoContainer, Title, Description, Button, Image} from "../styles/Slider.styles.jsx";
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
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map(item=>(
                    <SlideContainer bg = {item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img}/>
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button onClick={() => handleShopNow()}>SHOP NOW</Button>
                        </InfoContainer>
                        <ImageContainer>
                            <Image src={item.img2}/>
                        </ImageContainer>
                    </SlideContainer>
                ))}
            </Wrapper>
        </Container>
    );
};

export default Slider