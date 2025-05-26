import { useState } from 'react';
import axios from 'axios';

function ChatBot({ systemPrompt }) {
    const [messages, setMessages] = useState([
        { role: 'system', content: systemPrompt },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: newMessages,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                    },
                }
            );

            const botMessage = response.data.choices[0].message;
            setMessages([...newMessages, botMessage]);
        } catch (err) {
            console.error('Error fetching message:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="relative my-12 flex flex-col items-center">
            <h1 className="poppins-bold text-2xl">Chat with the Bot</h1>
            <hr className="mb-4 mt-2 w-1/3 border-black" />

            <div className="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-pastelgreen opacity-50 blur-lg"></div>
            <div className="absolute bottom-20 right-20 h-40 w-40 animate-pulse rounded-full bg-pastelblue opacity-50 blur-lg"></div>

            <div className="relative z-10 w-full max-w-2xl rounded-xl bg-white p-6 shadow-md">
                <div className="max-h-96 overflow-y-auto space-y-4">
                    {messages.slice(1).map((msg, i) => (
                        <div
                            key={i}
                            className={`p-3 rounded-lg ${
                                msg.role === 'user'
                                    ? 'bg-pastelblue text-right ml-auto max-w-[80%]'
                                    : 'bg-pastelgreen text-left mr-auto max-w-[80%]'
                            }`}
                        >
                            {msg.content}
                        </div>
                    ))}
                    {loading && (
                        <div className="text-gray-500 italic text-sm">
                            Bot is typing...
                        </div>
                    )}
                </div>

                <div className="mt-4 flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="flex-1 rounded-l-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-pastelblue"
                        placeholder="Type your message..."
                    />
                    <button
                        onClick={sendMessage}
                        className="rounded-r-lg bg-pastelblue px-4 py-2 text-white hover:bg-blue-500 transition"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatBot;
