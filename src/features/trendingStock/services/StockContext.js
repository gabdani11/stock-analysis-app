import axios from 'axios';

export async function getStockContext(symbol) {
  try {
    // ❌ before: 'https://localhost:5173/api/finance/v8/finance/chart/${symbol}...'
    // ✅ after: just the path, no domain
    const response = await axios.get(`/api/finance?symbol=${symbol}`);
    
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