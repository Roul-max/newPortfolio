import { useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "./ui/Button";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

const SYSTEM_PROMPT: ChatMessage = {
  role: "system",
  content:
    "You are a concise product strategy assistant. Provide a short plan, stack suggestion, and timeline.",
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "system",
      content:
        "Share your product, target users, and timeline. I will reply with a clear plan and next steps.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async () => {
    const trimmed = message.trim();
    if (!trimmed || isLoading) return;

    setIsLoading(true);
    setError("");

    const nextUserMessage: ChatMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, nextUserMessage]);
    setMessage("");

    try {
      const history = [SYSTEM_PROMPT, ...messages.filter((msg) => msg.role !== "system"), nextUserMessage];

      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: history }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Request failed.");
      }

      const reply = data?.reply || "No response returned.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      requestAnimationFrame(() => textareaRef.current?.focus());
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const lastAssistantReply = [...messages].reverse().find((msg) => msg.role === "assistant");

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-[92vw] max-w-[380px] rounded-3xl border border-border/60 bg-background/92 shadow-[0_35px_70px_-40px_rgba(14,75,79,0.85)] backdrop-blur-xl overflow-hidden">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

            <div className="relative px-4 pt-4 pb-3 border-b border-border/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_18px_40px_-25px_rgba(14,75,79,0.9)]">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Rohit AI Studio</p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Product assistant
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-border/60 p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative px-4 py-4 text-sm space-y-3 max-h-[50vh] overflow-y-auto overscroll-contain">
              {messages.map((msg, index) => (
                <div
                  key={`${msg.role}-${index}`}
                  className={
                    msg.role === "assistant"
                      ? "rounded-2xl bg-background/90 border border-border/60 px-4 py-3 text-foreground whitespace-pre-line"
                      : msg.role === "user"
                        ? "rounded-2xl bg-primary/10 px-4 py-3 text-primary whitespace-pre-line"
                        : "rounded-2xl bg-muted/70 px-4 py-3 text-muted-foreground"
                  }
                >
                  {msg.content}
                </div>
              ))}

              {lastAssistantReply && (
                <div className="rounded-2xl border border-dashed border-border/60 bg-background/70 px-4 py-3 text-xs text-muted-foreground">
                  Type another message to continue the chat.
                </div>
              )}

              {error && (
                <div className="rounded-2xl border border-red-200/60 bg-red-50 px-4 py-3 text-xs text-red-700">
                  {error}
                </div>
              )}
            </div>

            <div className="relative border-t border-border/60 px-4 py-3 space-y-3">
              <div className="rounded-2xl border border-border/60 bg-background/90 px-3 py-2">
                <label htmlFor="ai-message" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="ai-message"
                  ref={textareaRef}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="mt-2 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none min-h-[80px] resize-none"
                  placeholder="Describe your product idea..."
                />
              </div>

              <Button size="sm" className="w-full" onClick={handleSubmit} disabled={isLoading || !message.trim()}>
                <Send className="mr-2 h-4 w-4" />
                {isLoading ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-[11px] text-muted-foreground">
                Response includes scope, stack, and launch timeline.
              </p>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 rounded-full border border-border/60 bg-background/92 p-3 text-sm font-semibold shadow-[0_20px_60px_-40px_rgba(14,75,79,0.7)] backdrop-blur-xl transition-all hover:-translate-y-0.5"
          aria-expanded={isOpen}
          aria-label="Open AI assistant"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_30px_-18px_rgba(14,75,79,0.7)]">
            <Bot className="h-5 w-5" />
          </span>
        </button>
      )}
    </div>
  );
}
