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
import pixQrCode from "@/assets/pix-qrcode.png";

const PIX_KEY = "00020126360014BR.GOV.BCB.PIX0114+55149760066205204000053039865802BR5901N6001C62170513PGTOFONTEVIDA63043FBE";

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
          <div className="flex justify-center">
            <img src={pixQrCode} alt="QR Code Pix" className="h-52 w-52 object-contain" style={{ imageRendering: "pixelated" }} />
          </div>

          <p className="text-center text-sm font-medium text-foreground">
            Pix Copia-e-cola:
          </p>

          <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 p-3">
            <code className="flex-1 text-[10px] leading-tight text-foreground break-all">
              {PIX_KEY}
            </code>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className="shrink-0"
            >
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>

          {copied && (
            <p className="text-center text-xs font-medium text-primary">
              Chave copiada! ✓
            </p>
          )}

          <p className="text-center text-xs text-muted-foreground/70">
            Qualquer valor é bem-vindo. Obrigado por apoiar! 🙏
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateDialog;
