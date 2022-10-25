import React from 'react';
import Banner from "../../components/HomePage/Banner";
import CitiesList from "../../components/HomePage/CitiesList";
import Footer from "../../components/Footer";

import styles from './HomePage.module.css'


const HomePage = () => {
    return (
        <>
            <Banner/>
            <CitiesList/>
            <Footer/>
        </>
    );
};

export default HomePage;