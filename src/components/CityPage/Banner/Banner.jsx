import React, {useEffect} from "react";
import banner from './img/banner.jpg'
import cn from "classnames";
import styles from './Banner.module.css'


const Banner = () => {
    return (
        <>
            <div className={cn(styles.section_banner__container)}>
                <img src={banner} className={cn(styles.section_banner__img, "gt-xs")}/>
                <div className={styles.section_banner__block_header}>
                    <h1 className={cn(styles.main_heading)}>ДОСТАВКА ГОТОВЫХ БЛЮД ИЗ РЕСТОРАНОВ</h1>
                    <div className={cn(styles.section_banner__btn, styles.flex, styles.float_left)}>
                        <a className={cn(styles.section_banner__block_btn, styles.cursor_pointer, "p-3", "mt-3")}>Заказать
                            доставку</a>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;