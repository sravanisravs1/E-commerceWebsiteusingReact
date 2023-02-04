import React from 'react';

import Movie from './Movies';
import { Card, Container } from 'react-bootstrap';


const MovieList = (props) => {
  return (
    <Container>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </Container>
  );
};

export default MovieList;
