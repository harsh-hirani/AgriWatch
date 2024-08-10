'use client'
import React, { useState } from 'react';


const ChatbotUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);

      // Simulate a chatbot response
      const botResponse = `You said: ${input}`;
      setTimeout(() => {
        setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
        setResult(botResponse); // Display result in the div
      }, 500);

      setInput('');
    }
  };

  return (
    <div className=" w-100 text-3xl mx-auto bg-white shadow-lg rounded-lg p-4">
      <div className="h-[80vh] overflow-y-scroll border-b border-gray-200 mb-4 p-2">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >/
          Send
        </button>
      </div>
    
    </div>
  );
};

export default ChatbotUI;
