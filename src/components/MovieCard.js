import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieCardDiv = styled.div`
    & img{
        width: 100%;
        height: 26.25rem;
        transition: all 0.3s;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 10px;
    }
`

const ClickableImg = styled.img`
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

const MovieCard = ({ image, movieId, movieName, clickable }) => (
  <MovieCardDiv>
    {clickable ?
      <Link to={{ pathname: `/${movieId}`,  movieName: `${movieName}`}}>
        <ClickableImg src={image} alt="movie poster" />
      </Link>
      :
      <img src={image} alt="movie poster" />
    }
  </MovieCardDiv>
)

MovieCard.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
  clickable: PropTypes.bool
}

export default MovieCard;