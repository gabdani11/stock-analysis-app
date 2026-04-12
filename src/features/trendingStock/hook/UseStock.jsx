import { getStockContext, getStockNews } from "../services/StockContext";
import { useContext } from "react";
import { StockContext } from "../context/StockContext";

export const UseStock = () => {
  const { stockData, setStockData, loading, setLoading, stockNews, setStockNews } = useContext(StockContext);
  const stockSymbols = ["RELIANCE.NS", "INFY.NS", "HDFCBANK.NS", "ICICIBANK.NS", "TCS.NS","HINDUNILVR.NS", "SBIN.NS", "KOTAKBANK.NS", "BAJFINANCE.NS", "ITC.NS"];

  const fetchStockData = async () => {
    setLoading(true);
    setStockData([]);
    try {
      //  fetch all symbols at the same time in one batch
      const results = await Promise.all(
        stockSymbols.map(async (symbol) => {
          const data = await getStockContext(symbol);
          const realData = data?.chart?.result?.[0]?.meta;
          const currentPrice = realData?.regularMarketPrice ?? 0;
          const previousClose = realData?.chartPreviousClose ?? 0;

          return {
            id: symbol,
            symbol: symbol,
            currency: realData?.currency ?? "USD",
            name: realData?.shortName ?? symbol,
            price: realData?.regularMarketPrice ?? 0,
            change: parseFloat((currentPrice - previousClose).toFixed(2)),
            changePercent: parseFloat(((currentPrice - previousClose) / previousClose * 100).toFixed(2)),
          };
        })
      );
      
      setStockData(results);
    } catch (err) {
      console.error("Failed to fetch stock data:", err);
      setStockData([]);
    } finally {
      setLoading(false);
    }
  };
  //stock news fetching function
  const fetchStockNews = async () => {
      setLoading(true);
    try{
      
      const response = await getStockNews();
      setStockNews(response);
      
    }catch(error){
      console.error('Error fetching stock news:', error);
      setStockNews([]);


    }finally{
      setLoading(false);
    }

  }

  return { stockData, loading, fetchStockData, fetchStockNews, stockNews };
};