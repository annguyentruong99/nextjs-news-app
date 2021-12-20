import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

import axios from 'axios';

const Home: React.FC = () => {
    const [_, setState] = useState({
			newsArticles: new Array(),
		});

    useEffect(() => {
        axios
            .get('https://newsapi.org/v2/top-headlines?country=us', {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
                },
            })
            .then((res) =>
                setState((state) => ({
                    ...state,
                    newsArticles: res.data.articles,
                }))
            )
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className='page-container'>
            <NavBar>
                <h1>Hello World</h1>
            </NavBar>
        </div>
    );
};

export default Home;
