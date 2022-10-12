import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Nav from '../Components/Nav.js';

function Albums() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8000/albums',
      );

      setData(result.data);
    };

    fetchData();
  }, []);


  return (
    
    <>
    <Nav />
      <h1>Albums :</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.cover_small} alt='cover_small'/>
          </li>
        ))}
      </ul>
      

    


    </>
  );

}
export default Albums;