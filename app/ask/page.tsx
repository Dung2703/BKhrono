'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useChat, Message } from '@/app/contexts/ChatContext';

function AskPage() {
  const { messages, setMessages } = useChat();
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setInput('');

    setMessages((prevMessages: Message[]) => [...prevMessages, userMessage] as Message[]);

    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMessage = { text: data.reply, sender: 'bot' };

    setMessages((prevMessages: Message[]) => [...prevMessages, botMessage] as Message[]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesArea}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.sender === 'user' ? styles.userMessage : styles.botMessage
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className={styles.inputArea}>
        <Link className={styles.goBackButton} href="/">Home</Link>
        <textarea
          rows={1}
          className={styles.textInput}
          placeholder="Ask anything"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.sendButton} onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default AskPage;
