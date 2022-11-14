import { useEffect, useState } from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import axios from 'axios';

import { Navbar } from '../components/ui/Navbar';

import  Peliculas  from '../components/peliculas/Peliculas';

import  PeliScreen  from '../components/pelicula/PeliScreen';
import Agregar from '../components/peliculas/Agregar';

export const AppRouter = () => {

    const url = 'http://localhost:5000/peliculas';

    const [peliculas, setPeliculas] = useState([]);

    const datos = async () => {

           const pelis = await axios(url)
            setPeliculas(pelis.data)
    };

    useEffect (() => {
        datos()
    }, []);

    return (
        <BrowserRouter>
            
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="peliculas/:peliculaId" element={<PeliScreen peliculas={peliculas} setPeliculas={setPeliculas}/>} />
                    <Route path="/" element={<Peliculas peliculas={peliculas} />} />
                    <Route path="agregar" element={<Agregar setPeliculas={setPeliculas} peliculas={peliculas}/>} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}
