import React, { createContext, ReactNode, useContext, useState } from 'react';

interface PageContextType{
    page: string,
    setPage: React.Dispatch<React.SetStateAction<string>>
}

interface PageContextProps{
    children?: ReactNode | ReactNode[]
}

export const pageContext = createContext<PageContextType>({page: '', setPage: ()=>{}});

const PageContext = (props: PageContextProps) => {
    const [page, setPage] = useState<string>('home');
    return (
        <pageContext.Provider value={{page: page, setPage: setPage}}>
            {props.children}
        </pageContext.Provider>
    );
};

export default PageContext;