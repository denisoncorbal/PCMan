import styled from "styled-components";

export const AddMemberModalContainer = styled.div`    
    &.show{
        display: block !important;
        position: absolute;    
        left: 15%;
        top: 5%;
        width: 70%;
        height: 90%;
        background-color: var(--color-primary-0);
        color: var(--text-color-primary-0);
    }

    &.noShow{
        display: none;
    }    
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;    
    justify-content: space-around;
    width: 100%;
    height: 100%;
`

export const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;        
`

export const StyledButton = styled.button`
    background-color: var(--color-secondary-1-1);
    color: var(--text-color-secondary-1-0);    
    padding: 1%;
    width: 10%;
    height: 100%;
`