'use client';

import { useChat, createChatStore } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

const chatStore = createChatStore({
  id: 'default',
  transport: new DefaultChatTransport({
    api: '/api/chat',
  }),
});

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    chatStore,
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="space-y-4">
        {messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap">
            <div>
              <div className="font-bold">{m.role}</div>
              <p>{m.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
