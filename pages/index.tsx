import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.scss';

const Home: React.FC = () => {
    return (
        <div className='page-container'>
            <NavBar>
                <h1>Hello, World</h1>
            </NavBar>
        </div>
    );
};

export default Home;
