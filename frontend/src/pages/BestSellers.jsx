import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuPage from '../components/MenuPage';
import { useEffect } from 'react';

const Container = styled.div`

`

const BestSellers = () => {
    const page = "prod";
    const pageName = "Best Sellers";
    const imgUrl = "https://wardsgainesville.com/wp-content/uploads/2017/09/Picture1.jpg";

    return(
        <Container>
            <Navbar page={page}/>
                <MenuPage imgUrl={imgUrl} pageName={pageName}/>
            <Footer/>
        </Container>
    )
}


export default BestSellers