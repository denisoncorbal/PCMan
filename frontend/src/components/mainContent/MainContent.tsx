import React, { useContext } from 'react';
import { pageContext } from '../../context/PageContext';
import Home from '../../pages/Home';
import MembersBirthdays from '../../pages/MembersBirthdays';
import MemberManagement from '../../pages/MembersManagement';
import Switch from '../../utils/Switch';
import { StyledMainContent } from './styles';


const MainContent = () => {
    const context = useContext(pageContext);
    return (
        <StyledMainContent>
            <Switch test={context.page}>                
                <Home name="home" />
                <MemberManagement name='membersManagement' />
                <MembersBirthdays name='membersBirthdays' />
            </Switch>
        </StyledMainContent>
    );
};

export default MainContent;