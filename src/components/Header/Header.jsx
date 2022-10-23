import styles from "./Header.module.css";
import imgHeader from "./images/SunPanda.jpg";


const Header = () => {
    return (

        <header className={styles.header}>
            <a href="/">
                <img src={imgHeader} className={styles.header__item} alt="logo"/>
            </a>
        </header>

    );

}

export default Header;
