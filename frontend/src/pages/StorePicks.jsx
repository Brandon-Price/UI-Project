import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`

`

const StorePicks = () => {
    return(
        <Container>
            <Navbar/>
                Store Picks
            <Footer/>
        </Container>
    )
}


export default StorePicks