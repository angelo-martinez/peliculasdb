import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../query';

const HeroImageWrapper = styled.div`
  background: 100%;
  background-size: cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 37.5rem;
  position: relative;
`
const HeroImageContent = styled.div`
  max-width: 80rem;
  padding: 1.25rem;
  margin: 0 auto;
`
const HeroImageText = styled.div`
  z-index: 100;
  max-width: 43rem;
  position: absolute;
  bottom: 2.5rem;
  margin-right: 1.25rem;
  min-height: 6.25rem;
  background: rgba(0, 0, 0, 0.0);
  color: #fff;

  @media ${device.tablet} {
    max-width: 100%;
  }
`
const HeroImageH2 = styled.h2`
  font-family: 'Abel', sans-serif;
  font-size: 3rem;
  color: #fff;

  @media ${device.tablet} {
    font-size: 2.4rem;
  }
`
const HeroImageP = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: #fff;

  @media ${device.tablet} {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`

const HeroImg = ({ image, title, text }) => (
  <HeroImageWrapper style={{background: `url('${image}')`}}>
    <HeroImageContent>
      <HeroImageText>
        <HeroImageH2>{title}</HeroImageH2>
        <HeroImageP>{text}</HeroImageP>
      </HeroImageText>
    </HeroImageContent>
  </HeroImageWrapper>
)

HeroImg.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

export default HeroImg;