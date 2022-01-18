import React from 'react'

export default function MovieCard(props) {
   console.log(props.movie)
   if(props.movie.poster_path&& props.movie.overview){
    return (
    <article className="postcard dark red">
        <img className="postcard__img" src={
           props.movie.poster_path?
           `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`:
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.movie.poster_path}`} alt="" />	
        <div className="postcard__text">
           <h1 className="postcard__title red">{props.movie.title}</h1>
           <div className="postcard__subtitle small">
              <i className="fa fa-calendar mr-2"></i>{props.movie.release_date}
              {props.movie.vote_average ? 
                  <span>
                     <i className="fa fa-star mr-2"></i>
                     {props.movie.vote_average}
                  </span> :'' 
               }
               {props.movie.original_language ? 
                  <span>
                     <i className="fa fa-globe mr-2"></i>
                     {props.movie.original_language}
                  </span> :'' 
               }    
           </div>
           <div className="postcard__bar"></div>
           <div className="postcard__preview-txt">{props.movie.overview}</div>
           <ul className="postcard__tagbox">
           </ul>
        </div>
     </article>  
    )}else{
       return('')
    }
}



