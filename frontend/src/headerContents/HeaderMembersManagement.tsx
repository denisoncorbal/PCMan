import React, { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa'
import AddMemberModal from '../modals/AddMemberModal';
import Loading from '../utils/Loading';
import { AddUserButtonStyled, HeaderMembersManagementContainer } from './headerMembersManagementStyles';

interface HeaderMembersManagementProps {
    name: string;
}

export const HeaderMembersManagement = (props: HeaderMembersManagementProps) => {
    const [isLoading, setIsLoading] = useState(true);    

    useEffect(() => {        
        setIsLoading(false);        
    }, []);

    const handleClick = () => {        
        let root = document.getElementById('root');        
        let modal = document.getElementById('addMemberModal');        
        if(root && modal){        
            root.appendChild(modal);
            console.log(modal.className);
            modal.className = modal.className.replace('noShow', 'show');
        } 
    }

    return (
        <HeaderMembersManagementContainer>
            {
                isLoading ? <Loading /> :
                <>                
                    <AddUserButtonStyled onClick={handleClick}>
                        <FaUserPlus />
                    </AddUserButtonStyled>
                    <AddMemberModal id='addMemberModal' className='noShow'/>
                </>                
            }
        </HeaderMembersManagementContainer>
    );

};

export default HeaderMembersManagement;