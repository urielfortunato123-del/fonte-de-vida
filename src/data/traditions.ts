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
  { tradition: "catolico", text: "Tudo posso naquele que me fortalece.", source: "Filipenses 4:13" },
  { tradition: "evangelico", text: "Não temas, porque eu sou contigo.", source: "Isaías 41:10" },
  { tradition: "islamico", text: "Deus não muda a condição de um povo até que ele mude o que há em si mesmo.", source: "Alcorão 13:11" },
  { tradition: "judaismo", text: "Faze justiça, ama a bondade e anda humildemente com o teu Deus.", source: "Miqueias 6:8" },
  { tradition: "espirita", text: "Conhece-te a ti mesmo e conhecerás o universo e os deuses.", source: "O Livro dos Espíritos" },
  { tradition: "budismo", text: "O ódio não cessa pelo ódio; o ódio cessa pelo amor.", source: "Dhammapada 1:5" },
  { tradition: "hinduismo", text: "Sempre que a justiça declina, eu me manifesto.", source: "Bhagavad Gita 4:7" },
  { tradition: "umbanda", text: "Quem tem fé não tropeça, quem tem amor não vacila.", source: "Ponto cantado" },
  { tradition: "explorar", text: "Uma vida não examinada não vale a pena ser vivida.", source: "Sócrates" },
  { tradition: "catolico", text: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria.", source: "1 Coríntios 13:4" },
  { tradition: "evangelico", text: "Porque pela graça sois salvos, mediante a fé; e isto não vem de vós, é dom de Deus.", source: "Efésios 2:8" },
  { tradition: "islamico", text: "E entre os Seus sinais está o fato de ter criado para vós, de vós mesmos, esposas, para que encontreis serenidade.", source: "Alcorão 30:21" },
  { tradition: "budismo", text: "Mil velas podem ser acesas a partir de uma única vela, sem que sua vida se encurte.", source: "Buda" },
  { tradition: "judaismo", text: "Ensina a criança no caminho em que deve andar, e ainda quando for velho não se desviará dele.", source: "Provérbios 22:6" },
  { tradition: "espirita", text: "Nascer, morrer, renascer ainda e progredir sempre, tal é a lei.", source: "Allan Kardec" },
  { tradition: "hinduismo", text: "Aquele que vê a si mesmo em todos os seres e todos os seres em si mesmo, não sente mais repulsa.", source: "Isha Upanishad 6" },
  { tradition: "umbanda", text: "Cada um colhe o que planta, pois a justiça divina nunca falha.", source: "Tradição umbandista" },
  { tradition: "explorar", text: "O homem está condenado a ser livre.", source: "Jean-Paul Sartre" },
  { tradition: "catolico", text: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.", source: "Mateus 11:28" },
  { tradition: "evangelico", text: "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.", source: "Salmo 119:105" },
  { tradition: "budismo", text: "Nenhum inimigo pode te ferir tanto quanto teus próprios pensamentos descontrolados.", source: "Buda" },
];

export const dailyMeditations = [
  { text: "Respire fundo. Neste momento, você está vivo. Isso é tudo que importa agora. Deixe a gratidão por este instante preencher seu coração.", source: "Meditação sobre presença" },
  { text: "Observe seus pensamentos como nuvens passando no céu. Você não é as nuvens — você é o céu. Vasto, claro, infinito.", source: "Meditação mindfulness" },
  { text: "Que eu seja feliz. Que eu esteja em paz. Que eu esteja livre de sofrimento. Agora estenda esse desejo a todos os seres.", source: "Meditação Metta (amor-bondade)" },
  { text: "Ao inspirar, acalmo meu corpo. Ao expirar, sorrio. Habitando o momento presente, sei que este é o único momento.", source: "Thich Nhat Hanh" },
  { text: "Sente-se em silêncio. Escute não com os ouvidos, mas com a alma. No silêncio, todas as respostas se revelam.", source: "Meditação contemplativa" },
  { text: "Coloque a mão sobre o coração. Sinta seu pulso. Cada batida é um milagre. Cada respiração, um presente.", source: "Meditação de gratidão" },
  { text: "Imagine uma luz dourada envolvendo todo o seu ser. Ela dissolve tensões, medos e preocupações. Você está seguro.", source: "Meditação de luz interior" },
  { text: "Não julgue este dia antes de vivê-lo. Receba cada momento como se fosse a primeira vez. Olhos de principiante, coração aberto.", source: "Meditação Zen" },
  { text: "Perdoe a si mesmo. Perdoe os outros. O perdão não muda o passado, mas liberta o futuro.", source: "Meditação sobre perdão" },
  { text: "Você é parte do todo. A mesma energia que move as estrelas, move seu coração. Descanse nessa certeza.", source: "Meditação sobre conexão" },
  { text: "Nada é permanente. Nem a dor, nem a alegria. Aceitar a impermanência é encontrar a verdadeira paz.", source: "Meditação budista" },
  { text: "Hoje, pratique a escuta profunda. Ouça sem interromper, sem julgar, sem preparar resposta. Apenas esteja presente.", source: "Meditação relacional" },
  { text: "Cada pessoa que cruza seu caminho carrega uma batalha que você desconhece. Seja gentil. Sempre.", source: "Meditação sobre compaixão" },
  { text: "Solte o controle. A vida sabe o caminho. Confie no processo, mesmo quando não compreender.", source: "Meditação de entrega" },
];
