import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { traditions } from "@/data/traditions";
import TraditionCard from "@/components/TraditionCard";
import DailyWord from "@/components/DailyWord";
import FeatureGrid from "@/components/FeatureGrid";
import logoFountain from "@/assets/logo-fountain.png";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();

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
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <motion.img
            src={logoFountain}
            alt="Fonte de Vida"
            className="mb-6 h-24 w-24 animate-float"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <h1 className="mb-3 font-display text-5xl font-bold tracking-tight text-gold-gradient md:text-6xl">
            Fonte de Vida
          </h1>
          <p className="max-w-md text-base text-muted-foreground">
            Conhecimento espiritual confiável, com respeito a todas as tradições.
          </p>
        </motion.header>

        {/* Tradições */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-center font-display text-2xl font-semibold text-foreground"
          >
            Escolha sua tradição
          </motion.h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
            {traditions.map((t, i) => (
              <TraditionCard
                key={t.id}
                tradition={t}
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
            O que você pode fazer
          </h2>
          <FeatureGrid />
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-center">
          <div className="mb-3">
            <Link
              to="/instalar"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
            >
              📱 Instalar no celular
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Fonte de Vida · Conhecimento espiritual com respeito e confiança
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            Em crise? Ligue 188 (CVV) · 190 · 192
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
