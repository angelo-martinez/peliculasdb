import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeroImageWrapper = styled.div`
  background: 100%, cover;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  position: relative;
`
const HeroImageContent = styled.div`
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
`
const HeroImageText = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  background: rgba(0, 0, 0, 0.0);
  color: #fff;
`
const HeroImageH2 = styled.h2`
  font-family: 'Abel', sans-serif;
  font-size:48px;
  color: #fff;
`
const HeroImageP = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
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