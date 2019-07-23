import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const HeaderDiv = styled.div`
    width: 100%;
    height: auto;
    background: #1c1c1c;
    padding: 0 1.2rem;
    box-sizing: border-box;
`

const HeaderContent = styled.div `
    max-width: 80rem;
    min-height: 2rem;
    height: auto;
    margin: 0 auto;
    box-sizing: border-box;
    overflow: hidden;
`
const Logo = styled.h1`
  padding-top: 10px;
  width: auto;
  float: left;
  color: white;
  font-family: 'Rock Salt', cursive;
`

const TmdbLogo = styled.img`
    width: 7.5rem;
    margin-top: 1rem;
    float: right;
`

const Header = () => (
  <HeaderDiv>
    <HeaderContent>
      <Link to="/">
        <Logo>Peliculas-db</Logo>
      </Link>
      <FontAwesome name="search" size="2x" style={{
            float: "left",
            left: "20px",
            top: "12px",
            color: "#fff"
        }}
      />
      <TmdbLogo src="/images/tmdb_logo.png" alt="tmdb-logo" />
    </HeaderContent>
  </HeaderDiv>
)

export default Header;