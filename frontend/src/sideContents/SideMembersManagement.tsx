import React, {BaseSyntheticEvent} from 'react';
import { SideMembersManagementContainer, StyledForm, StyledInputContainer, StyledButton } from './sideMembersManagementStyles';
import { FaTrash, FaSearch } from 'react-icons/fa';

interface SideMembersManagementProps {
    name: string;
}

const SideMembersManagement = (props: SideMembersManagementProps) => {

    const handleClickSearch = (e: BaseSyntheticEvent) => {
        e.preventDefault();
    }

    const handleClickClean = (e: BaseSyntheticEvent) => {
        e.preventDefault();
    }

    return (
        <SideMembersManagementContainer>
            <StyledForm>
                <StyledInputContainer>
                    <h1>Search</h1>
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
                    <StyledButton type='submit' onClick={handleClickSearch}><FaSearch /></StyledButton>
                    <StyledButton onClick={handleClickClean}><FaTrash /></StyledButton>
                </StyledInputContainer>
            </StyledForm>
        </SideMembersManagementContainer>
    );
};

export default SideMembersManagement;