import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuPage from '../components/MenuPage';

const Container = styled.div`

`

const StorePicks = () => {
    const pageName = "Store Picks";
    const imgUrl = "https://domf5oio6qrcr.cloudfront.net/medialibrary/11499/3b360279-8b43-40f3-9b11-604749128187.jpg";

    return(
        <Container>
            <Navbar/>
                <MenuPage imgUrl={imgUrl} pageName={pageName}/>
            <Footer/>
        </Container>
    )
}


export default StorePicks