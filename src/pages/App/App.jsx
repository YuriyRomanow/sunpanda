import Header from '../../components/Header/Header'
import styles from './App.module.css';
import '../../styles/style.css';


function App() {
    return (
        <div className={styles.layout}>
            <Header/>
            <div className='page-container'>
                <section className='home-banner row justify-content-between'>
                    <div className='l-element col-4'></div>
                    <div className='c-element col-4'>
                        <div className="c-element-image align-self-center">
                            <p className="banner-text text-center">
                                АГРЕГАТОР ДОСТАВКИ
                                <br/>ИЗ РЕСТОРАНОВ
                                <br/>ВАШЕГО ГОРОДА
                            </p>
                        </div>
                    </div>
                    <div className="r-element col-4"></div>
                </section>
            </div>
        </div>
    );
}

export default App;
