import React, {useEffect, useRef, useState} from 'react';


import {getApiResource} from "../../utils/network";
import {API_CITY_RESTAURANTS} from "../../constants/api";
import RestaurantDiscounts from "../../components/CityPage/RestaurantDiscounts/RestaurantDiscounts";
import {useParams} from "react-router-dom";

import banner from '../../components/CityPage/Banner/img/banner.jpg'
import bannerPhone from '../../components/CityPage/Banner/img/banner-phone.jpg'
import cn from "classnames";
import styles from './CityPage.module.css'
import Steps from "../../components/CityPage/Steps";
import Footer from "../../components/Footer";
import Banner from "../../components/CityPage/Banner";
import RestaurantsList from "../../components/CityPage/RestoraneList/RestoraneList";


const CityPage = () => {
    const [img, setImg] = useState()
    const [discounts, setDiscounts] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const refRestaurant = useRef(null)

    const {name} = useParams()

    const getResource = async (url) => {
        const res = await getApiResource(url)

        if (res) {
            setDiscounts(res.discounts)
            setRestaurants(res.restaurants)
            return true
        }
    }

    useEffect(() => {
        getResource(API_CITY_RESTAURANTS + name)
    }, [name])

    useEffect(() => {
        const width = window.screen.availWidth
        if (width >= '801') {
            setImg(banner)
        } else {
            setImg(bannerPhone)
        }
    }, [])

    return (
        <>
            <Banner/>
            <RestaurantDiscounts discounts={discounts}/>
            <Steps/>
            <RestaurantsList restaurants={restaurants} refRestaurant={refRestaurant}/>
            <Footer/>
        </>
    );
};

export default CityPage;