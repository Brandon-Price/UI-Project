import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`

`

const InSeason = () => {
    return(
        <Container>
            <Navbar/>
                In Season
            <Footer/>
        </Container>
    )
}


export default InSeason