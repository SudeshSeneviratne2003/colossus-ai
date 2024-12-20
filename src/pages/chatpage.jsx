import React, { useState } from "react";
import "./chatpage.css";

const ChatPageWithoutPanel = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Add message sending logic here
  };

  return (
    <div className="chat-container">
      {/* Sidebar Icons */}
      <div className="sidebar-icons">
        <button className="icon-button" title="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <button className="icon-button" title="New Chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
        <button className="icon-button" title="Download">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14"/>
          </svg>
        </button>
        <button className="icon-button" title="Clear">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
          </svg>
        </button>
        <button className="icon-button" title="Search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
        <button className="icon-button" title="History">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </button>
        <button className="icon-button" title="Delete">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
        <button className="icon-button" title="Help">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01"/>
          </svg>
        </button>
      </div>

      {/* Rest of the existing content */}
      <div className="main-content">
        {/* Theme and menu buttons */}
        <div className="header-buttons">
          <button className="menu-button">⋮</button>
        </div>

        {/* Main chat area with watermark */}
        <div className="chat-area">
          <div className="watermark">
            <h1>Start Your journey Here!</h1>
          </div>

          {/* Suggestion chips */}
          <div className="suggestion-section">
            <p className="suggestion-title">Suggestions from previous Graphs</p>
            <div className="suggestion-chips">
              <button className="chip">Data structures & algorithms</button>
              <button className="chip">Java</button>
              <button className="chip">Working with data</button>
            </div>
          </div>
        </div>

        {/* Message input area */}
        <form onSubmit={handleSendMessage} className="message-input-container">
          <div className="message-input-wrapper">
            <button type="button" className="attach-button">📎</button>
            <input
              type="text"
              placeholder="Ask anything about your content"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="message-input"
            />
            <button type="button" className="mic-button">🎤</button>
            <button type="submit" className="send-button">➤</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatPageWithoutPanel; 