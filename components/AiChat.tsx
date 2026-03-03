import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

const AiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Welcome to KVI. I'm your virtual guide. Ask me about our Cloud Suite, Smart Systems, or our expansion into Zambia." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: ChatRole.USER, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: "I encountered a system error. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-kvi-500 hover:bg-kvi-400 text-white p-4 rounded-full shadow-lg shadow-kvi-500/40 transition-all duration-300 animate-bounce"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-kvi-900 border border-kvi-800 w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-kvi-950 p-4 border-b border-kvi-800 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-kvi-500/20 flex items-center justify-center">
                <Bot size={18} className="text-kvi-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">KVI Assistant</h3>
                <span className="text-xs text-kvi-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-kvi-950/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === ChatRole.USER
                      ? 'bg-kvi-500 text-white rounded-br-none'
                      : 'bg-kvi-800 text-slate-200 rounded-bl-none border border-kvi-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-kvi-800 p-3 rounded-2xl rounded-bl-none border border-kvi-700">
                  <Loader2 size={16} className="animate-spin text-kvi-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-kvi-950 border-t border-kvi-800">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-grow bg-kvi-900 border border-kvi-800 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-kvi-500 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="p-2 bg-kvi-500 rounded-full text-white hover:bg-kvi-400 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiChat;