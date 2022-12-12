import React from 'react';
import { StyledFooter } from './styles';

const Footer = () => {
    return (
        <StyledFooter>
            <div id="links">
                <a href='www.ipb.org.br'>
                    <p>Igreja Presbiteriana do Brasil</p>
                </a>
            </div>
            
            <div id="copyright">
                <a href='mailto:teste@teste.com'>
                    <p>Denison Gonçalves Corbal</p>
                    </a>
            </div>
        </StyledFooter>
    );
};

export default Footer;