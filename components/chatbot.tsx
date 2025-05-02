"use client";

import { useChat } from "@ai-sdk/react";
import { Bot, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";

export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <div // className="h-[600px] relative"
    >
      <ExpandableChat
        size="lg"
        position="bottom-right"
        icon={<Bot className="h-6 w-6" />}
      >
        <ExpandableChatHeader className="flex-col text-center justify-center">
          <h6 className="text-xl font-semibold">Fale com a FURIA 🐾</h6>
          <p className="text-sm text-muted-foreground">
            Tá em dúvida? A FURIA responde no spray.
          </p>
        </ExpandableChatHeader>

        <ExpandableChatBody>
          <ChatMessageList>
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                variant={message.role === "user" ? "sent" : "received"}
              >
                <ChatBubbleAvatar
                  className="h-8 w-8 shrink-0"
                  src={message.role === "user" ? "" : "logo1.png"}
                  fallback={message.role === "user" ? "US" : "AI"}
                />
                <ChatBubbleMessage
                  variant={message.role === "user" ? "sent" : "received"}
                >
                  {message.parts.map((part, i) => (
                    <span key={`${message.id}-${i}`}>
                      {part.type === "text" && part.text}
                    </span>
                  ))}
                </ChatBubbleMessage>
              </ChatBubble>
            ))}

            {isLoading && (
              <ChatBubble variant="received">
                <ChatBubbleAvatar
                  className="h-8 w-8 shrink-0"
                  src="logo1.png"
                  fallback="AI"
                />
                <ChatBubbleMessage isLoading />
              </ChatBubble>
            )}
          </ChatMessageList>
        </ExpandableChatBody>

        <ExpandableChatFooter>
          <form
            onSubmit={handleSubmit}
            className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
          >
            <ChatInput
              value={input}
              onChange={handleInputChange}
              placeholder="Pergunte algo..."
              className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center p-3 pt-0 justify-between">
              {/* <div className="flex">
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => console.log("attach")}
                >
                  <Paperclip className="size-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => console.log("recording")}
                >
                  <Mic className="size-4" />
                </Button>
              </div> */}
              <Button type="submit" size="sm" className="ml-auto">
                <SendHorizontal className="size-3.5" />
              </Button>
            </div>
          </form>
        </ExpandableChatFooter>
      </ExpandableChat>
    </div>
  );
}
