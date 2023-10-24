import React from 'react';
import SubHeader from '../components/SubHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Orders from '../components/Orders';

const OrderHistory = () => {
    return(
        <div>
            <Navbar/>
            <Orders/>
            <Footer/>
        </div>
    )
}

export default OrderHistory;