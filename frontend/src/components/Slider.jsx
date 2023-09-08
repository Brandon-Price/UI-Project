import React, {useEffect, useState} from "react";
import { NavigateBeforeOutlined, NavigateNextOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import {Container, Arrow, Wrapper, SlideContainer, ImageContainer, InfoContainer, Title, Description, Button, Image} from "../styles/Slider.styles.jsx";

// Slider is the carousel with the images and the arrows. 

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0);
        }
    };

    return (
        <Container>
            <Arrow direction = "left" onClick={()=>handleClick("left")}>
                <NavigateBeforeOutlined/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map(item=>(
                    <SlideContainer bg = {item.bg} key={item.id}>
                    <ImageContainer>
                        <Image src={item.img}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </SlideContainer>
                ))}
            </Wrapper>
            <Arrow direction = "right" onClick={()=>handleClick("right")}>
                <NavigateNextOutlined/>
            </Arrow>
        </Container>
    );
};

export default Slider