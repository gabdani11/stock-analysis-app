import React from 'react'
import Approutes from './AppRoutes'
import { StockProvider } from './features/trendingStock/context/StockContext.jsx'
import { AIProvider } from './components/chatbot/context/AIcontext.jsx'
const App = () => {
  

  return (
    <>
    <StockProvider>
      <AIProvider>
      <Approutes/>
      </AIProvider>
    </StockProvider>
    
    </>
  )
}

export default App