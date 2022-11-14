
import  PeliCard  from './PeliCard';

export default function PeliList ({peliculas}) {

    // const todas =  peliculas.filter( hero => hero.publisher === publisher );
    

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 ">
            {
                peliculas.map( hero => (
                    <PeliCard 
                        key={ hero.id } 
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
