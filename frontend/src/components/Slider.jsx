import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { sliderItems } from "../data";
import {Container, ImageContainer, InfoContainer, Title, Description, Button, BottomSlide, SubTitle, BottomInfo, ProductContainer, ProductImage, ProductNameContainer, Skeleton, ShopAll, TC } from "../styles/Slider.styles.jsx";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    useNavigate,
  } from "react-router-dom";

// Slider is the carousel with the images and the arrows. 

/* Shuffle arrays */
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

const Slider = () => {
    /* Get Products */
    const [prod, setProd] = useState([]);
    useEffect(() => {
        const getProd = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                setProd(res.data);
                console.log(res);
            } catch(err) {}
        };
        getProd();
    }, []);
    
    const allBest = prod.filter(prod => prod.isBestSeller);
    const allPicks = prod.filter(prod => prod.isStoreChoice);
    const allExotic = prod.filter(prod => prod.isExotic);
    const best = shuffleArray(allBest).slice(0,3);
    const picks = shuffleArray(allPicks).slice(0, 3);
    const exotic = shuffleArray(allExotic).slice(0, 3);

    const [slideIndex, setSlideIndex] = useState(0);
    // route to products page
    let navigate = useNavigate();
    const handleShopNow = () => {
        let path = '/in-season/';
        navigate(path);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <TC>
                <ImageContainer/>
                <InfoContainer>
                    <Title>Seasonal Fruits</Title>
                    <Description>Shop from our wide variety of in-season fruits</Description>
                    <Button onClick={() => handleShopNow()}>SHOP NOW</Button>
                </InfoContainer>
            </TC>

            <BottomSlide>
                <SubTitle>Some of our Best Sellers</SubTitle>
                <Link to="/best-sellers" style={{textDecoration: "none"}}>
                    <ShopAll>Shop All</ShopAll>
                </Link>
            </BottomSlide>
            <BottomInfo>
                {best.length > 0 ? (
                    best.map(item=>(
                        <Link to={`/products/${item._id}`}>
                            <ProductContainer>
                                <ProductImage src={item.img}></ProductImage>
                                <ProductNameContainer>
                                    <h2>{item.title.split(',')[0]}</h2>
                                    <h2 style={{marginTop: "0px", fontFamily: "Courier New"}}>${item.price}</h2>
                                </ProductNameContainer>
                            </ProductContainer>
                        </Link>
                    ))
                ) : (
                    Array.from({ length: 3 }).map((_, index) => (
                        <ProductContainer key={index}>
                          <Skeleton></Skeleton>
                        </ProductContainer>
                      ))
                )}
            </BottomInfo>
            <BottomSlide>
                <SubTitle>Store Picks</SubTitle>
                <Link to="/store-picks" style={{textDecoration: "none"}}>
                    <ShopAll>Shop All</ShopAll>
                </Link>
            </BottomSlide>
            <BottomInfo>
                {picks.length > 0 ? (
                    picks.map(item=>(
                        <Link to={`/products/${item._id}`}>
                            <ProductContainer>
                                <ProductImage src={item.img}></ProductImage>
                                <ProductNameContainer>
                                    <h2>{item.title.split(',')[0]}</h2>
                                    <h2 style={{marginTop: "0px", fontFamily: "Courier New"}}>${item.price}</h2>
                                </ProductNameContainer>
                            </ProductContainer>
                        </Link>
                    ))
                ) : (
                    Array.from({ length: 3 }).map((_, index) => (
                        <ProductContainer key={index}>
                          <Skeleton></Skeleton>
                        </ProductContainer>
                      ))
                )}
            </BottomInfo>
            <BottomSlide>
                <SubTitle>Some of our Exotic Selection</SubTitle>
                <Link to="/exotic-fruits" style={{textDecoration: "none"}}>
                    <ShopAll>Shop All</ShopAll>
                </Link>
            </BottomSlide>
            <BottomInfo>
                {exotic.length > 0 ? (
                    exotic.map(item=>(
                        <Link to={`/products/${item._id}`}>
                            <ProductContainer>
                                <ProductImage src={item.img}></ProductImage>
                                <ProductNameContainer>
                                    <h2>{item.title.split(',')[0]}</h2>
                                    <h2 style={{marginTop: "0px", fontFamily: "Courier New"}}>${item.price}</h2>
                                </ProductNameContainer>
                            </ProductContainer>
                        </Link>
                    ))
                ) : (
                    Array.from({ length: 3 }).map((_, index) => (
                        <ProductContainer key={index}>
                          <Skeleton></Skeleton>
                        </ProductContainer>
                      ))
                )}
            </BottomInfo>
        </Container>
    );
};

export default Slider