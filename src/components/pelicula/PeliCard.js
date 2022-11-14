import { Link } from 'react-router-dom'


export default function PeliCard  ({
    id,
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
}) {

    return (
        <div className="col">
            <div className="card">
                
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ imagen } className="card-img" alt={titulo} />
                    </div>
                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{titulo}</h5>
                            <p className="card-text"><b>Genero: </b>{genero}</p>

                            <Link to={`/peliculas/${titulo}`}>
                                Más...
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
