import {useState} from 'react'
import { createContext } from 'react'

export const AIContext = createContext();

export function AIProvider({children}){
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    return(
        <AIContext.Provider value = {{answer, setAnswer, loading, setLoading}}>
            {children}
        </AIContext.Provider>
    )
}