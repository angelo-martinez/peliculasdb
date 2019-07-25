import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Collapse, CardBody, Card } from 'reactstrap';
import SearchBar from '../components/SearchBar';

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

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <HeaderDiv>
        <HeaderContent>
          <Link to="/">
            <Logo>Peliculas-db</Logo>
          </Link>
          <TmdbLogo src="/images/tmdb_logo.png" alt="tmdb-logo" />
          <FontAwesome name="search" size="2x" className="mt-3 mr-2" onClick={this.toggle} style={{
                float: "right",
                color: "#fff"
            }}
          />
        </HeaderContent>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <SearchBar />
            </CardBody>
          </Card>
        </Collapse>
      </HeaderDiv>
    );
  }
}

export default Header;