import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import MovieCard from './MovieCard';

export default function MovieList(props) {
    const [movies, setMovies] = useState();

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity
        .desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&fbclid=IwAR3tJLmIvtPi34eAd4pO21Ai-FvIdDhOccr9HUz4xUTNWJ6F8oQ8qlz74nU`)
            .then(response => response.json())
            .then(data => {if(data.results&&!movies) setMovies(data.results); console.log(movies)} );
    })
    
    if(movies){
        return(
        <section className='dark'>     
            {movies.map((e)=><MovieCard key = {e.id} movie={e}/>)}
        </section> 
        )
    } else{
        return(<Loading />)
    }
}


