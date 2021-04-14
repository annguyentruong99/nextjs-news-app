import React from 'react';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.scss';

const Home: React.FC = () => {
    return (
        <div className='page-container'>
            <NavBar />
            <div className={styles.main}>
                <h1>Next.js News App</h1>
                <h3>Your one stop shop for the lastest news articles</h3>
            </div>
        </div>
    );
};

export default Home;
