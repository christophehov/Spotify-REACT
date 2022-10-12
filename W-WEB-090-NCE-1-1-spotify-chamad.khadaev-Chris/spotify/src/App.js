import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Albums from './Pages/Albums';
import Artists from './Pages/Artists';
import Genres from './Pages/Genre';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Albums />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/genres" element={<Genres />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;