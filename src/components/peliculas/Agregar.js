import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Agregar = ({setPeliculas, peliculas}) => {

    const navigate = useNavigate();

    const [director, setDirector] = useState('')
    const [distribuidora, setDistribuidora] = useState('')
    const [duracion, setDuracion] = useState('')
    const [genero, setGenero] = useState('')
    const [imagen, setImagen] = useState('')
    const [pais, setPais] = useState('')
    const [reparto, setPeparto] = useState('')
    const [titulo, setTitulo] = useState('')
    const [sipnosis, setSipnosis] = useState('')
    const [year, setYear] = useState('')


    const agregar = async () => {
        if (director && 
            distribuidora && 
            duracion && 
            genero && 
            imagen && 
            pais && 
            titulo && 
            reparto && 
            sipnosis && 
            year) {
            await axios.post('http://localhost:5000/peliculas', {
                director,
                distribuidora,
                duracion,
                genero,
                imagen,
                pais,
                reparto,
                titulo,
                sipnosis,
                year
            })
            .then(peli => setPeliculas([...peliculas,peli.data]))
            navigate('/')
        }
    }

    return (
        <div className="agregarP me-auto ms-auto">
            <div className="m-3">
             <Link  to='/peliculas' >Volver a Peliculas</Link>
            </div>
            <h1>Nueva Pelicula</h1>
            <fieldset>
                <form>
                    <div className="form-group">
                        <label className="form-label mt-4">Director</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setDirector(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Distribuidora</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setDistribuidora(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Duracion</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={(e) => setDuracion(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Genero</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setGenero(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Imagen URL</label>
                        <input
                            type="url"
                            className="form-control"
                            onChange={(e) => setImagen(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Pais de Origen</label>
                        <input
                            type="url"
                            className="form-control"
                            onChange={(e) => setPais(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Reparto</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setPeparto(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Titulo</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Sipnosis</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setSipnosis(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Año</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                </form>
            </fieldset>
            <div className="d-flex flex-column">
                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    onClick={agregar}
                >
                    Agregar Pelicula
                </button>
            </div>
        </div>
    )
}

export default Agregar