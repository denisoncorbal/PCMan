import React, { useEffect, useState } from 'react';
import Loading from '../utils/Loading';
import { HomeContainer } from './homeStyles';

interface HomeProps {
    name: string
}

const Home = (props: HomeProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);                
    }, []);
    return (
        <HomeContainer>
            {isLoading ? <Loading /> :
                <>
                    <h1>PCMan - Presbyterian Church Manager</h1>
                    <h3>Welcome!</h3>
                    <h3>Access the left menu and good work!</h3>
                </>
            }
        </HomeContainer>
    );
};

export default Home;