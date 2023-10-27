import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`
    margin-top: 59px;
`

const About = () => {
    const page = 'about';

    return(
        <Container>
            <Navbar page={page}/>
                About Page
            <Footer/>
        </Container>
    )
}


export default About