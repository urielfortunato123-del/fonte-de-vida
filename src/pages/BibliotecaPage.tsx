import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import { traditions } from "@/data/traditions";
import { library } from "@/data/library";

const BibliotecaPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          {t("nav.home")}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl font-bold text-foreground">
            📚 {t("features.library")}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("library_page.sacred_texts")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {traditions.map((trad, i) => {
            const tLib = library.find((l) => l.traditionId === trad.id);
            const workCount = tLib?.works.length ?? 0;

            return (
              <motion.div
                key={trad.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  to={`/library/${trad.id}`}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                    {trad.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {t(`traditions.${trad.id}`)}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {workCount} {workCount === 1 ? t("library_page.work") : t("library_page.works")} {t("library_page.available")}
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
