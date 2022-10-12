import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../Components/Nav.js';
import axios from 'axios';

function Genre() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:8000/genres',
            );

            setData(result.data);
        };

        fetchData();
    }, []);


    return (
        <>
            <Nav />

            <h1>Genres :</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                    </li>
                ))}
            </ul>





        </>
    );

}
export default Genre;