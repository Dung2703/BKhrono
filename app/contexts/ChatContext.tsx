'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Dispatch, SetStateAction } from 'react';

export type Message = {
  text: string;
  sender: 'user' | 'bot';
};

type ChatContextType = {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
};


const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi there! How can I help you today?', sender: 'bot' },
  ]);

  return (
    <ChatContext.Provider value={{ messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
