import React from 'react';
import {FaUserEdit} from 'react-icons/fa'
import { MemberResumeContainer, MembersManagementContainer } from './membersManagementStyles';

interface MemberManagementProps{
    name: string
}

const MemberManagement = (props: MemberManagementProps) => {
    return (
        <MembersManagementContainer>
        {
            //cabem 20 elementos na tela
            // TODO elemento reutilizável de exibição de usuário
        }
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>
            <MemberResumeContainer><FaUserEdit /> <p>Fulano de Tal</p> <p>(xx) x xxxx-xxxx</p> <p>fulano@fulano.com</p> </MemberResumeContainer>            
        </MembersManagementContainer>
    );
};

export default MemberManagement;