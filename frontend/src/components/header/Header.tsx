import React from 'react';
import { StyledHeader, StyledLogoContainer, StyledProfile } from './styles';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <StyledHeader>
            <StyledLogoContainer>
                <img src={logo} alt='Logo with three house shapes on the back and the name PCMan on the front all in different tons of green' width='100%' height='100%' />
            </StyledLogoContainer>

            <StyledProfile>
                Profile
            </StyledProfile>
        </StyledHeader>
    );
};

export default Header;