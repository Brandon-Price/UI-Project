import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuPage from '../components/MenuPage';

const Container = styled.div`

`

const InSeason = () => {
    const pageName = "In-Season";
    const imgUrl = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/autumn-concept-with-seasonal-fruits-and-vegetables-royalty-free-image-1569951867.jpg";

    return(
        <Container>
            <Navbar/>
                <MenuPage pageName={pageName} imgUrl={imgUrl}/>
            <Footer/>
        </Container>
    )
}


export default InSeason