import React from 'react';
import styled from 'styled-components';


const CardStyler = styled.div`
color: #073964;
margin: 50px;
padding: 50px;
font-size: 150%;
border: 5px solid lightseagreen;
background-color: rgba(32, 178, 170, 0.6);
border-radius: 100px;
max-width: 1600px;
font-family: 'Exo', sans-serif;
`;

const MovieCard = props => {
  return (
    <div className="save-wrapper">
      <CardStyler>
      <div className="movie-card">
        <h2>{props.movie.title}</h2>
        <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {props.movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
      </CardStyler>
    </div>
  );
}

export default MovieCard;
