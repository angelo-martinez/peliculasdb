import React from 'react';
import { Logo } from './Header'
import styled from 'styled-components';

const Footer = () => {
    return(
        <footer className="footer mt-auto py-3" style={{ backgroundColor: "#141414"}}>
            <div className="container">
                <Logo>Peliculas-BD</Logo>
                <div className="mr-0">
                    right
                </div>
            </div>
        </footer>
    )
}

export default Footer;