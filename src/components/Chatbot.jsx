import axios from 'axios';
import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/chat",
         { message: input },
         { withCredentials: false }
        );
      setMessages(prev => [
        ...prev,
        { from: 'bot', text: res.data.message || 'Sorry, no response received.' }
      ]);
    } catch (err) {
      console.log(err)
      setMessages(prev => [
        ...prev,
        { from: 'bot', text: 'Error connecting to chatbot server.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 w-72 bg-white shadow-lg rounded-lg overflow-hidden z-50">
      <div className="bg-[#4169e1] text-white p-3 font-semibold">
        EDU-LINK Chatbot
      </div>
      <div className="h-64 p-2 overflow-y-auto text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-3 py-1 rounded-lg ${msg.from === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-left">
            <div className="inline-block px-3 py-1 rounded-lg bg-gray-200 animate-pulse">
              Bot is typing...
            </div>
          </div>
        )}
      </div>
      <div className="flex border-t p-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          className="flex-1 text-sm p-1 outline-none"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="text-[#4169e1] font-semibold px-2">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
