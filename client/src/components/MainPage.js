import React from "react";
import Button from "./UI/Button";
import Footer from './UI/Footer';
import styles from './MainPage.module.css';

const MainPage = (props) => {
    return(
        <div>
            <div className={styles['container']}>
                <p className={styles['header-main']}>Welcome to RPG Stats website</p>
                <div className={styles['button-container']}>
                    <Button>Login</Button>
                    <Button>Register</Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainPage;