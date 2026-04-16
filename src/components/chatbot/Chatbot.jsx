import React from 'react'
import './chatbot.scss'
import { useState, useRef, useEffect } from 'react'
import { Usechat } from './hook/Usechat'

const Chatbot = () => {
  const [active, setActive] = useState(false)
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([]) 
  const bottomRef = useRef(null) 
  const { fetchAnswer, loading} = Usechat()
 const handleSubmit = async () =>{
    if(question.trim() === '') return;
    setMessages(prev => [...prev, {role:'user', text: question}]); //user message added to chat
    setQuestion('');
    try{
      const response = await fetchAnswer(question);
      setMessages(prev => [...prev, {role:'AI', text: response}]);//response from ai added to chat
      
    }catch(error){
      console.error('Error fetching AI answer:', error);
    }
    
 }
 useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: 'smooth' });//use for scrolling to the latest message
}, [messages]);  // runs every time messages updates


  return (
    <div className="chatBot">
      <div className="aiBtn" onClick={() => setActive(!active)} style={{display:active?'none':'flex'}}>
        <img src="/aiIcon.png" alt="AI Chat" />
      </div>
      <div className="chatWindow" style={{display: active ? 'flex' : 'none'}}>
        <svg onClick={()=> setActive(!active)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-Width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        
        <div className="top">
          <img src="aiLogo.webp" alt="ailogo" />
          <p>Your AI assistant for stock analysis and market insights.</p>
          <div className="chat">

        {messages.map((msg, index) => (
             <div key={index} className={`message-wrapper ${msg.role}`}>

               {/* Show AI icon on LEFT */}
               {msg.role === 'AI' && (
                 <img src="/aiLogo.webp" alt="AI" className="aiIcon" />
               )}

            {/* Message bubble */}
            <div className={`message ${msg.role}`}>
              <p>{msg.text}</p>
            </div>
      
          </div>
        ))}
        {loading && (
           <div className="message-wrapper AI">
             <div className="message AI">
               <p>Typing...</p>
             </div>
           </div>
         )}
        <div ref={bottomRef} />
      </div>
        </div>
          
        
        <div className="bottom">
          <div className="chatInput">
            <input type="text" 
            placeholder='Ask question...' 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} /> {/* Allow submit on Enter key */}
            <button onClick={handleSubmit}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L2 8.66667L11.5833 12.4167M22 2L15.3333 22L11.5833 12.4167M22 2L11.5833 12.4167" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Chatbot