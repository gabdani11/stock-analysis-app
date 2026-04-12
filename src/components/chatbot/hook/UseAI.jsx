import { getAnswer } from "../service/ai.api";
import { useContext } from "react";
import { AIContext } from "../context/AIcontext";
export const UseAI = () =>{
    const {answer, setAnswer, loading, setLoading} = useContext(AIContext);
    

    const fetchAnswer = async (question) =>{
        setLoading(true);
        try{
            const response = await getAnswer(question);
            setAnswer(response);
            return response;
        }catch(error){
            console.error('Error fetching AI answer:', error);
            throw error;
        }finally{
            setLoading(false);
        }
    }
    return{ fetchAnswer, loading}
}