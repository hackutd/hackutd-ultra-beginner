import React from 'react';
import ChatBot from '../components/ChatBot';

function ActivityPage() {
    return (
        <div>
            <ChatBot systemPrompt="You are a helpful assistant." />
        </div>
    );
}

export default ActivityPage;
