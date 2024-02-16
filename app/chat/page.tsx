"use client";

import { useChat } from "ai/react";


const Chat = () => {
    const {
        messages,
        input,
        handleInputChange,
        handleSubmit
    } = useChat()
  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>
            <p>{m.role}</p>
            <p>{m.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input 
        placeholder="Type a message..."
        value={input}
        onChange={handleInputChange}
        />
        <button>
            Send
        </button>
      </form>
    </div>
  )
}

export default Chat
