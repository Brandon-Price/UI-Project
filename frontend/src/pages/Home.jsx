import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

// TODO
// Create a new type of slider item to make the front page look better
// Maybe something like a carousel with items from our site, doesn't have to be dynamic
const Home = () => {
    const page = 'home';

    return (
        <div>
            <Navbar page={page}/>
            <Slider />
            <Footer/>
        </div>
    )
}

export default Home