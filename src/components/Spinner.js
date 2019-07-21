import React from 'react';
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Loader = styled.div`
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid #16d47b; /* Blue */
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    animation: 0.8s ${spin} linear infinite;
    margin: 1.25rem auto;
`

const Spinner = () => (
  <Loader />
)

export default Spinner;