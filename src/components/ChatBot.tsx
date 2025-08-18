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
  showEmailForm?: boolean;
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
    "disconnected" | "connected" | "connecting" | "reconnecting"
  >("disconnected");
  const [emailInputs, setEmailInputs] = useState<{ [key: number]: string }>({});
  const [whatsappInputs, setWhatsappInputs] = useState<{
    [key: number]: string;
  }>({});
  const [hasSubmittedContact, setHasSubmittedContact] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const currentExecutionId = useRef<string | null>(null);
  const sessionId = useRef<string>(Math.random().toString(36).substring(7));
  const reconnectAttempts = useRef<number>(0);
  const heartbeatTimeout = useRef<NodeJS.Timeout | null>(null);
  const reconnectTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Add event listener for external chat opening
    const handleOpenChat = () => {
      setIsOpen(true);
    };

    window.addEventListener("openZedChat", handleOpenChat);

    return () => {
      // Cleanup WebSocket connection on unmount
      if (wsRef.current) {
        wsRef.current.close();
      }
      // Clear timeouts
      if (heartbeatTimeout.current) {
        clearTimeout(heartbeatTimeout.current);
      }
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current);
      }
      // Remove event listener
      window.removeEventListener("openZedChat", handleOpenChat);
    };
  }, []);

  const clearTimeouts = () => {
    if (heartbeatTimeout.current) {
      clearTimeout(heartbeatTimeout.current);
      heartbeatTimeout.current = null;
    }
    if (reconnectTimeout.current) {
      clearTimeout(reconnectTimeout.current);
      reconnectTimeout.current = null;
    }
  };

  const scheduleReconnect = (executionId: string) => {
    const delay = Math.min(
      1000 * Math.pow(2, reconnectAttempts.current),
      30000
    ); // Exponential backoff, max 30s
    console.log(
      `Attempting to reconnect in ${delay}ms (attempt ${
        reconnectAttempts.current + 1
      })`
    );

    reconnectTimeout.current = setTimeout(() => {
      if (reconnectAttempts.current < 5) {
        // Max 5 reconnection attempts
        reconnectAttempts.current++;
        setConnectionStatus("reconnecting");
        initializeWebSocket(executionId);
      } else {
        console.log("Max reconnection attempts reached");
        setConnectionStatus("disconnected");
        const errorMessage: ChatMessage = {
          message: "Connection lost. Please send a new message to reconnect.",
          sender: "bot",
          direction: "incoming",
          position: 0,
          sessionId: sessionId.current,
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    }, delay);
  };

  const initializeWebSocket = (executionId: string) => {
    clearTimeouts();

    // Close existing WebSocket if any
    if (wsRef.current) {
      wsRef.current.close();
    }

    setConnectionStatus("connecting");

    // Create new WebSocket connection
    const wsUrl = `wss://automation.zedexel.com/chat?executionId=${executionId}&sessionId=${sessionId.current}`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;
    currentExecutionId.current = executionId;

    // Set a timeout for connection establishment
    const connectionTimeout = setTimeout(() => {
      if (ws.readyState === WebSocket.CONNECTING) {
        console.log("WebSocket connection timeout");
        ws.close();
      }
    }, 10000); // 10 second timeout

    ws.onopen = () => {
      console.log("WebSocket connection established");
      clearTimeout(connectionTimeout);
      setConnectionStatus("connected");
      reconnectAttempts.current = 0; // Reset reconnection attempts

      // Start heartbeat monitoring
      heartbeatTimeout.current = setTimeout(() => {
        if (ws.readyState === WebSocket.OPEN) {
          console.log("Heartbeat timeout - closing connection");
          ws.close(4000, "Heartbeat timeout");
        }
      }, 35000); // 35 second heartbeat timeout
    };

    ws.onmessage = (event) => {
      // Reset heartbeat timeout on any message
      if (heartbeatTimeout.current) {
        clearTimeout(heartbeatTimeout.current);
        heartbeatTimeout.current = setTimeout(() => {
          if (ws.readyState === WebSocket.OPEN) {
            console.log("Heartbeat timeout - closing connection");
            ws.close(4000, "Heartbeat timeout");
          }
        }, 35000);
      }

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
      const messageText = event.data.toLowerCase();
      const containsContactInfo =
        messageText.includes("email") || messageText.includes("whatsapp");
      const botMessage: ChatMessage = {
        message: event.data,
        sender: "bot",
        direction: "incoming",
        position: 0,
        sessionId: sessionId.current,
        showEmailForm: containsContactInfo && !hasSubmittedContact,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      clearTimeout(connectionTimeout);
      setIsTyping(false);
    };

    ws.onclose = (event) => {
      console.log(
        `WebSocket connection closed. Code: ${event.code}, Reason: ${event.reason}`
      );
      clearTimeout(connectionTimeout);
      clearTimeouts();
      setIsTyping(false);

      // Check if this was an intentional close or an error
      if (event.code === 1000 || event.code === 1001) {
        // Normal closure
        setConnectionStatus("disconnected");
      } else if (currentExecutionId.current && reconnectAttempts.current < 5) {
        // Unexpected closure - attempt reconnection
        console.log("Unexpected closure, attempting reconnection...");
        scheduleReconnect(currentExecutionId.current);
      } else {
        // Failed to reconnect or no execution ID
        setConnectionStatus("disconnected");
        if (reconnectAttempts.current === 0) {
          const disconnectMessage: ChatMessage = {
            message:
              "Disconnected from chat. Please send a new message to reconnect.",
            sender: "bot",
            direction: "incoming",
            position: 0,
            sessionId: sessionId.current,
          };
          setMessages((prev) => [...prev, disconnectMessage]);
        }
      }
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

    // Reset reconnection attempts when user sends a new message
    reconnectAttempts.current = 0;

    try {
      // Send initial message to webhook
      // const ORIGINAL_WEBHOOK_URL = "https://automation.zedexel.com/webhook/30f301a4-8507-47f1-8061-c8e758a2b6a7/chat"
      const DEMO_WEBHOOK_URL =
        "https://automation.zedexel.com/webhook/6631f7e4-9c85-4f45-a1c3-bca9cd8cd023/chat";
      const response = await fetch(DEMO_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatInput: message,
          sessionId: sessionId.current,
          action: "sendMessage",
        }),
      });

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

  const handleFormSubmit = (messageIndex: number) => {
    const emailValue = emailInputs[messageIndex]?.trim();
    const whatsappValue = whatsappInputs[messageIndex]?.trim();

    // Require at least one field to be filled
    if (!emailValue && !whatsappValue) return;

    // Build message with provided values
    let message = "";
    if (emailValue && whatsappValue) {
      message = `Email: ${emailValue}, WhatsApp: ${whatsappValue}`;
    } else if (emailValue) {
      message = `Email: ${emailValue}`;
    } else if (whatsappValue) {
      message = `WhatsApp: ${whatsappValue}`;
    }

    // Send the message through WebSocket
    sendMessage(message);

    // Mark that contact information has been submitted
    setHasSubmittedContact(true);

    // Clear both inputs for this message
    setEmailInputs((prev) => {
      const updated = { ...prev };
      delete updated[messageIndex];
      return updated;
    });
    setWhatsappInputs((prev) => {
      const updated = { ...prev };
      delete updated[messageIndex];
      return updated;
    });

    // Hide the form for this message
    setMessages((prev) =>
      prev.map((msg, index) =>
        index === messageIndex ? { ...msg, showEmailForm: false } : msg
      )
    );
  };

  const handleEmailChange = (messageIndex: number, value: string) => {
    setEmailInputs((prev) => ({
      ...prev,
      [messageIndex]: value,
    }));
  };

  const handleWhatsappChange = (messageIndex: number, value: string) => {
    setWhatsappInputs((prev) => ({
      ...prev,
      [messageIndex]: value,
    }));
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
                              : connectionStatus === "connecting" ||
                                connectionStatus === "reconnecting"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            connectionStatus === "connected"
                              ? "text-green-500"
                              : connectionStatus === "connecting" ||
                                connectionStatus === "reconnecting"
                              ? "text-yellow-500"
                              : "text-red-500"
                          }`}
                        >
                          {connectionStatus === "connected"
                            ? "Online"
                            : connectionStatus === "connecting"
                            ? "Connecting..."
                            : connectionStatus === "reconnecting"
                            ? "Reconnecting..."
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
                      message: "Send a message to start the conversation",
                      sender: "bot",
                      direction: "incoming",
                      position: 0,
                    }}
                  />
                )}
                {messages.map((msg, index) => (
                  <div key={index}>
                    <Message
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
                          '<a href="$1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-2 py-1 mx-1 rounded bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700 transition-colors duration-200">$1 <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>'
                        )}
                      />
                    </Message>
                    {msg.showEmailForm && !hasSubmittedContact && (
                      <div className="ml-4 mr-4 mb-3 p-3 bg-gray-50 rounded-lg border">
                        <div className="text-sm text-gray-600 mb-3">
                          Please provide your contact information (at least one
                          field is required):
                        </div>
                        <div className="space-y-3">
                          <div className="flex gap-2 items-center">
                            <input
                              type="email"
                              placeholder="Email"
                              value={emailInputs[index] || ""}
                              onChange={(e) =>
                                handleEmailChange(index, e.target.value)
                              }
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  handleFormSubmit(index);
                                }
                              }}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                          </div>
                          <div className="flex gap-2 items-center">
                            <input
                              type="tel"
                              placeholder="WhatsApp"
                              value={whatsappInputs[index] || ""}
                              onChange={(e) =>
                                handleWhatsappChange(index, e.target.value)
                              }
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  handleFormSubmit(index);
                                }
                              }}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                          </div>
                          <div className="flex justify-end">
                            <button
                              onClick={() => handleFormSubmit(index)}
                              disabled={
                                !emailInputs[index]?.trim() &&
                                !whatsappInputs[index]?.trim()
                              }
                              className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                              title="Send contact information"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
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
