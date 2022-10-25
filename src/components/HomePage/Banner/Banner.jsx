import React from 'react';


import cn from "classnames";

import styles from "./Baner.module.css";

const Banner = () => {
    return (
        <div>
            <section className={cn(styles.banner, styles.justify_between, "row")}>
                <div className={cn(styles.l_element, "col-4")} alt=""/>
                <div className={cn(styles.c_element, "col-4")}>
                    <div className={cn(styles.c_element_image, "self-center")} alt=""/>
                    <p className={cn(styles.main_banner_text, "text-center") } >
                        Агрегатор доставки <br/>
                        из ресторанов <br/>
                        вашего города
                    </p>
                </div>
                <div className={cn(styles.r_element, "col-4")} alt=""/>
            </section>
        </div>
    );
};

export default Banner;

// fw-bolder text-white text-center lh-2 text-uppercase"