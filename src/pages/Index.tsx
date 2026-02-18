import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { traditions } from "@/data/traditions";
import TraditionCard from "@/components/TraditionCard";
import DailyWord from "@/components/DailyWord";
import FeatureGrid from "@/components/FeatureGrid";
import DonateDialog from "@/components/DonateDialog";
import LanguageSelector from "@/components/LanguageSelector";
import { Search } from "lucide-react";
import logoFountain from "@/assets/logo-fountain.png";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleTraditionClick = (id: string) => {
    navigate(`/tradition/${id}`);
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero background */}
      <div className="absolute inset-0 h-[500px] overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-12 md:px-6">
        {/* Language selector */}
        <div className="absolute right-4 top-4 md:right-6">
          <LanguageSelector />
        </div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <motion.img
            src={logoFountain}
            alt={t("app.name")}
            className="mb-6 h-24 w-24 animate-float"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <h1 className="mb-3 font-display text-5xl font-bold tracking-tight text-gold-gradient md:text-6xl">
            {t("app.name")}
          </h1>
          <p className="max-w-md text-base text-muted-foreground">
            {t("app.tagline")}
          </p>
          <Link
            to="/buscar"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            <Search className="h-4 w-4" />
            {t("nav.search_verses")}
          </Link>
        </motion.header>

        {/* Tradições */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-center font-display text-2xl font-semibold text-foreground"
          >
            {t("home.choose_tradition")}
          </motion.h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
            {traditions.map((trad, i) => (
              <TraditionCard
                key={trad.id}
                tradition={trad}
                onClick={handleTraditionClick}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* Palavra do Dia */}
        <div className="mb-16">
          <DailyWord />
        </div>

        {/* Features */}
        <section className="mb-16">
          <h2 className="mb-6 text-center font-display text-2xl font-semibold text-foreground">
            {t("home.what_you_can_do")}
          </h2>
          <FeatureGrid />
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-center">
          <div className="mb-3 flex flex-wrap items-center justify-center gap-3">
            <DonateDialog />
            <Link
              to="/instalar"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
            >
              📱 {t("home.install_phone")}
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            {t("app.footer")}
          </p>
           <p className="mt-1 text-xs text-muted-foreground/60">
             {t("app.crisis_footer")}
           </p>
           <p className="mt-3 text-[11px] text-muted-foreground/40">
             {t("app.developer")}
           </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
