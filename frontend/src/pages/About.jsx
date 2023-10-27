import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`

`

// Creating an faq page that has generic help, doesn't have to be dynamic just have
// something to show, look up some other faq pages to see what they have and replicate
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