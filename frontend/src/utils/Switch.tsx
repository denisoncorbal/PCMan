import React, { Children } from 'react';

interface SwitchProps {
    test: string,
    children: JSX.Element[]
}

const Switch = (props: SwitchProps) => {
    return(
        <>
            {
                props.children.find(child=>{
                    return child.props.name === props.test
                })
            }
        </>
    )
};

export default Switch;