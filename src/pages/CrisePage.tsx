import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Phone, Heart } from "lucide-react";

const CrisePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const emergencyContacts = [
    { name: t("crisis.cvv"), number: "188", desc: t("crisis.cvv_desc") },
    { name: t("crisis.samu"), number: "192", desc: t("crisis.samu_desc") },
    { name: t("crisis.police"), number: "190", desc: t("crisis.police_desc") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("nav.back")}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <Heart className="mx-auto mb-4 h-12 w-12 text-primary animate-pulse-gold" />
          <h1 className="mb-3 font-display text-3xl font-bold text-foreground">
            {t("crisis.title")}
          </h1>
          <p className="text-muted-foreground">
            {t("crisis.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-6"
        >
          <blockquote className="font-display text-lg italic text-foreground">
            "{t("crisis.quote")}"
          </blockquote>
        </motion.div>

        <div className="space-y-3">
          {emergencyContacts.map((c, i) => (
            <motion.a
              key={c.number}
              href={`tel:${c.number}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{c.name}</h3>
                <p className="text-sm text-primary font-semibold">{c.number}</p>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          {t("crisis.disclaimer")}
        </motion.p>
      </div>
    </div>
  );
};

export default CrisePage;
