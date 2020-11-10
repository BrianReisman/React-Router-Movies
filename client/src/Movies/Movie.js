import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'; //TODo MUST IMPORT

export default function Movie(props) { //*props is never used. So at the start I don't need to pass anyhint, but if I need to import I will need to pass from app.js
  const [movie, setMovie] = useState();
  const { id } = useParams(); //id is an object inuseParams
  console.log(id);

  // let id = params; //TODO change this to make it dynamic. This need to come from elsewhere. It instructs the axios call. It could be gotten from the current URL
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        setMovie(res.data);
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]); //* add id

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
