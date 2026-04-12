import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const StockContext = createContext()

export const StockProvider = ({children}) =>{
    
    const [loading, setLoading] = useState(false)
    const [stockData, setStockData] = useState([])
    const [stockNews, setStockNews] = useState([])

    return(
        <StockContext.Provider value={{loading, setLoading, stockData, setStockData, stockNews, setStockNews}}>
            {children}
        </StockContext.Provider>
    )
}
