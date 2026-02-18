import { useState } from "react";
import { Heart, Copy, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PIX_KEY = "SUA_CHAVE_PIX_AQUI";

const DonateDialog = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/10">
          <Heart className="h-3.5 w-3.5" />
          Ajude o app ficar ativo
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <Heart className="h-5 w-5 text-primary" />
            Contribua com o desenvolvedor
          </DialogTitle>
          <DialogDescription>
            Sua contribuição ajuda a manter o Fonte de Vida ativo e gratuito para todos.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          <p className="text-sm text-muted-foreground">
            Qualquer valor é bem-vindo! Use a chave Pix abaixo para contribuir:
          </p>

          <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 p-3">
            <code className="flex-1 text-sm font-medium text-foreground break-all">
              {PIX_KEY}
            </code>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className="shrink-0"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground/70">
            Obrigado por apoiar este projeto! 🙏
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateDialog;
