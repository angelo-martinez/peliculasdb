import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { calcTime, convertMoney } from '../helpers.js';

const InfoBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 4rem;
    height: auto;
    background: #1c1c1c;
    padding: 5px;
    font-family: 'Abel', sans-serif;
    font-size: 1.25rem;
    color: #fff;
`

const MovieVBar = ({ time, budget, revenue, date }) => (
  <InfoBar>
    <Container fluid>
        <Row>
            <Col>
                <FontAwesome name="stopwatch" className="mr-2"/>
                <span>Tiempo: {calcTime(time)}</span>
            </Col>
            <Col>
                <FontAwesome name="dollar-sign" className="mr-2"/>
                <span>Presupuesto: {convertMoney(budget)}</span>
            </Col>
            <Col>
                <FontAwesome name="ticket-alt" className="mr-2"/>
                <span>Ganancias: {convertMoney(revenue)}</span>
            </Col>
            <Col>
                <FontAwesome name="calendar-alt" className="mr-2"/>
                <span>Estreno: {date}</span>
            </Col>
        </Row>

    </Container>
  </InfoBar>
)

MovieVBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
}

export default MovieVBar;