import  PeliList  from '../pelicula/PeliList'


export default function Peliculas ({peliculas}) {
    return (
        <div>
            <h1>Peliculas</h1>
            <hr />

            <PeliList peliculas={peliculas} />

        </div>
    )
}
