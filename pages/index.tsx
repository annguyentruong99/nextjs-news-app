import React from 'react';
import Toolbar from '../components/toolbar';
import styles from '../styles/Home.module.scss';

const Home: React.FC = () => {
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <h1>Next.js News App</h1>
                <h3>Your one stop shop for the lastest news articles</h3>
            </div>
        </div>
    );
};

export default Home;
