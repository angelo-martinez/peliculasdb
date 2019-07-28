import React from 'react';
import { Logo } from './Header'

const Footer = () => {
    return(
        <footer className="footer mt-auto py-3" style={{ backgroundColor: "#141414"}}>
            <div className="container">
                <Logo>Peliculas-BD</Logo>
            </div>
        </footer>
    )
}

export default Footer;