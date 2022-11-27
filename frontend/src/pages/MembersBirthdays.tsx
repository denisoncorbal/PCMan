import React from 'react';

interface MembersBirthdaysProps{
    name: string;
}

const MembersBirthdays = (props: MembersBirthdaysProps) => {
    return (
        <div>
            {props.name}
        </div>
    );
};

export default MembersBirthdays;