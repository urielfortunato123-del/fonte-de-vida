export interface Verse {
  number: number;
  text: string;
}

export interface Chapter {
  id: string;
  name: string;
  number: number;
  verses: Verse[];
  commentary?: string;
}

export interface Work {
  id: string;
  name: string;
  description: string;
  chapters: Chapter[];
}

export interface TraditionLibrary {
  traditionId: string;
  works: Work[];
  glossary: { term: string; definition: string }[];
}

export const library: TraditionLibrary[] = [
  {
    traditionId: "catolico",
    works: [
      {
        id: "genesis",
        name: "Gênesis",
        description: "O livro das origens — criação do mundo e da humanidade",
        chapters: [
          {
            id: "gen-1", name: "A Criação", number: 1,
            commentary: "O relato da criação expressa a soberania de Deus sobre toda a existência.",
            verses: [
              { number: 1, text: "No princípio, Deus criou os céus e a terra." },
              { number: 2, text: "A terra era sem forma e vazia; havia trevas sobre a face do abismo, e o Espírito de Deus pairava sobre as águas." },
              { number: 3, text: "Disse Deus: 'Haja luz.' E houve luz." },
              { number: 4, text: "Deus viu que a luz era boa; e separou a luz das trevas." },
              { number: 5, text: "Deus chamou à luz 'dia' e às trevas chamou 'noite'. Houve tarde e manhã — o primeiro dia." },
              { number: 6, text: "E disse Deus: 'Haja um firmamento no meio das águas, e haja separação entre águas e águas.'" },
              { number: 7, text: "Deus fez o firmamento e separou as águas que estavam debaixo do firmamento das que estavam por cima. E assim se fez." },
            ],
          },
          {
            id: "gen-2", name: "O Jardim do Éden", number: 2,
            commentary: "A narrativa do Éden revela a relação original entre Deus e a humanidade.",
            verses: [
              { number: 1, text: "Assim foram concluídos os céus e a terra, com todos os seus exércitos." },
              { number: 2, text: "No sétimo dia, Deus já havia concluído a obra que realizara, e nesse dia descansou de toda a sua obra." },
              { number: 3, text: "Abençoou Deus o sétimo dia e o santificou, porque nele descansou de toda a obra que realizara na criação." },
              { number: 7, text: "Então o Senhor Deus formou o homem do pó da terra e soprou em suas narinas o fôlego de vida, e o homem se tornou um ser vivente." },
              { number: 8, text: "O Senhor Deus plantou um jardim no Éden, na direção do oriente, e ali colocou o homem que formara." },
            ],
          },
        ],
      },
      {
        id: "salmos",
        name: "Salmos",
        description: "Cânticos de louvor, súplica e sabedoria",
        chapters: [
          {
            id: "sl-23", name: "O Bom Pastor", number: 23,
            commentary: "Um dos salmos mais conhecidos, expressa confiança total na providência divina.",
            verses: [
              { number: 1, text: "O Senhor é o meu pastor, nada me faltará." },
              { number: 2, text: "Deitar-me faz em verdes pastagens, guia-me mansamente a águas tranquilas." },
              { number: 3, text: "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome." },
              { number: 4, text: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo." },
              { number: 5, text: "Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda." },
              { number: 6, text: "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias." },
            ],
          },
          {
            id: "sl-91", name: "Proteção do Altíssimo", number: 91,
            verses: [
              { number: 1, text: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará." },
              { number: 2, text: "Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei." },
              { number: 11, text: "Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos." },
            ],
          },
        ],
      },
      {
        id: "evangelho-joao",
        name: "Evangelho de João",
        description: "O testemunho do discípulo amado sobre Jesus Cristo",
        chapters: [
          {
            id: "jo-1", name: "O Verbo", number: 1,
            commentary: "O prólogo de João apresenta Jesus como o Logos divino, existente desde a eternidade.",
            verses: [
              { number: 1, text: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus." },
              { number: 2, text: "Ele estava no princípio com Deus." },
              { number: 3, text: "Todas as coisas foram feitas por intermédio dele, e sem ele nada do que foi feito se fez." },
              { number: 4, text: "Nele estava a vida, e a vida era a luz dos homens." },
              { number: 14, text: "E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade." },
            ],
          },
          {
            id: "jo-3", name: "Nicodemos", number: 3,
            verses: [
              { number: 16, text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." },
              { number: 17, text: "Porque Deus enviou o seu Filho ao mundo, não para que condenasse o mundo, mas para que o mundo fosse salvo por ele." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Eucaristia", definition: "Sacramento central da fé católica, celebração do corpo e sangue de Cristo." },
      { term: "Santíssima Trindade", definition: "Dogma de um só Deus em três pessoas: Pai, Filho e Espírito Santo." },
      { term: "Graça", definition: "Dom gratuito de Deus que nos torna participantes de sua natureza divina." },
    ],
  },
  {
    traditionId: "evangelico",
    works: [
      {
        id: "romanos",
        name: "Epístola aos Romanos",
        description: "Carta de Paulo sobre justificação pela fé",
        chapters: [
          {
            id: "rm-8", name: "Vida no Espírito", number: 8,
            commentary: "Considerado o capítulo mais importante de Romanos, trata da vida guiada pelo Espírito Santo.",
            verses: [
              { number: 1, text: "Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus." },
              { number: 28, text: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus." },
              { number: 31, text: "Se Deus é por nós, quem será contra nós?" },
              { number: 37, text: "Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou." },
              { number: 38, text: "Porque estou certo de que nem a morte, nem a vida, nem os anjos poderão nos separar do amor de Deus." },
            ],
          },
        ],
      },
      {
        id: "proverbios",
        name: "Provérbios",
        description: "Sabedoria prática para a vida diária",
        chapters: [
          {
            id: "pv-3", name: "Confiança no Senhor", number: 3,
            verses: [
              { number: 5, text: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento." },
              { number: 6, text: "Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas." },
              { number: 13, text: "Bem-aventurado o homem que acha sabedoria, e o homem que adquire conhecimento." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Justificação pela fé", definition: "Doutrina central protestante: salvação pela fé em Cristo, não por obras." },
      { term: "Sola Scriptura", definition: "Princípio de que a Bíblia é a única autoridade suprema em matéria de fé." },
    ],
  },
  {
    traditionId: "islamico",
    works: [
      {
        id: "alcorao",
        name: "Alcorão Sagrado",
        description: "Palavra de Deus revelada ao Profeta Muhammad (ﷺ)",
        chapters: [
          {
            id: "al-fatiha", name: "Al-Fatiha (A Abertura)", number: 1,
            commentary: "A surata de abertura, recitada em cada oração. Considerada a essência do Alcorão.",
            verses: [
              { number: 1, text: "Em nome de Deus, o Clemente, o Misericordioso." },
              { number: 2, text: "Louvado seja Deus, Senhor do Universo." },
              { number: 3, text: "O Clemente, o Misericordioso." },
              { number: 4, text: "Soberano do Dia do Juízo." },
              { number: 5, text: "A Ti adoramos e a Ti imploramos ajuda." },
              { number: 6, text: "Guia-nos à senda reta." },
              { number: 7, text: "A senda dos que agraciaste, não a dos que incorreram na Tua ira, nem a dos que se desviaram." },
            ],
          },
          {
            id: "al-baqara", name: "Al-Baqara (A Vaca) — Trechos", number: 2,
            commentary: "A mais longa surata do Alcorão, abrange leis, histórias e orientações.",
            verses: [
              { number: 255, text: "Deus! Não há divindade além Dele, o Vivente, o Sustentador. Não O tomam sonolência nem sono. A Ele pertence tudo o que há nos céus e na terra." },
              { number: 256, text: "Não há compulsão na religião. A verdade se distinguiu do erro." },
              { number: 286, text: "Deus não impõe a nenhuma alma uma carga superior às suas forças." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Tawhid", definition: "Unicidade absoluta de Deus — princípio fundamental do Islã." },
      { term: "Salat", definition: "As cinco orações diárias obrigatórias." },
      { term: "Jihad", definition: "Esforço interior para se tornar uma pessoa melhor; também defesa da justiça." },
    ],
  },
  {
    traditionId: "judaismo",
    works: [
      {
        id: "tora-bereshit",
        name: "Torá — Bereshit (Gênesis)",
        description: "O primeiro livro da Torá, as origens do povo de Israel",
        chapters: [
          {
            id: "ber-1", name: "A Criação", number: 1,
            commentary: "A narrativa da criação na tradição judaica enfatiza a responsabilidade humana como parceiros de Deus.",
            verses: [
              { number: 1, text: "No princípio, Deus criou os céus e a terra." },
              { number: 27, text: "E Deus criou o ser humano à Sua imagem; à imagem de Deus o criou; macho e fêmea os criou." },
              { number: 31, text: "E Deus viu tudo o que havia feito, e eis que era muito bom." },
            ],
          },
        ],
      },
      {
        id: "tehilim",
        name: "Tehilim (Salmos)",
        description: "Cânticos de louvor e reflexão",
        chapters: [
          {
            id: "teh-1", name: "O Caminho do Justo", number: 1,
            verses: [
              { number: 1, text: "Feliz o homem que não anda segundo o conselho dos ímpios." },
              { number: 2, text: "Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite." },
              { number: 3, text: "Ele é como árvore plantada junto a ribeiros de águas, que dá o seu fruto na estação própria." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Torá", definition: "Os cinco livros de Moisés, fundamento da lei e identidade judaica." },
      { term: "Shabbat", definition: "O dia de descanso sagrado, do pôr do sol de sexta ao de sábado." },
      { term: "Teshuvá", definition: "Retorno, arrependimento — processo de transformação interior." },
    ],
  },
  {
    traditionId: "espirita",
    works: [
      {
        id: "evangelho-espirito",
        name: "O Evangelho Segundo o Espiritismo",
        description: "Obra fundamental de Allan Kardec sobre a moral cristã à luz espírita",
        chapters: [
          {
            id: "ese-5", name: "Bem-aventurados os aflitos", number: 5,
            commentary: "Kardec explica o sofrimento como instrumento de evolução espiritual.",
            verses: [
              { number: 1, text: "Bem-aventurados os que choram, porque serão consolados." },
              { number: 2, text: "O sofrimento na Terra é temporário e serve ao progresso do espírito." },
              { number: 3, text: "A dor purifica e ensina; através dela, a alma amadurece." },
              { number: 4, text: "Não há castigo eterno — há aprendizado contínuo através das existências." },
            ],
          },
          {
            id: "ese-11", name: "Amar o próximo", number: 11,
            verses: [
              { number: 1, text: "Fora da caridade não há salvação." },
              { number: 2, text: "Amai-vos uns aos outros como eu vos amei — eis toda a lei divina." },
              { number: 3, text: "A caridade verdadeira é benevolência para com todos, indulgência para as imperfeições dos outros." },
            ],
          },
        ],
      },
      {
        id: "livro-espiritos",
        name: "O Livro dos Espíritos",
        description: "Perguntas e respostas sobre Deus, vida e evolução espiritual",
        chapters: [
          {
            id: "le-1", name: "Das causas primárias", number: 1,
            commentary: "As primeiras perguntas tratam da existência de Deus e da natureza do universo.",
            verses: [
              { number: 1, text: "Pergunta: Que é Deus? — Resposta: Deus é a inteligência suprema, causa primária de todas as coisas." },
              { number: 2, text: "Pergunta: Que se deve entender por infinito? — Resposta: O que não tem começo nem fim: o desconhecido." },
              { number: 4, text: "Pergunta: Onde se pode encontrar a prova da existência de Deus? — Resposta: Não há efeito sem causa. Buscai a causa de tudo o que não é obra do homem." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Reencarnação", definition: "Princípio de que o espírito renasce em novos corpos para evoluir." },
      { term: "Perispírito", definition: "Envoltório semimaterial que liga o espírito ao corpo físico." },
      { term: "Lei de Causa e Efeito", definition: "Cada ação gera consequências que retornam ao espírito." },
    ],
  },
  {
    traditionId: "umbanda",
    works: [
      {
        id: "fundamentos",
        name: "Fundamentos da Umbanda",
        description: "Princípios e ensinamentos da tradição umbandista",
        chapters: [
          {
            id: "fund-1", name: "Princípios Básicos", number: 1,
            commentary: "A Umbanda é uma religião brasileira que une elementos africanos, indígenas e cristãos.",
            verses: [
              { number: 1, text: "A Umbanda é a manifestação do espírito para a caridade." },
              { number: 2, text: "Deus é Olorum, Zambi, o Criador — a força suprema que governa o universo." },
              { number: 3, text: "Os Orixás são manifestações da natureza divina, forças cósmicas que regem a vida." },
              { number: 4, text: "A mediunidade é dom sagrado que deve ser exercido com responsabilidade e amor." },
            ],
          },
          {
            id: "fund-2", name: "As Sete Linhas", number: 2,
            verses: [
              { number: 1, text: "Oxalá governa a linha da fé e da paz." },
              { number: 2, text: "Ogum governa a linha da luta e da defesa." },
              { number: 3, text: "Oxóssi governa a linha do conhecimento e da natureza." },
              { number: 4, text: "Xangô governa a linha da justiça e do equilíbrio." },
              { number: 5, text: "Iemanjá governa a linha do amor e da família." },
            ],
          },
        ],
      },
      {
        id: "pontos-cantados",
        name: "Pontos Cantados",
        description: "Cânticos sagrados da Umbanda",
        chapters: [
          {
            id: "pc-1", name: "Pontos de Abertura", number: 1,
            verses: [
              { number: 1, text: "Abre a roda, meu pai / Abre a roda, meu senhor / Eu vim aqui pra trabalhar / Na força de Oxalá." },
              { number: 2, text: "Saravá, saravá / Saravá os Orixás / Que vêm nos abençoar / Com sua santa paz." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Orixá", definition: "Divindades que representam forças da natureza e aspectos da vida." },
      { term: "Terreiro", definition: "Espaço sagrado onde se realizam os rituais da Umbanda." },
      { term: "Preto Velho", definition: "Espíritos de ancestrais africanos que trazem sabedoria e consolo." },
    ],
  },
  {
    traditionId: "budismo",
    works: [
      {
        id: "dhammapada",
        name: "Dhammapada",
        description: "Coleção de versos atribuídos ao Buda Gautama",
        chapters: [
          {
            id: "dh-1", name: "Versos Gêmeos", number: 1,
            commentary: "Os primeiros versos ensinam que a mente é a fonte de toda experiência.",
            verses: [
              { number: 1, text: "A mente é a precursora de todos os estados. A mente é seu fundamento, e eles são criados pela mente." },
              { number: 2, text: "Se alguém fala ou age com mente impura, o sofrimento o segue como a roda segue a pata do boi." },
              { number: 3, text: "Se alguém fala ou age com mente pura, a felicidade o segue como sua sombra que nunca o abandona." },
              { number: 5, text: "O ódio nunca cessa pelo ódio neste mundo; pelo amor é que ele cessa. Esta é uma lei eterna." },
            ],
          },
          {
            id: "dh-14", name: "O Buda", number: 14,
            verses: [
              { number: 183, text: "Não fazer o mal, cultivar o bem, purificar a mente — este é o ensinamento dos Budas." },
              { number: 184, text: "A paciência é a maior austeridade. O Nibbana é o bem supremo, dizem os Budas." },
              { number: 190, text: "Aquele que toma refúgio no Buda, no Dharma e no Sangha, vê com sabedoria as Quatro Nobres Verdades." },
            ],
          },
        ],
      },
      {
        id: "quatro-nobres",
        name: "As Quatro Nobres Verdades",
        description: "O ensinamento fundamental do Buda",
        chapters: [
          {
            id: "qn-1", name: "As Verdades", number: 1,
            commentary: "O primeiro sermão do Buda após a iluminação, pregado no Parque dos Cervos em Sarnath.",
            verses: [
              { number: 1, text: "Esta é a Nobre Verdade do Sofrimento: nascimento é sofrimento, envelhecimento é sofrimento, doença é sofrimento." },
              { number: 2, text: "Esta é a Nobre Verdade da Origem do Sofrimento: é o desejo que leva à renovação do ser." },
              { number: 3, text: "Esta é a Nobre Verdade da Cessação do Sofrimento: é o completo desaparecimento e cessação desse mesmo desejo." },
              { number: 4, text: "Esta é a Nobre Verdade do Caminho: é o Nobre Caminho Óctuplo — visão correta, intenção correta, fala correta, ação correta, modo de vida correto, esforço correto, atenção correta, concentração correta." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Dharma", definition: "Os ensinamentos do Buda; a verdade universal; a lei cósmica." },
      { term: "Nirvana", definition: "Estado de libertação do ciclo de sofrimento e renascimentos." },
      { term: "Sangha", definition: "Comunidade de praticantes do caminho budista." },
    ],
  },
  {
    traditionId: "hinduismo",
    works: [
      {
        id: "bhagavad-gita",
        name: "Bhagavad Gita",
        description: "O Canto do Senhor — diálogo entre Krishna e Arjuna",
        chapters: [
          {
            id: "bg-2", name: "Sankhya Yoga — A Alma Eterna", number: 2,
            commentary: "Krishna ensina Arjuna sobre a natureza eterna da alma e o dever (dharma).",
            verses: [
              { number: 20, text: "A alma nunca nasce nem morre. Ela não veio a existir, não vem a existir e não virá a existir. É eterna, perpétua e primordial." },
              { number: 22, text: "Assim como uma pessoa veste roupas novas, descartando as velhas, a alma aceita novos corpos, descartando os antigos." },
              { number: 47, text: "Você tem direito à ação, mas nunca aos seus frutos. Que os frutos da ação não sejam seu motivo, nem se apegue à inação." },
              { number: 48, text: "Realize suas ações firmado no Yoga, abandonando o apego e sendo igual no sucesso e no fracasso." },
            ],
          },
          {
            id: "bg-9", name: "O Conhecimento Supremo", number: 9,
            verses: [
              { number: 22, text: "Àqueles que Me adoram com devoção exclusiva, meditando em Minha forma transcendental, Eu supro o que lhes falta e preservo o que possuem." },
              { number: 26, text: "Se alguém Me oferece com devoção uma folha, uma flor, uma fruta ou água, Eu aceito essa oferenda de coração puro." },
            ],
          },
        ],
      },
      {
        id: "upanishads",
        name: "Upanishads — Trechos",
        description: "Textos filosóficos sobre a natureza do ser e da realidade",
        chapters: [
          {
            id: "up-1", name: "Ensinamentos Centrais", number: 1,
            commentary: "As Upanishads são o cerne da filosofia vedanta, explorando a identidade entre o eu individual (Atman) e o absoluto (Brahman).",
            verses: [
              { number: 1, text: "Tat tvam asi — Tu és Aquilo. (Chandogya Upanishad)" },
              { number: 2, text: "Aham Brahmasmi — Eu sou Brahman. (Brihadaranyaka Upanishad)" },
              { number: 3, text: "Do irreal leva-me ao Real. Da escuridão leva-me à Luz. Da morte leva-me à Imortalidade. (Brihadaranyaka Upanishad)" },
              { number: 4, text: "Assim como rios fluindo para o oceano perdem seu nome e forma, o sábio, liberto do nome e forma, alcança o Ser Supremo. (Mundaka Upanishad)" },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Atman", definition: "O eu verdadeiro, a alma individual que é idêntica a Brahman." },
      { term: "Brahman", definition: "A realidade última, infinita e absoluta que permeia tudo." },
      { term: "Karma", definition: "Lei de ação e consequência que governa o ciclo de existências." },
      { term: "Dharma", definition: "Dever, ordem cósmica, caminho correto de cada ser." },
    ],
  },
  {
    traditionId: "explorar",
    works: [
      {
        id: "filosofia-religiao",
        name: "Filosofia da Religião",
        description: "Grandes questões sobre fé, razão e existência",
        chapters: [
          {
            id: "fr-1", name: "A Questão de Deus", number: 1,
            commentary: "Ao longo da história, filósofos abordaram a existência de Deus por diferentes ângulos.",
            verses: [
              { number: 1, text: "\"Deus está morto\" não significa que Deus nunca existiu, mas que a fé perdeu seu papel central na cultura ocidental. — Nietzsche" },
              { number: 2, text: "Tudo o que se move é movido por outro. É necessário chegar a um primeiro motor imóvel: Deus. — Tomás de Aquino" },
              { number: 3, text: "A religião é o suspiro da criatura oprimida, o coração de um mundo sem coração. — Marx" },
              { number: 4, text: "A experiência religiosa é um fato psicológico que merece estudo, independente de sua verdade última. — William James" },
            ],
          },
          {
            id: "fr-2", name: "Ética sem Religião", number: 2,
            verses: [
              { number: 1, text: "Age apenas segundo uma máxima tal que possas querer que ela se torne uma lei universal. — Kant" },
              { number: 2, text: "A dúvida é o começo da sabedoria. — Aristóteles" },
              { number: 3, text: "O homem está condenado a ser livre. — Sartre" },
              { number: 4, text: "É preciso imaginar Sísifo feliz. — Camus" },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Agnosticismo", definition: "Posição de que não é possível saber com certeza se Deus existe." },
      { term: "Ateísmo", definition: "Ausência de crença em divindades." },
      { term: "Teísmo", definition: "Crença na existência de um ou mais deuses." },
    ],
  },
];

export function getLibraryByTradition(traditionId: string): TraditionLibrary | undefined {
  return library.find((l) => l.traditionId === traditionId);
}
