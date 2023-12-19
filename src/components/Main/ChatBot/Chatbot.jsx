import React from 'react'
import { useState } from 'react'
import OpenAIChat from '../../../config/index'

const ChatApp = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
  
    const handleSendMessage = async () => {
      const response = await OpenAIChat(userInput);
      setChatHistory([...chatHistory, { role: 'user', content: userInput }, { role: 'assistant', content: response }]);
      setUserInput('');
    };
  
    return (
      <div>
        <div>
          {chatHistory.map((message, index) => (
            <div key={index} className={message.role}>{message.content}</div>
          ))}
        </div>
        <div>
          <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    );
  };
  
  export default ChatApp;