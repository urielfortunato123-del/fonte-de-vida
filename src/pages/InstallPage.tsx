import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Smartphone, Check } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallPage = () => {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setIsInstalled(true);
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Smartphone className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h1 className="mb-3 font-display text-3xl font-bold text-foreground">
            Instalar Fonte de Vida
          </h1>
          <p className="mb-8 text-muted-foreground">
            Tenha acesso rápido ao app direto da tela inicial do seu celular — funciona offline!
          </p>

          {isInstalled ? (
            <div className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 p-4 text-primary">
              <Check className="h-5 w-5" />
              <span className="font-medium">App já instalado!</span>
            </div>
          ) : deferredPrompt ? (
            <button
              onClick={handleInstall}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-display text-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Download className="h-5 w-5" />
              Instalar agora
            </button>
          ) : (
            <div className="space-y-6 text-left">
              <div className="rounded-xl border border-border card-gradient p-5">
                <h3 className="font-display text-base font-semibold text-foreground mb-3">
                  📱 No iPhone (Safari)
                </h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Toque no botão <strong className="text-foreground">Compartilhar</strong> (ícone de quadrado com seta)</li>
                  <li>2. Role para baixo e toque em <strong className="text-foreground">Adicionar à Tela de Início</strong></li>
                  <li>3. Toque em <strong className="text-foreground">Adicionar</strong></li>
                </ol>
              </div>
              <div className="rounded-xl border border-border card-gradient p-5">
                <h3 className="font-display text-base font-semibold text-foreground mb-3">
                  🤖 No Android (Chrome)
                </h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Toque no menu <strong className="text-foreground">⋮</strong> (três pontos)</li>
                  <li>2. Toque em <strong className="text-foreground">Instalar app</strong> ou <strong className="text-foreground">Adicionar à tela inicial</strong></li>
                  <li>3. Confirme a instalação</li>
                </ol>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default InstallPage;
