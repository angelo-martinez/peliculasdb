import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Collapse, CardBody, Card } from 'reactstrap';
import SearchBar from '../components/SearchBar';
import { device } from '../query';

const HeaderDiv = styled.div`
    width: 100%;
    height: auto;
    background: #141414;
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

    @media ${device.mobileXL} {
      min-height: 0px;
    }
`
export const Logo = styled.h1`
  padding-top: 10px;
  width: auto;
  float: left;
  color: #E50914;
  font-family: 'Righteous', cursive;

  @media ${device.mobileXL} {
    font-size: 1.25rem;
  }
`
const FontAwesomeWrapper = styled.div`
  float: right;
  color: #fff;
  cursor: pointer;

  @media ${device.mobileL} {
    display: inline-block;
    font-size: 10px;
  }
`
const TmdbLogo = styled.img`
    width: 7.5rem;
    margin-top: 1rem;
    float: right;

    @media ${device.mobileXL} {
      display: inline-block;
      width: 5rem;
    }
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
            <Logo>Peliculas-BD</Logo>
          </Link>
          <TmdbLogo src="/images/tmdb_logo.png" alt="tmdb-logo" className="mb-2"/>
          <FontAwesomeWrapper>
            <FontAwesome name="search" size="2x" className="mt-4 mr-4" onClick={this.toggle}/>
          </FontAwesomeWrapper>
        </HeaderContent>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <Context.Consumer>
              {({ actions }) => {
                  return <SearchBar callback={actions.searchItems}/>
              }}
            </Context.Consumer>
            </CardBody>
          </Card>
        </Collapse>
      </HeaderDiv>
     
    );
  }
}

export default Header;