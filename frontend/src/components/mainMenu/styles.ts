import styled from "styled-components";
import DropdownButton from "../../utils/DropdownButtons";

export const StyledMainMenu = styled.nav`
    background-color: var(--color-secondary-1-4);
    color: var(--text-color-secondary-1-1);
    position: fixed;
    top: 10%;
    left: 0%;
    width: 10%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const DropdownButtonStyled = styled(DropdownButton)`    
    background-color: var(--color-secondary-1-4);
    color: var(--text-color-secondary-1-1);
    width: 100%;    

    &.dropdown1 {
        font-weight: bold;
    }

    &.dropdown2 {
        color: var(--text-color-secondary-1-2);
    }

    &.dropdown3 {
        color: var(--text-color-secondary-1-3);
    }
`