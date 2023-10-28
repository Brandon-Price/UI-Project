import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuPage from '../components/MenuPage';

const Container = styled.div`

`

const ExoticFruits = () => {
    const page = "prod";
    const pageName = "Exotic Fruits";
    const imgUrl = "https://png.pngtree.com/background/20230611/original/pngtree-tropical-fruits-from-yucat%C3%A1n-picture-image_3138837.jpg";

    return(
        <Container>
            <Navbar page={page}/>
                <MenuPage pageName={pageName} imgUrl={imgUrl}/>
            <Footer/>
        </Container>
    )
}


export default ExoticFruits