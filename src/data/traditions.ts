export interface Tradition {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const traditions: Tradition[] = [
  { id: "catolico", name: "Católico", icon: "✝️", description: "Tradição cristã apostólica romana", color: "from-blue-900/40 to-blue-800/20" },
  { id: "evangelico", name: "Evangélico", icon: "📖", description: "Tradições protestantes e pentecostais", color: "from-indigo-900/40 to-indigo-800/20" },
  { id: "islamico", name: "Islâmico", icon: "☪️", description: "Fé islâmica e ensinamentos do Alcorão", color: "from-emerald-900/40 to-emerald-800/20" },
  { id: "judaismo", name: "Judaísmo", icon: "✡️", description: "Tradição judaica e a Torá", color: "from-sky-900/40 to-sky-800/20" },
  { id: "espirita", name: "Espírita", icon: "🕊️", description: "Doutrina espírita kardecista", color: "from-violet-900/40 to-violet-800/20" },
  { id: "umbanda", name: "Umbanda", icon: "🌿", description: "Religião afro-brasileira", color: "from-green-900/40 to-green-800/20" },
  { id: "budismo", name: "Budismo", icon: "☸️", description: "Ensinamentos de Buda", color: "from-amber-900/40 to-amber-800/20" },
  { id: "hinduismo", name: "Hinduísmo", icon: "🕉️", description: "Tradições védicas e hindus", color: "from-orange-900/40 to-orange-800/20" },
  { id: "explorar", name: "Explorar", icon: "🔭", description: "Modo agnóstico — sem pressa, sem pressão", color: "from-primary/30 to-primary/10" },
];

export const dailyWords = [
  { tradition: "catolico", text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.", source: "João 3:16" },
  { tradition: "evangelico", text: "O Senhor é o meu pastor, nada me faltará.", source: "Salmo 23:1" },
  { tradition: "islamico", text: "Em nome de Deus, o Clemente, o Misericordioso.", source: "Alcorão 1:1" },
  { tradition: "judaismo", text: "Ouve, ó Israel: o Senhor nosso Deus é o único Senhor.", source: "Deuteronômio 6:4" },
  { tradition: "espirita", text: "Fora da caridade não há salvação.", source: "Allan Kardec" },
  { tradition: "umbanda", text: "A Umbanda é a manifestação do espírito para a caridade.", source: "Tradição oral" },
  { tradition: "budismo", text: "A paz vem de dentro de você mesmo. Não a procure à sua volta.", source: "Buda" },
  { tradition: "hinduismo", text: "Tu és aquilo.", source: "Chandogya Upanishad" },
  { tradition: "explorar", text: "A dúvida é o começo da sabedoria.", source: "Aristóteles" },
];
