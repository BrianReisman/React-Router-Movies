import React from 'react';
import {useHistory} from 'react-router-dom';

export default function MovieList(props) {
  // const {push} = useHistory(); //history object comes in from useHistory = nav magix. go back go forward. When trying to nav, do I want this to behave like an anchor tag? Or a button or div or card? If the latter history.push/ Keep <link> for nav or footer.
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <div>
          <MovieDetails key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id} = props.movie;
  const {push} = useHistory();
  console.log(useHistory);
// use push below feed path.

  return (
      <div className="movie-card" onClick={()=>{push(`/movies/${id}`)}}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
  );
}

// onClick={clickHandler} to movie-card?