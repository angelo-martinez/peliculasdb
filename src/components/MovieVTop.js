import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieTopWrapper = styled.div`
    width: 100%;
    height: auto;
    background: #353535;
    color: #fff;
`

const MovieTopContent = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
`

const MovieVTop = ({ movie }) => (
  <MovieTopWrapper>
    <MovieTopContent>
        <div className="row">
            <Link to="/">
                <p>Home</p>
            </Link>
            <p>/</p>
            <p>{movie}</p>
        </div>
    </MovieTopContent>
  </MovieTopWrapper>
)

MovieVTop.propTypes = {
  movie: PropTypes.string
}

export default MovieVTop;