import React, {useState} from 'react';
import {FaUserEdit} from 'react-icons/fa'
import { MemberResumeContainer, MembersManagementContainer } from './membersManagementStyles';

interface MemberManagementProps{
    name: string
}

interface Member{
    id?: number,
    name: string,
    telephone: string,
    email: string
}

const MemberManagement = (props: MemberManagementProps) => {
    const [members, setMembers] = useState<Member[] | null>(null);
    return (
        <MembersManagementContainer>
        {
            members ? members.map((member)=>{return(
                <MemberResumeContainer key={member.id}>
                    <FaUserEdit />
                    <p>{member.name}</p>
                    <p>{member.telephone}</p>
                    <p>{member.email}</p>
                </MemberResumeContainer>
            )} )
            : <></>
        }
        </MembersManagementContainer>
    );
};

export default MemberManagement;