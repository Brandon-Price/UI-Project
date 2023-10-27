import React, {useEffect, useState } from "react";
import axios from "axios";
import { Container, ImageContainer, InfoContainer, Title } from "../styles/Slider.styles";

const MenuPage = ({imgUrl, pageName}) => {

    return (
        <Container>
            <ImageContainer style={{ backgroundImage: `url(${imgUrl})` }}>
                <InfoContainer>
                    <Title style={{ fontSize: "150px" }}>{pageName}</Title>
                </InfoContainer>
            </ImageContainer>
        </Container>
    );
};

export default MenuPage