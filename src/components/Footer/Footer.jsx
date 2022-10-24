import React from 'react';
import {useNavigate} from "react-router-dom";
import cn from "classnames";
import styles from './Footer.module.css'
import img from './img/footer.png'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <footer className={cn(styles.footer)}>
                <div className={cn(styles.footer_container, styles.container)}>
                    <div className={cn(styles.footer__block, "col-xs-12", "col-sm-6", "col-md-3", "col-lg-3")}>
                        <img src={img} className={styles.footer__logo}/>
                        <ul>
                            <li className={styles.footer__item}>
                                <a className={styles.footer__link} href="https://franshiza.ru/franchise/read/SunPanda/">Франшиза
                                    SunPanda</a>
                            </li>
                            <li className={styles.footer__item}>
                                <a className={styles.footer__link} href="https://franshiza.ru/franchise/read/SunPanda/">О
                                    нас</a>
                            </li>
                            <li className={styles.footer__item}>
                                <a className={styles.footer__link} href="https://franshiza.ru/franchise/read/SunPanda/">Стать
                                    партнером</a>
                            </li>
                            <li className={styles.footer__item}>
                                <a className={styles.footer__link} href="https://franshiza.ru/franchise/read/SunPanda/">Пользовательское
                                    соглашение</a>
                            </li>
                        </ul>
                    </div>

                    <div
                        className={cn(styles.footer__block, "text-center", "col-xs-12", "col-sm-6", "col-md-3", "col-lg-3")}>
                        <h2 className={cn(styles.second_heading, styles.footer__second_heading)}>Контакты ООО "Сан Панда"</h2>
                        <p className={styles.footer__tel}>
                            Call центр:
                            <a className={styles.footer__tel}>8 (996) 275 79 18</a>
                        </p>
                        <p className={styles.footer__tel}>
                            E-mail:
                            <a className={styles.footer__tel}>support@sunpanda.ru</a>
                        </p>
                        <p className={styles.footer__tel}>
                            © Copyright 2022 Все права защищены - sunpanda.ru
                        </p>
                    </div>
                </div>
            </footer>
        </>);
};

export default Footer;