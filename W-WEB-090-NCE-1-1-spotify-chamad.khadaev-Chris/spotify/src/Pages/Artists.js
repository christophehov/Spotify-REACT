import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../Components/Nav.js';
import axios from 'axios';

function Artists() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:8000/artists',
            );

            setData(result.data);
        };

        fetchData();
    }, []);


    return (
        <>
            <Nav />

            <h1>Artists :</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.bio}</p>
                        <img src={item.photo} alt='cover_small' />
                    </li>
                ))}
            </ul>





        </>
    );

}
export default Artists;