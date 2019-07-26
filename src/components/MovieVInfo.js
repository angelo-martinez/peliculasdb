import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styled, { keyframes } from 'styled-components';
import MovieCard from './MovieCard';

const MovieCardWrapper = styled.div`
    width: 18.75rem;
    margin: 1rem;
    float: left;
`

const animateMovieinfo = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
const MovieInfoWrapper = styled.div`
    background-size: cover !important;
    background-position: center !important;
    width: 100%;
    padding: 2.5rem 1.25rem;
    box-sizing: border-box;
    animation: ${animateMovieinfo} 1s;
`
const MovieInfoContent = styled.div`
    max-width: 80rem;
    min-height: 28rem;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 1.25rem;
    position: relative;
`
const MovieInfoText = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    padding: 2.5rem;
    color: #fff;
    overflow: hidden;

    & h1{
        font-family: 'Abel', sans-serif;
        font-size: 3rem;
        margin: 0; 
    }
    & h3{
        font-size: 1rem;
        line-height: 0;
        margin-top: 1.8rem; 
    }
    & p{
        font-family: 'Abel', sans-serif;
        font-size: 1.1rem;
        line-height: 1.6rem;
    }
`
const Rating = styled.div`
    width: 11.8rem;
    height: 1.25rem;
    margin-top: 1.25rem;
    position: relative;
`
const Meter = styled.meter`
    &::-webkit-meter-bar {
    background: #fff;
    width: 9.4rem;
    }
    &::-webkit-meter-optimum-value {
    background: linear-gradient(to bottom, #16d47b) !important;
    }
    &::-webkit-meter-suboptimum-value {
    background: linear-gradient(to bottom, #fbb450) !important;
    }
    &::-webkit-meter-even-less-good-value {
    background: linear-gradient(to bottom, #ee5f5b) !important;
    }
`
const Score = styled.p`
    position: absolute;
    margin: 0;
    right: 0px;
    top: -3px;
`

const MovieInfo = ({ movie, directors }) => (
  <MovieInfoWrapper
    style={{
      background: movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')` : '#000'
    }}
  >
    <MovieInfoContent>
        <MovieCardWrapper>
            <MovieCard
            image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : './images/no_image.jpg'}
            clickable={false}
            />
        </MovieCardWrapper>
        <MovieInfoText>
            <h1>{movie.title}</h1>
            <h3>TRAMA:</h3>
            <p>{movie.overview}</p>
            <h3>CLASIFICACIÓN DE IMDB:</h3>
            <Rating>
            <Meter min="0" max="100" optimum="100" low="40" high="70" value={ movie.vote_average * 10}></Meter>
            <Score>{movie.vote_average}</Score>
            </Rating>
            {directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
            {directors.map( (element, i) => {
            return <p key={i} className="m-0">{element.name}</p>
            })}
        </MovieInfoText>
        <FontAwesome style={{  
            position: "absolute",
            bottom: "2.5rem",
            right: "2.5rem",
            color: "#fff"}} 
            name="film" size="5x" 
        />
    </MovieInfoContent>
  </MovieInfoWrapper>
)

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array
}

export default MovieInfo;