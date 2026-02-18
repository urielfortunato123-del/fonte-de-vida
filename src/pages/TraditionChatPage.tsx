import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Send, Loader2, MessageCircle, Trash2 } from "lucide-react";
import { traditions } from "@/data/traditions";
import { toast } from "@/hooks/use-toast";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/tradition-chat`;

type Msg = { role: "user" | "assistant"; content: string };

const suggestedQuestions: Record<string, string[]> = {
  catolico: ["O que é a Eucaristia?", "Como rezar o Terço?", "O que diz a Igreja sobre o perdão?"],
  evangelico: ["O que é ser salvo pela fé?", "Como estudar a Bíblia?", "O que é o batismo no Espírito Santo?"],
  islamico: ["Quais são os cinco pilares do Islã?", "O que o Alcorão diz sobre misericórdia?", "Como fazer a oração (Salat)?"],
  judaismo: ["O que é o Shabbat?", "Como funciona o Teshuvá?", "O que a Torá ensina sobre justiça?"],
  espirita: ["O que é reencarnação?", "Como funciona a mediunidade?", "O que Kardec ensina sobre caridade?"],
  umbanda: ["Quem são os Orixás?", "O que é um terreiro?", "Como funciona a incorporação?"],
  budismo: ["O que são as Quatro Nobres Verdades?", "Como meditar?", "O que é o Nirvana?"],
  hinduismo: ["O que é Karma?", "O que ensina o Bhagavad Gita?", "Qual a diferença entre Atman e Brahman?"],
  explorar: ["Deus existe?", "Qual o sentido da vida?", "As religiões podem coexistir em paz?"],
};

const TraditionChatPage = () => {
  const { traditionId } = useParams<{ traditionId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const tradition = traditions.find((trad) => trad.id === traditionId);
  const suggestions = suggestedQuestions[traditionId || ""] || suggestedQuestions.explorar;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!tradition) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">{t("tradition_page.not_found")}</p>
      </div>
    );
  }

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Msg = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
          traditionId,
        }),
      });

      if (!resp.ok || !resp.body) {
        const errorData = await resp.json().catch(() => ({}));
        toast({ title: errorData.error || t("chat.error_ai"), variant: "destructive" });
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;

      const upsertAssistant = (chunk: string) => {
        assistantSoFar += chunk;
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant") {
            return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
          }
          return [...prev, { role: "assistant", content: assistantSoFar }];
        });
      };

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") { streamDone = true; break; }
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (raw.startsWith(":") || raw.trim() === "") continue;
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch { /* ignore */ }
        }
      }
    } catch (err) {
      console.error(err);
      toast({ title: t("chat.error_connection"), variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate(`/tradition/${traditionId}`)}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="text-2xl">{tradition.icon}</span>
          <div className="min-w-0">
            <h1 className="font-display text-base font-semibold text-foreground truncate">
              {t(`traditions.${tradition.id}`)}
            </h1>
            <p className="text-[11px] text-muted-foreground">{t("chat.ai_label")}</p>
          </div>
          {messages.length > 0 && (
            <button
              onClick={() => setMessages([])}
              className="ml-auto text-muted-foreground/50 transition-colors hover:text-destructive"
              title={t("chat.clear")}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-6">
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-6 py-12"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                  {t("chat.ask_ai")}
                </h2>
                <p className="text-sm text-muted-foreground max-w-md">
                  {t("chat.ask_about", { tradition: t(`traditions.${tradition.id}`).toLowerCase() })}
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <p className="text-xs text-muted-foreground/60 uppercase tracking-widest text-center">
                  {t("chat.suggestions")}
                </p>
                {suggestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-left text-sm text-foreground/80 transition-colors hover:border-primary/30 hover:bg-card/60"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "border border-border card-gradient rounded-bl-sm"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm prose-invert max-w-none
                        prose-headings:font-display prose-headings:text-primary prose-headings:font-semibold prose-headings:text-base
                        prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:my-1.5
                        prose-strong:text-foreground
                        prose-blockquote:border-primary/30 prose-blockquote:text-muted-foreground
                        prose-li:text-foreground/85
                        prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded
                      ">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-sm">{msg.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm border border-border card-gradient px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 border-t border-border bg-background/80 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl gap-2 px-4 py-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("chat.placeholder")}
            disabled={isLoading}
            className="flex-1 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity disabled:opacity-30"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </button>
        </form>
        <p className="mx-auto max-w-3xl px-4 pb-2 text-center text-[10px] text-muted-foreground/40">
          {t("chat.disclaimer")}
        </p>
      </div>
    </div>
  );
};

export default TraditionChatPage;
