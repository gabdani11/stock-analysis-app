import axios from 'axios';


export async function getAnswer(question){
    try{
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,{
            
                "system_instruction":{
                    "parts":[{
                        "text":"You are a stock market assistant. Always reply in short, simple answers. Maximum 2-3 sentences"
                    }]
                },
                "contents":[
                    {
                        "parts":[{
                            "text":`${question}`
                        }]
                    }
                ]
            
        })
        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error fetching AI answer:', error);
        throw error;
    }

}