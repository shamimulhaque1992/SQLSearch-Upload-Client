import { createContext, useState } from 'react';

export const CommentProvider = createContext(null);

const DataProvider = ({children}) => {

    const [ searchData, setSearchData ] = useState('');
    
    return (
        <CommentProvider.Provider value={ [searchData, setSearchData ]}>
            {children}
        </CommentProvider.Provider>
    )
}

export default DataProvider;