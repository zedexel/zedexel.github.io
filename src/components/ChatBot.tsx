import React, { useState, useEffect, useRef } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Button,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./ChatBot.css";

interface ChatMessage {
  message: string;
  sender: "user" | "bot";
  direction: "incoming" | "outgoing";
  position: "single" | "first" | "normal" | "last" | 0 | 1 | 2 | 3;
  sessionId?: string;
}

interface WebhookResponse {
  executionStarted: boolean;
  executionId: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<
    "disconnected" | "connected"
  >("connected");
  const wsRef = useRef<WebSocket | null>(null);
  const currentExecutionId = useRef<string | null>(null);
  const sessionId = useRef<string>(Math.random().toString(36).substring(7));

  useEffect(() => {
    return () => {
      // Cleanup WebSocket connection on unmount
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const initializeWebSocket = (executionId: string) => {
    // Close existing WebSocket if any
    if (wsRef.current) {
      wsRef.current.close();
    }

    // Create new WebSocket connection
    const wsUrl = `wss://automation.zedexel.com/chat?executionId=${executionId}&sessionId=${sessionId.current}`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;
    currentExecutionId.current = executionId;

    ws.onopen = () => {
      console.log("WebSocket connection established");
      setConnectionStatus("connected");
    };

    ws.onmessage = (event) => {
      // Skip system messages
      if (event.data.startsWith("n8n|")) {
        if (event.data === "n8n|heartbeat") {
          ws.send("n8n|heartbeat-ack");
        }
        return;
      }

      // Handle error messages
      if (event.data === "Something went wrong") {
        const errorMessage: ChatMessage = {
          message: "Sorry, something went wrong. Please try again.",
          sender: "bot",
          direction: "incoming",
          position: 0,
          sessionId: sessionId.current,
        };
        setMessages((prev) => [...prev, errorMessage]);
        setIsTyping(false);
        return;
      }

      // Add bot response to chat
      const botMessage: ChatMessage = {
        message: event.data,
        sender: "bot",
        direction: "incoming",
        position: 0,
        sessionId: sessionId.current,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      setIsTyping(false);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
      setIsTyping(false);
      setConnectionStatus("disconnected");
      const disconnectMessage: ChatMessage = {
        message:
          "Disconnected from chat. Please send a new message to reconnect.",
        sender: "bot",
        direction: "incoming",
        position: 0,
        sessionId: sessionId.current,
      };
      setMessages((prev) => [...prev, disconnectMessage]);
    };
  };

  const sendMessage = async (message: string) => {
    // Add user message to chat
    const userMessage: ChatMessage = {
      message,
      sender: "user",
      direction: "outgoing",
      position: 0,
      sessionId: sessionId.current,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // If we already have a WebSocket connection, send the message through it
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          chatInput: message,
          sessionId: sessionId.current,
          action: "sendMessage",
        })
      );
      return;
    }

    try {
      // Send initial message to webhook
      const response = await fetch(
        "https://automation.zedexel.com/webhook/30f301a4-8507-47f1-8061-c8e758a2b6a7/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatInput: message,
            sessionId: sessionId.current,
            action: "sendMessage",
          }),
        }
      );

      const data: WebhookResponse = await response.json();

      if (data.executionStarted && data.executionId) {
        // Initialize WebSocket connection with the new executionId
        initializeWebSocket(data.executionId);
      } else {
        setIsTyping(false);
        // Handle error case
        const errorMessage: ChatMessage = {
          message:
            "Sorry, I couldn't establish a connection. Please try again.",
          sender: "bot",
          direction: "incoming",
          position: 0,
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsTyping(false);
      // Add error message to chat
      const errorMessage: ChatMessage = {
        message: "Sorry, there was an error processing your message.",
        sender: "bot",
        direction: "incoming",
        position: 0,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label="Open chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      ) : (
        <div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          style={{ width: "350px", height: "500px" }}
        >
          <MainContainer>
            <ChatContainer>
              <ConversationHeader>
                <ConversationHeader.Content>
                  <div className="flex items-center">
                    <img
                      src="/logo192.png"
                      alt="Zedexel"
                      className="w-8 h-8 mr-2 rounded"
                    />
                    <div className="flex flex-col">
                      <span className="font-heading text-lg">
                        Zedexel Assistant
                      </span>
                      <div className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full mr-1 ${
                            connectionStatus === "connected"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            connectionStatus === "connected"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {connectionStatus === "connected"
                            ? "Online"
                            : "Offline"}
                        </span>
                      </div>
                    </div>
                  </div>
                </ConversationHeader.Content>
                <ConversationHeader.Actions>
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-gray-100 rounded-full p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                </ConversationHeader.Actions>
              </ConversationHeader>
              <MessageList className="p-4">
                {messages.length === 0 && (
                  <Message
                    model={{
                      message: "Hi there! 👋 How can I help you today?",
                      sender: "bot",
                      direction: "incoming",
                      position: 0,
                    }}
                  />
                )}
                {messages.map((msg, index) => (
                  <Message
                    key={index}
                    model={{
                      message: msg.message,
                      sender: msg.sender,
                      direction: msg.direction,
                      position: msg.position,
                    }}
                    className={
                      msg.sender === "bot" ? "bot-message" : "user-message"
                    }
                  >
                    <Message.HtmlContent
                      html={msg.message.replace(
                        /(https?:\/\/[^\s)]+)/g,
                        '<a href="$1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-2 py-1 mx-1 rounded bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700 transition-colors duration-200">$1 <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>'
                      )}
                    />
                  </Message>
                ))}
                {isTyping && (
                  <div className="typing-indicator">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                )}
              </MessageList>
              <MessageInput
                placeholder="Type your message..."
                onSend={sendMessage}
                attachButton={false}
                className="p-4 border-t"
              />
            </ChatContainer>
          </MainContainer>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
