import React, {useContext} from 'react';
import { StyledSideContent } from './styles';
import Switch from '../../utils/Switch';
import { pageContext } from '../../context/PageContext';
import SideHome from '../../sideContents/SideHome';
import SideMemberManagement from '../../sideContents/SideMembersManagement';

const SideContent = () => {
    const context = useContext(pageContext);

    return (
        <StyledSideContent>
            <Switch test={context.page}>
                <SideHome name="home" />
                <SideMemberManagement name='membersManagement' />
            </Switch>
        </StyledSideContent>
    );
};

export default SideContent;