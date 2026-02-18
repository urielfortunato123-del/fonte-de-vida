import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import { traditions } from "@/data/traditions";
import { library } from "@/data/library";

const BibliotecaPage = () => {
  const navigate = useNavigate();

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
          <h1 className="font-display text-3xl font-bold text-foreground">
            📚 Biblioteca Espiritual
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Escolha uma tradição para acessar seus textos sagrados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {traditions.map((t, i) => {
            const tLib = library.find((l) => l.traditionId === t.id);
            const workCount = tLib?.works.length ?? 0;

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  to={`/library/${t.id}`}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                    {t.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {t.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {workCount} {workCount === 1 ? "obra" : "obras"} disponíveis
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BibliotecaPage;
