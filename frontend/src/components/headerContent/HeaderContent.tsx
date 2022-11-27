import React, { useContext } from 'react';
import { pageContext } from '../../context/PageContext';
import HeaderHome from '../../headerContents/HeaderHome';
import HeaderMembersManagement from '../../headerContents/HeaderMembersManagement';
import Switch from '../../utils/Switch';
import { StyledHeaderContent } from './styles';

const HeaderContent = () => {
    const context = useContext(pageContext);

    return (
        <StyledHeaderContent id='header-content'>
            <Switch test={context.page}>
                <HeaderHome name='home' />
                <HeaderMembersManagement name='membersManagement' />
            </Switch>
        </StyledHeaderContent>
    );
};

export default HeaderContent;