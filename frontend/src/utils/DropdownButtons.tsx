import React, { ReactNode, useContext, useState } from 'react';
import { pageContext } from '../context/PageContext';

interface ButtonProps {
    page?: string,
    children?: ReactNode,
    name: string,
    className: string,
    icon?: JSX.Element;
}

const DropdownButton = (props: ButtonProps) => {

    const context = useContext(pageContext);

    const [showChildreen, setShowChildreen] = useState(false);

    const handleClick = () => {
        if (props.page) {
            context.setPage(props.page);
        }
        else {
            setShowChildreen(!showChildreen);
        }
    }

    return (
        <>
            <button className={props.className} onClick={handleClick}>
                {props.icon} {props.name}
            </button>
            {showChildreen && props.children ? props.children : <></>}
        </>


    );
};

export default DropdownButton;