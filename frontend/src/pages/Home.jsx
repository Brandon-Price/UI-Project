import React from 'react';
import SubHeader from '../components/SubHeader';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

// Main Page? For now it is

const Home = ({ user, setUser }) => {
    return (
        <div>
            <Navbar user={user} setUser={setUser}/>
            <SubHeader />
            <Slider />
            <Footer/>
        </div>
    )
}

export default Home