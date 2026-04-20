import axios from 'axios';

export async function getStockContext(symbol) {
  try {
    // ❌ before: 'https://localhost:5173/api/finance/v8/finance/chart/${symbol}...'
    // ✅ after: just the path, no domain
    const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching stock context:', error);
    return null
 
    
  }
}
export async function getStockNews(){
  try{
  const response = await axios.get(`https://finnhub.io/api/v1/news?category=general&token=${import.meta.env.VITE_NEWS_API_KEY}`);
  return response.data;

  }catch(error){
    console.error('Error fetching stock news:', error);
    return null
  }
  
}