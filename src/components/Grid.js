import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const FadeInGrid = styled.div`
    animation: 1s ${fadeIn} ease-out;
`

const FourColGrid = styled.div`
    text-align: center;
    & h1{
        font-size: 3.6rem;
    }
`

const GridContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
    position: relative;
`

const Grid = ({ header, loading, children }) => {
    const renderElements = () => {
        const gridElements = children.map( (element, i) => (
        <FadeInGrid key={i}>
            {element}
        </FadeInGrid>
        ))
        return gridElements;
    }

    return (
    <FourColGrid>
            {header && !loading ? <h1>{header}</h1> : null}
        <GridContent>
            {renderElements()}
        </GridContent>
    </FourColGrid>
    )
}

Grid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default Grid;