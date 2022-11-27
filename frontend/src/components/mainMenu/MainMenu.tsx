import React from 'react';
import { FaHome, FaUsers } from 'react-icons/fa'
import { StyledMainMenu, DropdownButtonStyled } from './styles';


const MainMenu = () => {

    return (
        <StyledMainMenu>
            <DropdownButtonStyled className='dropdown1' page='home' name='Home' icon={<FaHome />} />
            <DropdownButtonStyled className='dropdown1' name='Members' icon={<FaUsers />}>
                <DropdownButtonStyled className='dropdown2' name='Management' page='membersManagement' />
                <DropdownButtonStyled className='dropdown2' name='Birthdays' page='membersBirthdays' />
            </DropdownButtonStyled>
            
        </StyledMainMenu>
    );
};

export default MainMenu;