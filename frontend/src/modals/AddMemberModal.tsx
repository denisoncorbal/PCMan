import React, { useState, useEffect, BaseSyntheticEvent } from 'react';
import { AddMemberModalContainer, StyledButton, StyledForm, StyledInputContainer } from './addMemberModalStyles';
import Loading from '../utils/Loading';
import { FaPlus, FaWindowClose } from 'react-icons/fa';


interface AddUserModalProps {
    id: string,
    className: string;
}

const AddUserModal = (props: AddUserModalProps) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [])

    const handleClickClose = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        let modal = document.getElementById('addMemberModal');
        if (modal) modal.className = modal.className.replace('show', 'noShow');
    }

    const handleClickAdd = (e: BaseSyntheticEvent) => {
        e.preventDefault();
    }

    return (
        isLoading ? <Loading /> :
            <>
                <AddMemberModalContainer id={props.id} className={props.className}>
                    <StyledForm>
                        <StyledInputContainer>
                            <h1>Add User</h1>
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <label htmlFor='name'>Name: </label>
                            <input id='name' type='text' />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <label htmlFor='telephone'>Telephone: </label>
                            <input id='telephone' type='text' />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <label htmlFor='email'>E-mail: </label>
                            <input id='email' type='text' />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <StyledButton type='submit' onClick={handleClickAdd}><FaPlus /></StyledButton>
                            <StyledButton onClick={handleClickClose}><FaWindowClose /></StyledButton>
                        </StyledInputContainer>
                    </StyledForm>

                </AddMemberModalContainer>
            </>

    );
};

export default AddUserModal;