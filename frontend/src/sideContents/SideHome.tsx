import React, { useState, useEffect } from 'react';
import Loading from '../utils/Loading';
import { SideHomeContainer, StyledLogoContainer } from './sideHomeStyles';
import logo from '../assets/logo.png';


interface SideHomeProps {
    name: string;
}

const SideHome = (props: SideHomeProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, []);

    return (
        <SideHomeContainer>
            {
                isLoading ? <Loading /> :
                    <>
                        <StyledLogoContainer>
                            <img src={logo} alt='Logo with three house shapes on the back and the name PCMan on the front all in different tons of green' width='50%' height='50%' />
                        </StyledLogoContainer>
                    </>
            }
        </SideHomeContainer>
    );
};



export default SideHome;