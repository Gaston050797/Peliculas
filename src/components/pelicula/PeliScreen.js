import { Link, useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'

export default function PeliScreen({ peliculas, setPeliculas }) {

    const { peliculaId } = useParams();
    const navigate = useNavigate()

    const pelicula = peliculas.find(peli => peli.titulo === peliculaId);

    const eliminar = async (id) => {
        navigate('/')
        await axios.delete('http://localhost:5000/peliculas/' + id)
        const peli = peliculas.filter(pelicula => pelicula.id !== id)
        setPeliculas(peli)
    }

    const {
        director,
        distribuidora,
        duracion,
        genero,
        imagen,
        pais,
        reparto,
        titulo,
        sipnosis,
        year,
        id
    } = pelicula;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={imagen}
                    alt={titulo}
                    className="img-thumbnail "
                />
            </div>
            <div className="col-8 ">
                <h3>{titulo}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Distribuidora:</b> {distribuidora} </li>
                    <li className="list-group-item"> <b>Director:</b> {director} </li>
                    <li className="list-group-item"> <b>Reparto:</b> {reparto} </li>
                    <li className="list-group-item"> <b>Genero:</b> {genero} </li>
                    <li className="list-group-item"> <b>Duracion:</b> {duracion} min. </li>
                    <li className="list-group-item"> <b>Año:</b> {year} </li>
                    <li className="list-group-item"> <b>Pais de Origen:</b> {pais} </li>
                </ul>
                <h5 className="mt-3">Sipnosis</h5>
                <p>{sipnosis}</p>
                <div type="button" className="btn btn-outline-info">
                    <Link to="/">Regresar</Link>
                </div>
                <button
                    className="btn btn-outline-danger"
                    onClick={() => eliminar(id)}
                >
                    eliminar
                </button>
            </div>
        </div>
    )
}
