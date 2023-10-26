import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`

`

const ExoticFruits = () => {
    return(
        <Container>
            <Navbar/>
                Exotic Fruits
            <Footer/>
        </Container>
    )
}


export default ExoticFruits