import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.div`
  background: #16d47b;
  width: 100%;
  min-height: 1.5rem;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 20px;

  &:hover{
    opacity: 0.8;
  }

  & p {
    font-size:42px;
    padding: 5px;
  }
`

const LoadMasBtn = ({ text, onClick }) => (
  <Button onClick={onClick}>
    <p>{text}</p>
  </Button>
)

LoadMasBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default LoadMasBtn;