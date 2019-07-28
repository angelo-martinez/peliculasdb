import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import {
  withRouter
} from 'react-router-dom';

const SearchWrapper = styled.div`
    width: 100%;
    height: 6.5rem;
    background: #141414;
    position: relative;
    padding: 1.6rem 1.25rem 0px 1.25rem;
    box-sizing: border-box;
    color: #fff;
`

const SeachContent = styled.div`
    max-width: 80rem;
    width: 100%;
    height: 3.4rem;
    background: #353535;
    margin: 0 auto;
    border-radius: 2.5rem;
    position: relative;
    color: #fff;
`

const SearchInput = styled.input`
    font-size: 2.4rem;
    position: relative;
    margin: .5rem 0 0 3.75rem;
    border: 0;
    background: transparent;
    height: 2.5rem;
    width: 90%;
    color: #fff;

    &:focus{
        outline: none;
    }
`

class SearchBar extends React.Component {
  state = {
    value: ''
  }
  // Must have this here so we can reset it
  timeout = null;

  doSearch = (event) => {
    // Destructuring prop
    const { callback } = this.props;

    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);
    // Set a timeout to wait for the user to stop writing
    // So we don´t have to make unnessesary calls
    this.timeout = setTimeout( () => {
      this.props.history.push('/');
      window.scrollTo(0, 700);
      callback(this.state.value);
    }, 500);
  }

  render () {
    // ES6 Destructuring state
    const { value } = this.state;

    return (
      <SearchWrapper>
        <SeachContent>
          <FontAwesome name="search" size="2x" 
          style={{
            position: "absolute",
            left: "20px",
            top: "12px",
            color: "#fff"
        }}
          />
          <SearchInput
            type="text"
            placeholder="Buscar"
            onChange={this.doSearch}
            value={value}
          />
        </SeachContent>
      </SearchWrapper>
    )
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func
}

export default withRouter(SearchBar);