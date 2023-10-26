import React from 'react';
import SubHeader from '../components/SubHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Orders from '../components/Orders';

const OrderHistory = () => {
    const page = 'about';

    return(
        <div>
            <Navbar page={page}/>
            <Orders/>
            <Footer/>
        </div>
    )
}

export default OrderHistory;