import React, { useEffect, useState } from 'react';
import { StyledHeaderHomeContainer, StyledLogoContainer } from './headerHomeStyles';
import logo from '../assets/logo.png';
import Loading from '../utils/Loading';

interface HeaderHomeProps {
    name: string;
}

const HeaderHome = (props: HeaderHomeProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(false);
    }, [])
    return (
        <StyledHeaderHomeContainer>
            {
                isLoading ? <Loading /> :
                    <StyledLogoContainer>
                        <img src={logo} alt='Logo with three house shapes on the back and the name PCMan on the front all in different tons of green' width='100%' height='100%' />
                    </StyledLogoContainer>
            }

        </StyledHeaderHomeContainer>
    );
};

export default HeaderHome;