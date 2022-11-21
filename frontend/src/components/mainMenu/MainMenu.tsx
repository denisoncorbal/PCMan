import React, { useContext } from 'react';
import { pageContext } from '../../context/PageContext';
import { StyledMainMenu } from './styles';


const MainMenu = () => {

    const context = useContext(pageContext);

    const handleClick = ()=>{
        console.log('Contexto inicial: ' + context.page)
        context.page == 'home' ? context.setPage('memberManagement') : context.setPage('home');
        console.log('Contexto final: ' + context.page)
    }

    return (
        <StyledMainMenu>
            <button onClick={handleClick}>
                MemberManagement
            </button>
        </StyledMainMenu>
    );
};

export default MainMenu;