import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`

`

const BestSellers = () => {
    return(
        <Container>
            <Navbar/>
                Best Sellers
            <Footer/>
        </Container>
    )
}


export default BestSellers