import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, GitCompareArrows, Send, Loader2, AlertCircle } from "lucide-react";
import { traditions } from "@/data/traditions";
import { toast } from "@/hooks/use-toast";

const COMPARE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/compare-religions`;

const ComparePage = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [selected, setSelected] = useState<string[]>(["catolico", "evangelico", "islamico"]);
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const toggleTradition = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || selected.length < 2) {
      toast({ title: "Selecione ao menos 2 tradições e faça uma pergunta.", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    setAnswer("");

    try {
      const resp = await fetch(COMPARE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ question: question.trim(), traditions: selected }),
      });

      if (!resp.ok || !resp.body) {
        const errorData = await resp.json().catch(() => ({}));
        toast({ title: errorData.error || "Erro ao consultar a IA.", variant: "destructive" });
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let fullText = "";
      let streamDone = false;

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
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              fullText += content;
              setAnswer(fullText);
              answerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Final flush
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
            if (content) {
              fullText += content;
              setAnswer(fullText);
            }
          } catch { /* ignore */ }
        }
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Erro de conexão. Tente novamente.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const comparableTraditions = traditions.filter((t) => t.id !== "explorar");

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Início
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <GitCompareArrows className="h-6 w-6 text-primary" />
            <h1 className="font-display text-3xl font-bold text-foreground">
              Comparar Religiões
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Faça uma pergunta e veja a resposta sob diferentes visões — sem juízo de valor.
          </p>
        </motion.div>

        {/* Tradition selection */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest">
            Selecione as tradições (mín. 2)
          </p>
          <div className="flex flex-wrap gap-2">
            {comparableTraditions.map((t) => (
              <button
                key={t.id}
                onClick={() => toggleTradition(t.id)}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-all ${
                  selected.includes(t.id)
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card/30 text-muted-foreground hover:border-primary/30"
                }`}
              >
                <span className="text-base">{t.icon}</span>
                {t.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Question form */}
        <motion.form
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Ex: O que acontece após a morte?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={isLoading}
              className="w-full rounded-xl border border-border bg-card/50 py-4 pl-4 pr-14 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !question.trim() || selected.length < 2}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity disabled:opacity-30"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </button>
          </div>
        </motion.form>

        {/* Answer */}
        {answer && (
          <motion.div
            ref={answerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl border border-border card-gradient p-6"
          >
            <div className="prose prose-sm prose-invert max-w-none
              prose-headings:font-display prose-headings:text-primary prose-headings:font-semibold
              prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-3 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
              prose-p:text-foreground/85 prose-p:leading-relaxed
              prose-strong:text-foreground
              prose-blockquote:border-primary/30 prose-blockquote:text-muted-foreground
            ">
              <ReactMarkdown>{answer}</ReactMarkdown>
            </div>
            {isLoading && (
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Loader2 className="h-3 w-3 animate-spin" />
                Gerando comparação...
              </div>
            )}
          </motion.div>
        )}

        {!answer && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-3 py-12 text-center"
          >
            <AlertCircle className="h-8 w-8 text-muted-foreground/30" />
            <p className="text-sm text-muted-foreground/60">
              Selecione as tradições e faça sua pergunta para ver a comparação.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
