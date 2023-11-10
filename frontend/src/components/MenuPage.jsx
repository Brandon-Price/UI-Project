import React, {useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import { Container, InfoContainer, Title } from "../styles/Slider.styles";
import { FruitContainer, ImageContainer } from "../styles/MenuPages.styles";
import { Skeleton, SkeleCon } from "../styles/Products.styles";
import { COLORS } from "../styles/Navbar.styles";

const MenuPage = ({imgUrl, pageName}) => {
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
    var fruits;
    if (pageName == "Store Picks") {
        fruits = prod.filter(prod => prod.isStoreChoice);
    } else if (pageName == "Best Sellers") {
        fruits = prod.filter(prod => prod.isBestSeller);
    } else if (pageName == "In-Season") {
        fruits = prod.filter(prod => prod.isSeason);
    } else if (pageName == "Exotic Fruits") {
        fruits = prod.filter(prod => prod.isExotic);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container style={{ minHeight: "90vh" }}>
            <ImageContainer style={{ backgroundImage: `url(${imgUrl})` }}/>
            <InfoContainer>
                    <Title style={{ 
                        fontSize: "100px", 
                        color: `${COLORS.sub}`,
                        textAlign: "center",
                        paddingTop: "25px"
                        }}>{pageName}</Title>
                </InfoContainer>
            <FruitContainer>
                {fruits.length > 0 ? (
                    fruits.map(item => (
                        <Product aria-label={item} item={item} key={item.id}/>
                    ))
                ) : (
                    Array.from({ length: 21}).map((_, index) => (
                        <SkeleCon>
                            <Skeleton></Skeleton>
                        </SkeleCon>
                    ))
                )}
            </FruitContainer>
        </Container>
    );
};

export default MenuPage