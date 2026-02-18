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
  // ═══════════════════════════════════════════
  // CATÓLICO
  // ═══════════════════════════════════════════
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
              { number: 8, text: "Deus chamou ao firmamento 'céu'. Houve tarde e manhã — o segundo dia." },
              { number: 9, text: "E disse Deus: 'Ajuntem-se as águas debaixo dos céus num lugar; e apareça a porção seca.' E assim se fez." },
              { number: 10, text: "À porção seca Deus chamou 'terra'; e ao ajuntamento das águas chamou 'mares'. E Deus viu que era bom." },
              { number: 11, text: "E disse Deus: 'Produza a terra erva verde, erva que dê semente, árvore frutífera que dê fruto segundo a sua espécie.' E assim se fez." },
              { number: 14, text: "E disse Deus: 'Haja luminares na expansão dos céus, para haver separação entre o dia e a noite.'" },
              { number: 16, text: "E fez Deus os dois grandes luminares: o luminar maior para governar o dia, e o luminar menor para governar a noite." },
              { number: 20, text: "E disse Deus: 'Produzam as águas abundantemente répteis de alma vivente; e voem as aves sobre a face da expansão dos céus.'" },
              { number: 24, text: "E disse Deus: 'Produza a terra alma vivente conforme a sua espécie; gado, e répteis e feras da terra.'" },
              { number: 26, text: "E disse Deus: 'Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar.'" },
              { number: 27, text: "E criou Deus o homem à sua imagem; à imagem de Deus o criou; macho e fêmea os criou." },
              { number: 28, text: "E Deus os abençoou, e disse: 'Frutificai e multiplicai-vos, e enchei a terra, e sujeitai-a.'" },
              { number: 31, text: "E viu Deus tudo quanto tinha feito, e eis que era muito bom. E foi a tarde e a manhã, o dia sexto." },
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
              { number: 9, text: "O Senhor Deus fez nascer do solo todo tipo de árvores agradáveis aos olhos e boas para alimento. E no meio do jardim a árvore da vida e a árvore do conhecimento do bem e do mal." },
              { number: 15, text: "O Senhor Deus colocou o homem no Jardim do Éden para cuidar dele e cultivá-lo." },
              { number: 18, text: "O Senhor Deus disse: 'Não é bom que o homem esteja só. Farei para ele uma auxiliadora que lhe seja adequada.'" },
              { number: 21, text: "Então o Senhor Deus fez o homem cair em sono profundo e, enquanto este dormia, tirou-lhe uma das costelas." },
              { number: 22, text: "Com a costela que havia tirado do homem, o Senhor Deus fez uma mulher e a levou até ele." },
              { number: 24, text: "Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e eles se tornarão uma só carne." },
            ],
          },
          {
            id: "gen-3", name: "A Queda", number: 3,
            commentary: "A narrativa da queda explica a entrada do pecado no mundo e a promessa de redenção.",
            verses: [
              { number: 1, text: "Ora, a serpente era mais astuta que todos os animais do campo que o Senhor Deus tinha feito." },
              { number: 6, text: "Quando a mulher viu que a árvore era boa para comer, agradável aos olhos e desejável para dar entendimento, tomou do seu fruto e comeu." },
              { number: 9, text: "Mas o Senhor Deus chamou ao homem e disse-lhe: 'Onde estás?'" },
              { number: 15, text: "Porei inimizade entre ti e a mulher, e entre a tua descendência e a sua descendência; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar." },
              { number: 19, text: "Do suor do teu rosto comerás o teu pão, até que tornes à terra; porque dela foste tomado; porquanto és pó e em pó te tornarás." },
            ],
          },
          {
            id: "gen-12", name: "O Chamado de Abraão", number: 12,
            commentary: "A vocação de Abraão marca o início da história da salvação.",
            verses: [
              { number: 1, text: "Ora, o Senhor disse a Abrão: 'Sai-te da tua terra, da tua parentela e da casa de teu pai, para a terra que eu te mostrarei.'" },
              { number: 2, text: "E far-te-ei uma grande nação, e abençoar-te-ei e engrandecerei o teu nome; e tu serás uma bênção." },
              { number: 3, text: "Abençoarei os que te abençoarem, e amaldiçoarei os que te amaldiçoarem; e em ti serão benditas todas as famílias da terra." },
            ],
          },
        ],
      },
      {
        id: "exodo",
        name: "Êxodo",
        description: "A libertação do povo de Israel do Egito",
        chapters: [
          {
            id: "ex-3", name: "A Sarça Ardente", number: 3,
            commentary: "Deus se revela a Moisés e o chama para libertar Seu povo.",
            verses: [
              { number: 2, text: "E apareceu-lhe o anjo do Senhor em uma chama de fogo do meio duma sarça; e olhou, e eis que a sarça ardia no fogo, e a sarça não se consumia." },
              { number: 4, text: "Vendo o Senhor que se virava para ver, Deus chamou-o do meio da sarça e disse: 'Moisés, Moisés!' E ele disse: 'Eis-me aqui.'" },
              { number: 5, text: "'Não te chegues para cá; tira os sapatos de teus pés; porque o lugar em que tu estás é terra santa.'" },
              { number: 14, text: "E disse Deus a Moisés: 'EU SOU O QUE SOU.' Disse mais: 'Assim dirás aos filhos de Israel: EU SOU me enviou a vós.'" },
            ],
          },
          {
            id: "ex-14", name: "A Travessia do Mar Vermelho", number: 14,
            verses: [
              { number: 13, text: "Não temais; estai quietos, e vede o livramento do Senhor, que hoje vos fará." },
              { number: 21, text: "Então Moisés estendeu a sua mão sobre o mar, e o Senhor fez o mar retirar-se por um forte vento oriental toda aquela noite." },
              { number: 22, text: "E os filhos de Israel entraram pelo meio do mar em seco; e as águas foram-lhes como muro à sua direita e à sua esquerda." },
            ],
          },
          {
            id: "ex-20", name: "Os Dez Mandamentos", number: 20,
            commentary: "Os Dez Mandamentos são o fundamento moral da fé judaico-cristã.",
            verses: [
              { number: 1, text: "Então falou Deus todas estas palavras, dizendo:" },
              { number: 2, text: "Eu sou o Senhor teu Deus, que te tirei da terra do Egito, da casa da servidão." },
              { number: 3, text: "Não terás outros deuses diante de mim." },
              { number: 4, text: "Não farás para ti imagem de escultura, nem alguma semelhança do que há em cima nos céus." },
              { number: 7, text: "Não tomarás o nome do Senhor teu Deus em vão." },
              { number: 8, text: "Lembra-te do dia do sábado, para o santificar." },
              { number: 12, text: "Honra a teu pai e a tua mãe, para que se prolonguem os teus dias na terra." },
              { number: 13, text: "Não matarás." },
              { number: 14, text: "Não adulterarás." },
              { number: 15, text: "Não furtarás." },
              { number: 16, text: "Não dirás falso testemunho contra o teu próximo." },
              { number: 17, text: "Não cobiçarás a casa do teu próximo, não cobiçarás a mulher do teu próximo." },
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
            id: "sl-1", name: "O Justo e o Ímpio", number: 1,
            verses: [
              { number: 1, text: "Bem-aventurado o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores." },
              { number: 2, text: "Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite." },
              { number: 3, text: "Ele é como árvore plantada junto a ribeiros de águas, que dá o seu fruto na estação própria, e cujas folhas não caem." },
            ],
          },
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
            id: "sl-46", name: "Deus é Nosso Refúgio", number: 46,
            verses: [
              { number: 1, text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia." },
              { number: 2, text: "Por isso não temeremos, ainda que a terra se mude, e ainda que os montes se transportem para o meio dos mares." },
              { number: 10, text: "Aquietai-vos, e sabei que eu sou Deus; serei exaltado entre as nações, serei exaltado sobre a terra." },
            ],
          },
          {
            id: "sl-51", name: "Oração de Arrependimento", number: 51,
            commentary: "Salmo penitencial atribuído a Davi após seu pecado com Bate-Seba.",
            verses: [
              { number: 1, text: "Tem misericórdia de mim, ó Deus, segundo a tua benignidade." },
              { number: 2, text: "Lava-me completamente da minha iniquidade, e purifica-me do meu pecado." },
              { number: 10, text: "Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto." },
              { number: 17, text: "Os sacrifícios para Deus são o espírito quebrantado; a um coração quebrantado e contrito não desprezarás, ó Deus." },
            ],
          },
          {
            id: "sl-91", name: "Proteção do Altíssimo", number: 91,
            verses: [
              { number: 1, text: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará." },
              { number: 2, text: "Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei." },
              { number: 4, text: "Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás." },
              { number: 5, text: "Não temerás espanto noturno, nem seta que voe de dia." },
              { number: 7, text: "Mil cairão ao teu lado, e dez mil à tua direita, mas tu não serás atingido." },
              { number: 11, text: "Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos." },
              { number: 14, text: "Porquanto pôs em mim o seu amor, eu o livrarei; pô-lo-ei em retiro alto, porque conheceu o meu nome." },
            ],
          },
          {
            id: "sl-103", name: "Bênçãos de Deus", number: 103,
            verses: [
              { number: 1, text: "Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o seu santo nome." },
              { number: 2, text: "Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios." },
              { number: 3, text: "Ele é o que perdoa todas as tuas iniquidades, que sara todas as tuas enfermidades." },
              { number: 8, text: "Misericordioso e piedoso é o Senhor; longânimo e grande em benignidade." },
              { number: 12, text: "Quanto está longe o oriente do ocidente, assim afasta de nós as nossas transgressões." },
            ],
          },
          {
            id: "sl-121", name: "O Guardião de Israel", number: 121,
            verses: [
              { number: 1, text: "Elevo os meus olhos para os montes; de onde me virá o socorro?" },
              { number: 2, text: "O meu socorro vem do Senhor, que fez o céu e a terra." },
              { number: 3, text: "Não deixará vacilar o teu pé; aquele que te guarda não tosquenejará." },
              { number: 7, text: "O Senhor te guardará de todo o mal; guardará a tua alma." },
              { number: 8, text: "O Senhor guardará a tua entrada e a tua saída, desde agora e para sempre." },
            ],
          },
          {
            id: "sl-139", name: "Deus Onisciente", number: 139,
            verses: [
              { number: 1, text: "Senhor, tu me sondaste, e me conheces." },
              { number: 2, text: "Tu sabes o meu assentar e o meu levantar; de longe entendes o meu pensamento." },
              { number: 7, text: "Para onde me irei do teu espírito, ou para onde fugirei da tua face?" },
              { number: 14, text: "Eu te louvarei, porque de um modo assombroso, e tão maravilhoso fui feito." },
              { number: 23, text: "Sonda-me, ó Deus, e conhece o meu coração; prova-me, e conhece os meus pensamentos." },
            ],
          },
        ],
      },
      {
        id: "evangelho-mateus",
        name: "Evangelho de Mateus",
        description: "O evangelho do Messias prometido",
        chapters: [
          {
            id: "mt-5", name: "O Sermão da Montanha", number: 5,
            commentary: "O mais importante discurso de Jesus, contendo as Bem-aventuranças e a essência de seus ensinamentos.",
            verses: [
              { number: 3, text: "Bem-aventurados os pobres de espírito, porque deles é o reino dos céus." },
              { number: 4, text: "Bem-aventurados os que choram, porque eles serão consolados." },
              { number: 5, text: "Bem-aventurados os mansos, porque eles herdarão a terra." },
              { number: 6, text: "Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos." },
              { number: 7, text: "Bem-aventurados os misericordiosos, porque eles alcançarão misericórdia." },
              { number: 8, text: "Bem-aventurados os limpos de coração, porque eles verão a Deus." },
              { number: 9, text: "Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus." },
              { number: 13, text: "Vós sois o sal da terra; e se o sal for insípido, com que se há de salgar?" },
              { number: 14, text: "Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte." },
              { number: 44, text: "Eu, porém, vos digo: Amai a vossos inimigos, bendizei os que vos maldizem, e orai pelos que vos maltratam." },
            ],
          },
          {
            id: "mt-6", name: "O Pai Nosso", number: 6,
            commentary: "Jesus ensina sobre a oração, o desprendimento material e a confiança em Deus.",
            verses: [
              { number: 6, text: "Tu, porém, quando orares, entra no teu aposento e, fechando a tua porta, ora a teu Pai que está em secreto." },
              { number: 9, text: "Pai nosso, que estás nos céus, santificado seja o teu nome." },
              { number: 10, text: "Venha o teu reino, seja feita a tua vontade, assim na terra como no céu." },
              { number: 11, text: "O pão nosso de cada dia nos dá hoje." },
              { number: 12, text: "E perdoa-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores." },
              { number: 13, text: "E não nos induzas à tentação; mas livra-nos do mal; porque teu é o reino, e o poder, e a glória, para sempre. Amém." },
              { number: 19, text: "Não ajunteis tesouros na terra, onde a traça e a ferrugem tudo consomem." },
              { number: 20, text: "Mas ajuntai tesouros no céu, onde nem a traça nem a ferrugem consomem." },
              { number: 21, text: "Porque onde estiver o vosso tesouro, aí estará também o vosso coração." },
              { number: 26, text: "Olhai para as aves do céu, que não semeiam, nem segam, nem ajuntam em celeiros; e vosso Pai celestial as alimenta." },
              { number: 33, text: "Mas buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas." },
              { number: 34, text: "Não vos inquieteis, pois, pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo." },
            ],
          },
          {
            id: "mt-7", name: "Não Julgueis", number: 7,
            verses: [
              { number: 1, text: "Não julgueis, para que não sejais julgados." },
              { number: 7, text: "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á." },
              { number: 12, text: "Portanto, tudo o que vós quereis que os homens vos façam, fazei-lho também vós, porque esta é a lei e os profetas." },
              { number: 13, text: "Entrai pela porta estreita; porque larga é a porta, e espaçoso o caminho que conduz à perdição." },
              { number: 24, text: "Todo aquele que ouve estas minhas palavras e as pratica, será semelhante ao homem prudente que edificou a sua casa sobre a rocha." },
            ],
          },
          {
            id: "mt-22", name: "O Maior Mandamento", number: 22,
            verses: [
              { number: 37, text: "'Amarás o Senhor teu Deus de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento.'" },
              { number: 38, text: "Este é o primeiro e grande mandamento." },
              { number: 39, text: "E o segundo, semelhante a este, é: 'Amarás o teu próximo como a ti mesmo.'" },
              { number: 40, text: "Destes dois mandamentos dependem toda a lei e os profetas." },
            ],
          },
          {
            id: "mt-25", name: "As Ovelhas e os Bodes", number: 25,
            verses: [
              { number: 35, text: "Porque tive fome, e destes-me de comer; tive sede, e destes-me de beber; era estrangeiro, e hospedastes-me." },
              { number: 36, text: "Estava nu, e vestistes-me; adoeci, e visitastes-me; estive na prisão, e fostes ver-me." },
              { number: 40, text: "Em verdade vos digo que quando o fizestes a um destes meus pequeninos irmãos, a mim o fizestes." },
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
              { number: 5, text: "E a luz resplandece nas trevas, e as trevas não a compreenderam." },
              { number: 12, text: "Mas, a todos quantos o receberam, deu-lhes o poder de serem feitos filhos de Deus." },
              { number: 14, text: "E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade." },
            ],
          },
          {
            id: "jo-3", name: "Nicodemos", number: 3,
            verses: [
              { number: 3, text: "Jesus respondeu: 'Na verdade, na verdade te digo que aquele que não nascer de novo, não pode ver o reino de Deus.'" },
              { number: 16, text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." },
              { number: 17, text: "Porque Deus enviou o seu Filho ao mundo, não para que condenasse o mundo, mas para que o mundo fosse salvo por ele." },
            ],
          },
          {
            id: "jo-8", name: "A Mulher Adúltera", number: 8,
            verses: [
              { number: 7, text: "Aquele que dentre vós está sem pecado seja o primeiro que atire pedra contra ela." },
              { number: 11, text: "Nem eu tampouco te condeno; vai-te, e não peques mais." },
              { number: 12, text: "Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida." },
              { number: 32, text: "E conhecereis a verdade, e a verdade vos libertará." },
            ],
          },
          {
            id: "jo-10", name: "O Bom Pastor", number: 10,
            verses: [
              { number: 10, text: "Eu vim para que tenham vida, e a tenham com abundância." },
              { number: 11, text: "Eu sou o bom pastor; o bom pastor dá a sua vida pelas ovelhas." },
              { number: 14, text: "Eu sou o bom pastor, e conheço as minhas ovelhas, e das minhas sou conhecido." },
              { number: 27, text: "As minhas ovelhas ouvem a minha voz, e eu conheço-as, e elas me seguem." },
            ],
          },
          {
            id: "jo-14", name: "O Caminho, a Verdade e a Vida", number: 14,
            verses: [
              { number: 1, text: "Não se turbe o vosso coração; credes em Deus, crede também em mim." },
              { number: 2, text: "Na casa de meu Pai há muitas moradas; se não fosse assim, eu vo-lo teria dito." },
              { number: 6, text: "Disse-lhe Jesus: 'Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai, senão por mim.'" },
              { number: 27, text: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize." },
            ],
          },
          {
            id: "jo-15", name: "A Videira Verdadeira", number: 15,
            verses: [
              { number: 1, text: "Eu sou a videira verdadeira, e meu Pai é o lavrador." },
              { number: 5, text: "Eu sou a videira, vós as varas; quem está em mim, e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer." },
              { number: 12, text: "O meu mandamento é este: Que vos ameis uns aos outros, assim como eu vos amei." },
              { number: 13, text: "Ninguém tem maior amor do que este, de dar alguém a sua vida pelos seus amigos." },
            ],
          },
        ],
      },
      {
        id: "eclesiastes",
        name: "Eclesiastes",
        description: "Reflexões sobre o sentido da vida",
        chapters: [
          {
            id: "ec-1", name: "Vaidade das Vaidades", number: 1,
            commentary: "O sábio reflete sobre a transitoriedade de todas as coisas.",
            verses: [
              { number: 2, text: "Vaidade de vaidades, diz o Pregador; vaidade de vaidades! Tudo é vaidade." },
              { number: 3, text: "Que proveito tem o homem de todo o seu trabalho, com que se afadiga debaixo do sol?" },
              { number: 4, text: "Uma geração vai, e outra geração vem; mas a terra para sempre permanece." },
              { number: 9, text: "O que foi, isso é o que há de ser; e o que se fez, isso se fará; de modo que nada há de novo debaixo do sol." },
            ],
          },
          {
            id: "ec-3", name: "Tempo para Tudo", number: 3,
            verses: [
              { number: 1, text: "Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu." },
              { number: 2, text: "Há tempo de nascer, e tempo de morrer; tempo de plantar, e tempo de arrancar o que se plantou." },
              { number: 3, text: "Tempo de matar, e tempo de curar; tempo de derrubar, e tempo de edificar." },
              { number: 4, text: "Tempo de chorar, e tempo de rir; tempo de prantear, e tempo de dançar." },
              { number: 5, text: "Tempo de espalhar pedras, e tempo de ajuntar pedras; tempo de abraçar, e tempo de afastar-se de abraçar." },
              { number: 6, text: "Tempo de buscar, e tempo de perder; tempo de guardar, e tempo de lançar fora." },
              { number: 7, text: "Tempo de rasgar, e tempo de coser; tempo de estar calado, e tempo de falar." },
              { number: 8, text: "Tempo de amar, e tempo de aborrecer; tempo de guerra, e tempo de paz." },
              { number: 11, text: "Tudo fez formoso em seu tempo; também pôs o mundo no coração do homem, sem que este possa descobrir as obras que Deus fez desde o princípio até ao fim." },
            ],
          },
        ],
      },
      {
        id: "isaias",
        name: "Isaías",
        description: "Profecias messiânicas e consolação",
        chapters: [
          {
            id: "is-40", name: "Consolai o Meu Povo", number: 40,
            commentary: "Início do Deutero-Isaías, mensagem de consolo e esperança ao povo exilado.",
            verses: [
              { number: 1, text: "Consolai, consolai o meu povo, diz o vosso Deus." },
              { number: 3, text: "Voz do que clama no deserto: Preparai o caminho do Senhor; endireitai no ermo vereda a nosso Deus." },
              { number: 28, text: "Não sabes, não ouviste, que o eterno Deus, o Senhor, o Criador dos confins da terra, nem se cansa nem se fatiga?" },
              { number: 29, text: "Dá força ao cansado, e multiplica as forças ao que não tem nenhum vigor." },
              { number: 31, text: "Mas os que esperam no Senhor renovarão as forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão." },
            ],
          },
          {
            id: "is-53", name: "O Servo Sofredor", number: 53,
            commentary: "Profecia sobre o Servo Sofredor, interpretada pelos cristãos como referência a Jesus Cristo.",
            verses: [
              { number: 3, text: "Era desprezado, e o mais rejeitado entre os homens; homem de dores, e experimentado nos sofrimentos." },
              { number: 4, text: "Verdadeiramente ele tomou sobre si as nossas enfermidades, e as nossas dores levou sobre si." },
              { number: 5, text: "Mas ele foi ferido pelas nossas transgressões, e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados." },
              { number: 6, text: "Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu caminho; mas o Senhor fez cair sobre ele a iniquidade de nós todos." },
            ],
          },
        ],
      },
      {
        id: "1corintios",
        name: "1 Coríntios",
        description: "Carta de Paulo sobre a vida da comunidade cristã",
        chapters: [
          {
            id: "1co-13", name: "O Hino do Amor", number: 13,
            commentary: "O mais belo texto bíblico sobre o amor, considerado o coração da ética cristã.",
            verses: [
              { number: 1, text: "Ainda que eu falasse as línguas dos homens e dos anjos, e não tivesse amor, seria como o metal que soa ou como o sino que tine." },
              { number: 2, text: "E ainda que tivesse o dom de profecia, e conhecesse todos os mistérios e toda a ciência, e não tivesse amor, nada seria." },
              { number: 4, text: "O amor é sofredor, é benigno; o amor não é invejoso, o amor não trata com leviandade, não se ensoberbece." },
              { number: 5, text: "Não se porta com indecência, não busca os seus interesses, não se irrita, não suspeita mal." },
              { number: 6, text: "Não folga com a injustiça, mas folga com a verdade." },
              { number: 7, text: "Tudo sofre, tudo crê, tudo espera, tudo suporta." },
              { number: 8, text: "O amor nunca falha." },
              { number: 13, text: "Agora permanecem a fé, a esperança e o amor, estes três; porém o maior destes é o amor." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Eucaristia", definition: "Sacramento central da fé católica, celebração do corpo e sangue de Cristo." },
      { term: "Santíssima Trindade", definition: "Dogma de um só Deus em três pessoas: Pai, Filho e Espírito Santo." },
      { term: "Graça", definition: "Dom gratuito de Deus que nos torna participantes de sua natureza divina." },
      { term: "Sacramento", definition: "Sinal visível da graça invisível, instituído por Cristo." },
      { term: "Pecado Original", definition: "Doutrina de que toda a humanidade herda a queda de Adão e Eva." },
      { term: "Imaculada Conceição", definition: "Dogma de que Maria foi concebida sem pecado original." },
      { term: "Transubstanciação", definition: "A transformação do pão e vinho no corpo e sangue de Cristo na Eucaristia." },
      { term: "Purgatório", definition: "Estado de purificação após a morte para os que morrem na graça de Deus." },
    ],
  },

  // ═══════════════════════════════════════════
  // EVANGÉLICO
  // ═══════════════════════════════════════════
  {
    traditionId: "evangelico",
    works: [
      {
        id: "romanos",
        name: "Epístola aos Romanos",
        description: "Carta de Paulo sobre justificação pela fé",
        chapters: [
          {
            id: "rm-3", name: "Todos Pecaram", number: 3,
            verses: [
              { number: 23, text: "Porque todos pecaram e destituídos estão da glória de Deus." },
              { number: 24, text: "Sendo justificados gratuitamente pela sua graça, pela redenção que há em Cristo Jesus." },
              { number: 28, text: "Concluímos que o homem é justificado pela fé, sem as obras da lei." },
            ],
          },
          {
            id: "rm-5", name: "A Paz com Deus", number: 5,
            verses: [
              { number: 1, text: "Tendo sido, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo." },
              { number: 3, text: "Também nos gloriamos nas tribulações; sabendo que a tribulação produz a paciência." },
              { number: 4, text: "E a paciência a experiência, e a experiência a esperança." },
              { number: 5, text: "E a esperança não traz confusão, porquanto o amor de Deus está derramado em nossos corações pelo Espírito Santo." },
              { number: 8, text: "Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores." },
            ],
          },
          {
            id: "rm-8", name: "Vida no Espírito", number: 8,
            commentary: "Considerado o capítulo mais importante de Romanos, trata da vida guiada pelo Espírito Santo.",
            verses: [
              { number: 1, text: "Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus." },
              { number: 14, text: "Porque todos os que são guiados pelo Espírito de Deus, esses são filhos de Deus." },
              { number: 18, text: "Porque para mim tenho por certo que as aflições deste tempo presente não são para comparar com a glória que em nós há de ser revelada." },
              { number: 28, text: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus." },
              { number: 31, text: "Se Deus é por nós, quem será contra nós?" },
              { number: 35, text: "Quem nos separará do amor de Cristo? A tribulação, ou a angústia, ou a perseguição, ou a fome, ou a nudez, ou o perigo, ou a espada?" },
              { number: 37, text: "Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou." },
              { number: 38, text: "Porque estou certo de que nem a morte, nem a vida, nem os anjos poderão nos separar do amor de Deus." },
            ],
          },
          {
            id: "rm-12", name: "Sacrifício Vivo", number: 12,
            verses: [
              { number: 1, text: "Rogo-vos, irmãos, pela compaixão de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus." },
              { number: 2, text: "E não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento." },
              { number: 9, text: "O amor seja não fingido. Aborrecei o mal e apegai-vos ao bem." },
              { number: 12, text: "Alegrai-vos na esperança. Sede pacientes na tribulação. Perseverai na oração." },
              { number: 21, text: "Não te deixes vencer do mal, mas vence o mal com o bem." },
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
            id: "pv-1", name: "O Início da Sabedoria", number: 1,
            verses: [
              { number: 7, text: "O temor do Senhor é o princípio do conhecimento; os loucos desprezam a sabedoria e a instrução." },
            ],
          },
          {
            id: "pv-3", name: "Confiança no Senhor", number: 3,
            verses: [
              { number: 5, text: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento." },
              { number: 6, text: "Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas." },
              { number: 9, text: "Honra ao Senhor com os teus bens, e com a primeira parte de todos os teus frutos." },
              { number: 13, text: "Bem-aventurado o homem que acha sabedoria, e o homem que adquire conhecimento." },
              { number: 27, text: "Não deixes de fazer o bem a quem ele é devido, estando na tua mão o poder de fazê-lo." },
            ],
          },
          {
            id: "pv-4", name: "O Caminho do Justo", number: 4,
            verses: [
              { number: 7, text: "A sabedoria é a coisa principal; adquire a sabedoria; e com tudo o que possuis adquire o entendimento." },
              { number: 18, text: "Mas a vereda dos justos é como a luz da aurora, que vai brilhando mais e mais até ser dia perfeito." },
              { number: 23, text: "Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida." },
            ],
          },
          {
            id: "pv-31", name: "A Mulher Virtuosa", number: 31,
            verses: [
              { number: 8, text: "Abre a tua boca a favor do mudo, a favor do direito de todos os que se acham em desolação." },
              { number: 9, text: "Abre a tua boca; julga retamente; e faze justiça aos pobres e aos necessitados." },
              { number: 10, text: "Mulher virtuosa quem a achará? O seu valor muito excede ao de rubis." },
              { number: 30, text: "Enganosa é a beleza e vã a formosura, mas a mulher que teme ao Senhor, essa sim será louvada." },
            ],
          },
        ],
      },
      {
        id: "efesios",
        name: "Efésios",
        description: "A igreja como corpo de Cristo",
        chapters: [
          {
            id: "ef-2", name: "Salvos pela Graça", number: 2,
            commentary: "Paulo explica a salvação como dom gratuito, não como mérito humano.",
            verses: [
              { number: 4, text: "Mas Deus, que é riquíssimo em misericórdia, pelo seu muito amor com que nos amou." },
              { number: 8, text: "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus." },
              { number: 9, text: "Não vem das obras, para que ninguém se glorie." },
              { number: 10, text: "Porque somos feitura sua, criados em Cristo Jesus para as boas obras." },
            ],
          },
          {
            id: "ef-6", name: "A Armadura de Deus", number: 6,
            verses: [
              { number: 10, text: "No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder." },
              { number: 11, text: "Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo." },
              { number: 13, text: "Portanto, tomai toda a armadura de Deus, para que possais resistir no dia mau." },
              { number: 14, text: "Estai, pois, firmes, tendo cingidos os vossos lombos com a verdade." },
              { number: 16, text: "Tomando sobretudo o escudo da fé, com o qual podereis apagar todos os dardos inflamados do maligno." },
              { number: 17, text: "Tomai também o capacete da salvação, e a espada do Espírito, que é a palavra de Deus." },
              { number: 18, text: "Orando em todo o tempo com toda a oração e súplica no Espírito." },
            ],
          },
        ],
      },
      {
        id: "filipenses",
        name: "Filipenses",
        description: "A alegria em Cristo mesmo nas tribulações",
        chapters: [
          {
            id: "fp-4", name: "Alegria e Paz", number: 4,
            verses: [
              { number: 4, text: "Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos." },
              { number: 6, text: "Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração." },
              { number: 7, text: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus." },
              { number: 8, text: "Quanto ao mais, irmãos, tudo o que é verdadeiro, honesto, justo, puro, amável, de boa fama — nisso pensai." },
              { number: 11, text: "Aprendi a contentar-me com o que tenho." },
              { number: 13, text: "Posso todas as coisas naquele que me fortalece." },
              { number: 19, text: "O meu Deus suprirá todas as vossas necessidades, segundo a sua glória em Cristo Jesus." },
            ],
          },
        ],
      },
      {
        id: "hebreus",
        name: "Hebreus",
        description: "A superioridade de Cristo e a fé como fundamento",
        chapters: [
          {
            id: "hb-11", name: "Os Heróis da Fé", number: 11,
            commentary: "O grande capítulo da fé, listando exemplos de homens e mulheres que viveram pela fé.",
            verses: [
              { number: 1, text: "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem." },
              { number: 3, text: "Pela fé entendemos que os mundos pela palavra de Deus foram criados." },
              { number: 6, text: "Ora, sem fé é impossível agradar-lhe; porque é necessário que aquele que se aproxima de Deus creia que ele existe, e que é galardoador dos que o buscam." },
              { number: 7, text: "Pela fé Noé, divinamente avisado das coisas que se não viam, temeu e construiu a arca para salvação da sua família." },
              { number: 8, text: "Pela fé Abraão, sendo chamado, obedeceu, indo para um lugar que havia de receber por herança." },
            ],
          },
          {
            id: "hb-12", name: "A Corrida da Fé", number: 12,
            verses: [
              { number: 1, text: "Portanto nós também, pois que estamos rodeados de uma tão grande nuvem de testemunhas, deixemos todo o embaraço, e corramos com paciência a carreira que nos está proposta." },
              { number: 2, text: "Olhando para Jesus, autor e consumador da fé, o qual, pelo gozo que lhe estava proposto, suportou a cruz, desprezando a afronta." },
            ],
          },
        ],
      },
      {
        id: "tiago",
        name: "Tiago",
        description: "Fé e obras na vida prática",
        chapters: [
          {
            id: "tg-1", name: "Provações e Tentações", number: 1,
            verses: [
              { number: 2, text: "Meus irmãos, tende grande gozo quando cairdes em várias tentações." },
              { number: 3, text: "Sabendo que a prova da vossa fé produz a paciência." },
              { number: 5, text: "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente." },
              { number: 19, text: "Todo o homem seja pronto para ouvir, tardio para falar, tardio para se irar." },
              { number: 22, text: "E sede cumpridores da palavra, e não somente ouvintes." },
            ],
          },
          {
            id: "tg-2", name: "Fé e Obras", number: 2,
            commentary: "Tiago ensina que a fé verdadeira se manifesta em ações concretas.",
            verses: [
              { number: 14, text: "Meus irmãos, que aproveita se alguém disser que tem fé, e não tiver obras?" },
              { number: 17, text: "Assim também a fé, se não tiver as obras, é morta em si mesma." },
              { number: 26, text: "Porque, assim como o corpo sem o espírito está morto, assim também a fé sem obras é morta." },
            ],
          },
        ],
      },
      {
        id: "apocalipse",
        name: "Apocalipse",
        description: "A revelação de Jesus Cristo sobre o fim dos tempos",
        chapters: [
          {
            id: "ap-1", name: "A Visão do Filho do Homem", number: 1,
            verses: [
              { number: 8, text: "Eu sou o Alfa e o Ômega, o princípio e o fim, diz o Senhor, que é, que era, e que há de vir, o Todo-Poderoso." },
              { number: 17, text: "Não temas; eu sou o primeiro e o último." },
              { number: 18, text: "E o que vive; fui morto, mas eis aqui estou vivo para todo o sempre. E tenho as chaves da morte e do inferno." },
            ],
          },
          {
            id: "ap-21", name: "Novo Céu e Nova Terra", number: 21,
            commentary: "A visão final de restauração e esperança eterna.",
            verses: [
              { number: 1, text: "E vi um novo céu, e uma nova terra. Porque já o primeiro céu e a primeira terra passaram." },
              { number: 3, text: "Eis aqui o tabernáculo de Deus com os homens, pois com eles habitará, e eles serão o seu povo." },
              { number: 4, text: "E Deus limpará de seus olhos toda a lágrima; e não haverá mais morte, nem pranto, nem clamor, nem dor; porque já as primeiras coisas são passadas." },
              { number: 5, text: "E o que estava assentado sobre o trono disse: 'Eis que faço novas todas as coisas.'" },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Justificação pela fé", definition: "Doutrina central protestante: salvação pela fé em Cristo, não por obras." },
      { term: "Sola Scriptura", definition: "Princípio de que a Bíblia é a única autoridade suprema em matéria de fé." },
      { term: "Sola Gratia", definition: "Salvação somente pela graça de Deus, sem mérito humano." },
      { term: "Sola Fide", definition: "Salvação somente pela fé em Jesus Cristo." },
      { term: "Solus Christus", definition: "Cristo é o único mediador entre Deus e os homens." },
      { term: "Arrebatamento", definition: "Crença no encontro dos fiéis com Cristo nos ares antes da tribulação." },
      { term: "Batismo no Espírito Santo", definition: "Experiência de revestimento de poder pelo Espírito, com dons espirituais." },
      { term: "Dízimo", definition: "Contribuição de 10% da renda para a obra de Deus, baseado em Malaquias 3:10." },
    ],
  },

  // ═══════════════════════════════════════════
  // ISLÂMICO
  // ═══════════════════════════════════════════
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
              { number: 2, text: "Este é o Livro que não há dúvida. Nele há orientação para os que temem a Deus." },
              { number: 3, text: "Aqueles que creem no oculto, cumprem a oração, e daquilo que lhes concedemos repartem." },
              { number: 152, text: "Lembrai-vos de Mim, que Eu Me lembrarei de vós. E agradecei-Me e não Me negueis." },
              { number: 155, text: "Certamente vos provaremos com algo de medo, e fome, e perda de bens, e vidas, e frutos. Mas anuncia boas novas aos perseverantes." },
              { number: 156, text: "Os quais, quando uma desgraça os atinge, dizem: 'Somos de Deus e a Ele retornaremos.'" },
              { number: 186, text: "Quando Meus servos te perguntarem sobre Mim, dize-lhes que estou perto. Respondo à súplica de quem Me suplica." },
              { number: 255, text: "Deus! Não há divindade além Dele, o Vivente, o Sustentador. Não O tomam sonolência nem sono. A Ele pertence tudo o que há nos céus e na terra." },
              { number: 256, text: "Não há compulsão na religião. A verdade se distinguiu do erro." },
              { number: 286, text: "Deus não impõe a nenhuma alma uma carga superior às suas forças." },
            ],
          },
          {
            id: "ali-imran", name: "Ali 'Imran (A Família de Imran) — Trechos", number: 3,
            verses: [
              { number: 26, text: "Dize: 'Ó Deus, Soberano da soberania! Tu concedes a soberania a quem queres e retiras a soberania de quem queres.'" },
              { number: 103, text: "E apegai-vos todos ao vínculo de Deus e não vos separeis." },
              { number: 139, text: "E não vos desanimeis, nem vos entristeçais, pois sois superiores se fordes verdadeiros crentes." },
              { number: 185, text: "Toda alma provará a morte. E somente no Dia da Ressurreição recebereis vossa retribuição plena." },
            ],
          },
          {
            id: "an-nisa", name: "An-Nisa (As Mulheres) — Trechos", number: 4,
            verses: [
              { number: 1, text: "Ó humanidade! Temei a vosso Senhor, que vos criou de uma só alma, e dela criou sua companheira, e de ambos propagou muitos homens e mulheres." },
              { number: 36, text: "Adorai a Deus e nada Lhe associeis. Tratai com bondade os pais, os parentes, os órfãos, os pobres, o vizinho próximo, o vizinho distante, o companheiro ao lado, o viajante e os que possuem." },
              { number: 135, text: "Ó fiéis! Sede firmes em observar a justiça, testemunhando por Deus, ainda que seja contra vós mesmos, ou contra vossos pais e parentes." },
            ],
          },
          {
            id: "yusuf", name: "Yusuf (José)", number: 12,
            commentary: "A história do profeta José (Yusuf), considerada a mais bela narrativa do Alcorão.",
            verses: [
              { number: 3, text: "Nós te narramos a melhor das narrativas, revelando-te este Alcorão." },
              { number: 18, text: "E (Jacó disse:) 'Paciência formosa! E Deus é Aquele cuja ajuda se implora contra o que descreveis.'" },
              { number: 86, text: "(Jacó) disse: 'Eu somente exponho minha angústia e minha tristeza a Deus. E sei de Deus o que vós não sabeis.'" },
              { number: 87, text: "'Não desespereis da misericórdia de Deus. Pois ninguém desespera da misericórdia de Deus, exceto o povo incrédulo.'" },
            ],
          },
          {
            id: "al-kahf", name: "Al-Kahf (A Caverna) — Trechos", number: 18,
            commentary: "Surata recomendada para leitura às sextas-feiras, contém parábolas sobre fé e humildade.",
            verses: [
              { number: 10, text: "Os jovens se refugiaram na caverna e disseram: 'Senhor nosso, concede-nos misericórdia e facilita-nos retidão.'" },
              { number: 46, text: "A riqueza e os filhos são adornos da vida terrena. Mas as boas ações que perduram são melhores em recompensa e esperança junto ao teu Senhor." },
              { number: 109, text: "Dize: 'Se o mar fosse tinta para escrever as palavras de meu Senhor, o mar se esgotaria antes de se esgotarem as palavras de meu Senhor, mesmo que trouxéssemos outro tanto.'" },
            ],
          },
          {
            id: "yasin", name: "Ya-Sin — Trechos", number: 36,
            commentary: "Conhecida como 'o coração do Alcorão', aborda a ressurreição e os sinais de Deus na criação.",
            verses: [
              { number: 1, text: "Ya-Sin." },
              { number: 2, text: "Pelo Alcorão sábio." },
              { number: 3, text: "Tu (Muhammad) és, certamente, um dos mensageiros." },
              { number: 58, text: "'Paz!' — é a saudação do Senhor Misericordioso." },
              { number: 82, text: "Quando Ele deseja uma coisa, Seu comando é: 'Sê!' — e ela é." },
            ],
          },
          {
            id: "ar-rahman", name: "Ar-Rahman (O Misericordioso)", number: 55,
            commentary: "Surata que celebra as maravilhas da criação e a misericórdia divina.",
            verses: [
              { number: 1, text: "O Misericordioso." },
              { number: 2, text: "Ensinou o Alcorão." },
              { number: 3, text: "Criou o ser humano." },
              { number: 4, text: "Ensinou-lhe a elocução." },
              { number: 13, text: "Qual, pois, dos benefícios do vosso Senhor negareis?" },
              { number: 26, text: "Tudo o que existe sobre a terra é perecível." },
              { number: 27, text: "Porém, subsistirá a Face de teu Senhor, plena de Majestade e Honra." },
            ],
          },
          {
            id: "al-mulk", name: "Al-Mulk (A Soberania)", number: 67,
            verses: [
              { number: 1, text: "Bendito Aquele em Cuja mão está a soberania. Ele é Onipotente." },
              { number: 2, text: "Aquele que criou a morte e a vida para provar qual de vós é melhor em obras. Ele é o Poderoso, o Indulgente." },
              { number: 3, text: "Aquele que criou sete céus em camadas. Não verás imperfeição na criação do Misericordioso." },
            ],
          },
          {
            id: "al-ikhlas", name: "Al-Ikhlas (A Sinceridade)", number: 112,
            commentary: "Surata que sintetiza a unicidade de Deus (Tawhid), equivalente a um terço do Alcorão em significado.",
            verses: [
              { number: 1, text: "Dize: 'Ele é Deus, o Único.'" },
              { number: 2, text: "Deus, o Eterno Refúgio." },
              { number: 3, text: "Não gerou nem foi gerado." },
              { number: 4, text: "E não há ninguém igual a Ele." },
            ],
          },
          {
            id: "al-falaq", name: "Al-Falaq (A Alvorada)", number: 113,
            verses: [
              { number: 1, text: "Dize: 'Refugio-me no Senhor da alvorada.'" },
              { number: 2, text: "'Do mal daquilo que criou.'" },
              { number: 3, text: "'E do mal da escuridão quando se alastra.'" },
              { number: 4, text: "'E do mal das que sopram nos nós.'" },
              { number: 5, text: "'E do mal do invejoso quando inveja.'" },
            ],
          },
          {
            id: "an-nas", name: "An-Nas (Os Humanos)", number: 114,
            verses: [
              { number: 1, text: "Dize: 'Refugio-me no Senhor dos humanos.'" },
              { number: 2, text: "'O Soberano dos humanos.'" },
              { number: 3, text: "'O Deus dos humanos.'" },
              { number: 4, text: "'Do mal do sussurrador furtivo.'" },
              { number: 5, text: "'Que sussurra nos corações dos humanos.'" },
              { number: 6, text: "'De entre os gênios e os humanos.'" },
            ],
          },
        ],
      },
      {
        id: "hadith",
        name: "Hadith — Ditos do Profeta (ﷺ)",
        description: "Palavras e ensinamentos do Profeta Muhammad transmitidos pela tradição",
        chapters: [
          {
            id: "hd-1", name: "Sobre a Fé e o Caráter", number: 1,
            commentary: "Os hadith são a segunda fonte da lei islâmica, complementando o Alcorão.",
            verses: [
              { number: 1, text: "As ações são julgadas pelas intenções, e cada pessoa receberá de acordo com sua intenção. (Bukhari e Muslim)" },
              { number: 2, text: "Nenhum de vós crê verdadeiramente até que deseje para seu irmão o que deseja para si mesmo. (Bukhari e Muslim)" },
              { number: 3, text: "Quem crê em Deus e no Último Dia, que fale o bem ou que se cale. (Bukhari e Muslim)" },
              { number: 4, text: "O forte não é aquele que vence os outros pela força, mas aquele que controla a si mesmo num momento de raiva. (Bukhari)" },
              { number: 5, text: "Deus não vos julga pela vossa aparência ou riqueza, mas sim pelos vossos corações e ações. (Muslim)" },
              { number: 6, text: "Sorriam para as pessoas — isso é caridade. (Tirmidhi)" },
              { number: 7, text: "O melhor dos homens é aquele que mais beneficia os outros. (Daraqutni)" },
            ],
          },
          {
            id: "hd-2", name: "Sobre a Misericórdia", number: 2,
            verses: [
              { number: 1, text: "Quem não tem misericórdia não receberá misericórdia. (Bukhari e Muslim)" },
              { number: 2, text: "Os misericordiosos serão agraciados pelo Misericordioso. Tende misericórdia com os que estão na terra, e Aquele que está nos céus terá misericórdia de vós. (Abu Dawud e Tirmidhi)" },
              { number: 3, text: "Deus dividiu a misericórdia em cem partes. Reteve noventa e nove junto a Si e enviou uma parte à terra. Desta parte vem toda a compaixão que as criaturas mostram umas às outras. (Bukhari e Muslim)" },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Tawhid", definition: "Unicidade absoluta de Deus — princípio fundamental do Islã." },
      { term: "Salat", definition: "As cinco orações diárias obrigatórias." },
      { term: "Jihad", definition: "Esforço interior para se tornar uma pessoa melhor; também defesa da justiça." },
      { term: "Zakat", definition: "Esmola obrigatória — purificação da riqueza em benefício dos necessitados." },
      { term: "Hajj", definition: "Peregrinação a Meca, obrigatória pelo menos uma vez na vida." },
      { term: "Ramadã", definition: "Mês sagrado de jejum, oração e reflexão." },
      { term: "Ummah", definition: "A comunidade global de muçulmanos, unidos pela fé." },
      { term: "Shahada", definition: "Declaração de fé: 'Não há divindade senão Deus e Muhammad é Seu mensageiro.'" },
      { term: "Sunnah", definition: "A prática e tradição do Profeta Muhammad, modelo de conduta." },
    ],
  },

  // ═══════════════════════════════════════════
  // JUDAÍSMO
  // ═══════════════════════════════════════════
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
              { number: 3, text: "E Deus disse: 'Haja luz!' E houve luz." },
              { number: 26, text: "E Deus disse: 'Façamos o ser humano à Nossa imagem, à Nossa semelhança.'" },
              { number: 27, text: "E Deus criou o ser humano à Sua imagem; à imagem de Deus o criou; macho e fêmea os criou." },
              { number: 31, text: "E Deus viu tudo o que havia feito, e eis que era muito bom." },
            ],
          },
          {
            id: "ber-12", name: "O Chamado de Abrão", number: 12,
            verses: [
              { number: 1, text: "Lech Lechá — Vai-te da tua terra, da tua parentela e da casa de teu pai, para a terra que Eu te mostrarei." },
              { number: 2, text: "Far-te-ei uma grande nação, e te abençoarei, e engrandecerei o teu nome." },
              { number: 3, text: "Abençoarei os que te abençoarem. E em ti serão abençoadas todas as famílias da terra." },
            ],
          },
          {
            id: "ber-18", name: "A Hospitalidade de Abraão", number: 18,
            commentary: "Abraão acolhe três visitantes, um modelo de hospitalidade (hachnasat orchim) na tradição judaica.",
            verses: [
              { number: 1, text: "E o Senhor apareceu a ele nos carvalhos de Mamre, e ele estava sentado à entrada da tenda no calor do dia." },
              { number: 2, text: "E levantou os olhos e viu três homens de pé diante dele. E correu para recebê-los." },
              { number: 3, text: "E disse: 'Meu Senhor, se achei graça aos Teus olhos, não passes do Teu servo.'" },
              { number: 25, text: "Não fará justiça o Juiz de toda a terra?" },
            ],
          },
        ],
      },
      {
        id: "tora-shemot",
        name: "Torá — Shemot (Êxodo)",
        description: "A libertação do Egito e a aliança no Sinai",
        chapters: [
          {
            id: "sh-3", name: "A Sarça Ardente", number: 3,
            commentary: "HaShem se revela a Moisés e revela Seu nome sagrado.",
            verses: [
              { number: 5, text: "'Não te aproximes daqui; tira as sandálias dos pés, pois o lugar onde estás é terra sagrada.'" },
              { number: 14, text: "E Deus disse a Moisés: 'Ehyeh Asher Ehyeh' — 'Eu Sou Aquele que Sou.'" },
            ],
          },
          {
            id: "sh-19", name: "A Aliança no Sinai", number: 19,
            verses: [
              { number: 5, text: "'E agora, se ouvirdes a Minha voz e guardardes a Minha aliança, sereis para Mim um tesouro especial dentre todos os povos.'" },
              { number: 6, text: "'E vós sereis para Mim um reino de sacerdotes e uma nação santa.'" },
            ],
          },
          {
            id: "sh-20", name: "Os Dez Mandamentos (Aseret HaDibrot)", number: 20,
            commentary: "As Dez Declarações — fundamento ético da aliança entre Deus e Israel.",
            verses: [
              { number: 2, text: "Eu sou o Senhor teu Deus, que te tirei da terra do Egito, da casa da servidão." },
              { number: 3, text: "Não terás outros deuses diante de Mim." },
              { number: 7, text: "Não tomarás o nome do Senhor teu Deus em vão." },
              { number: 8, text: "Lembra-te do dia de Shabat, para santificá-lo." },
              { number: 12, text: "Honra a teu pai e a tua mãe." },
              { number: 13, text: "Não matarás. Não adulterarás. Não furtarás. Não darás falso testemunho." },
            ],
          },
        ],
      },
      {
        id: "tora-devarim",
        name: "Torá — Devarim (Deuteronômio)",
        description: "Os discursos finais de Moisés e a renovação da aliança",
        chapters: [
          {
            id: "dv-6", name: "Shemá Israel", number: 6,
            commentary: "O Shemá é a declaração central da fé judaica, recitada duas vezes ao dia.",
            verses: [
              { number: 4, text: "Shemá Israel, Adonai Eloheinu, Adonai Echad — Ouve, ó Israel: o Senhor nosso Deus, o Senhor é Um." },
              { number: 5, text: "E amarás o Senhor teu Deus de todo o teu coração, e de toda a tua alma, e de toda a tua força." },
              { number: 6, text: "E estas palavras que hoje te ordeno estarão sobre o teu coração." },
              { number: 7, text: "E as ensinarás a teus filhos, e falarás delas quando estiveres sentado em tua casa, e quando andares pelo caminho, e ao deitar e ao levantar." },
            ],
          },
          {
            id: "dv-30", name: "Escolha a Vida", number: 30,
            verses: [
              { number: 14, text: "Pois esta mitzvá que te ordeno hoje não está longe de ti, nem inatingível." },
              { number: 19, text: "Os céus e a terra tomo hoje por testemunhas contra ti: a vida e a morte te propus, a bênção e a maldição; escolhe, pois, a vida, para que vivas tu e a tua descendência." },
              { number: 20, text: "Amando ao Senhor teu Deus, dando ouvidos à Sua voz e apegando-te a Ele; pois Ele é a tua vida e a tua longevidade." },
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
              { number: 2, text: "Antes tem o seu prazer na Torá do Senhor, e na Sua Torá medita de dia e de noite." },
              { number: 3, text: "Ele é como árvore plantada junto a ribeiros de águas, que dá o seu fruto na estação própria." },
            ],
          },
          {
            id: "teh-23", name: "O Bom Pastor", number: 23,
            verses: [
              { number: 1, text: "O Senhor é o meu pastor, nada me faltará." },
              { number: 4, text: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque Tu estás comigo." },
              { number: 6, text: "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida." },
            ],
          },
          {
            id: "teh-27", name: "O Senhor é Minha Luz", number: 27,
            verses: [
              { number: 1, text: "O Senhor é a minha luz e a minha salvação; de quem terei medo?" },
              { number: 4, text: "Uma coisa pedi ao Senhor, e é o que procuro: que eu habite na casa do Senhor todos os dias da minha vida." },
              { number: 14, text: "Espera no Senhor, anima-te, e Ele fortalecerá o teu coração; espera, pois, no Senhor." },
            ],
          },
          {
            id: "teh-150", name: "Halleluyah Final", number: 150,
            verses: [
              { number: 1, text: "Halleluyah! Louvai a Deus no Seu santuário; louvai-O no firmamento do Seu poder." },
              { number: 6, text: "Tudo o que tem fôlego louve ao Senhor! Halleluyah!" },
            ],
          },
        ],
      },
      {
        id: "mishlei",
        name: "Mishlei (Provérbios)",
        description: "Sabedoria prática do Rei Salomão",
        chapters: [
          {
            id: "msh-1", name: "O Temor de HaShem", number: 1,
            verses: [
              { number: 7, text: "O temor de HaShem é o princípio do conhecimento; os tolos desprezam a sabedoria e a instrução." },
            ],
          },
          {
            id: "msh-3", name: "Sabedoria e Confiança", number: 3,
            verses: [
              { number: 5, text: "Confia em HaShem de todo o teu coração e não te apoies no teu próprio entendimento." },
              { number: 6, text: "Em todos os teus caminhos, conhece-O, e Ele endireitará as tuas veredas." },
              { number: 17, text: "Os seus caminhos são caminhos de delícias, e todas as suas veredas são paz." },
              { number: 18, text: "Árvore de vida é ela para os que a seguram, e bem-aventurados são os que a retêm." },
            ],
          },
        ],
      },
      {
        id: "pirkei-avot",
        name: "Pirkei Avot (Ética dos Pais)",
        description: "Tratado da Mishná sobre ética e conduta",
        chapters: [
          {
            id: "pa-1", name: "Transmissão da Tradição", number: 1,
            commentary: "Pirkei Avot traça a cadeia de transmissão da Torá e reúne máximas éticas dos sábios.",
            verses: [
              { number: 1, text: "Moisés recebeu a Torá no Sinai e a transmitiu a Josué, e Josué aos Anciãos, e os Anciãos aos Profetas." },
              { number: 2, text: "Shimon, o Justo, dizia: 'O mundo se sustenta em três coisas: na Torá, no serviço divino e em atos de bondade.'" },
              { number: 14, text: "Hillel dizia: 'Se eu não for por mim, quem será por mim? E se eu for só por mim, o que sou? E se não agora, quando?'" },
            ],
          },
          {
            id: "pa-2", name: "Ensinamentos dos Sábios", number: 2,
            verses: [
              { number: 4, text: "Hillel dizia: 'Não te separes da comunidade. Não confies em ti mesmo até o dia da tua morte. Não julgues o teu próximo até que estejas no lugar dele.'" },
              { number: 5, text: "Hillel também dizia: 'Não digas algo que não pode ser compreendido, pois no final será compreendido.'" },
              { number: 16, text: "Rabi Tarfon dizia: 'Não é tua obrigação completar o trabalho, mas tampouco és livre para desistir dele.'" },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Torá", definition: "Os cinco livros de Moisés, fundamento da lei e identidade judaica." },
      { term: "Shabbat", definition: "O dia de descanso sagrado, do pôr do sol de sexta ao de sábado." },
      { term: "Teshuvá", definition: "Retorno, arrependimento — processo de transformação interior." },
      { term: "Mitzvá", definition: "Mandamento divino; também boa ação. São 613 mitzvot na Torá." },
      { term: "HaShem", definition: "Literalmente 'O Nome' — forma respeitosa de se referir a Deus." },
      { term: "Halakhá", definition: "O caminho — conjunto de leis e práticas que guiam a vida judaica." },
      { term: "Talmud", definition: "Compilação de discussões rabínicas sobre lei, ética, história e filosofia." },
      { term: "Tikun Olam", definition: "Reparo do mundo — responsabilidade de melhorar a sociedade." },
    ],
  },

  // ═══════════════════════════════════════════
  // ESPÍRITA
  // ═══════════════════════════════════════════
  {
    traditionId: "espirita",
    works: [
      {
        id: "livro-espiritos",
        name: "O Livro dos Espíritos",
        description: "Perguntas e respostas sobre Deus, vida e evolução espiritual",
        chapters: [
          {
            id: "le-1", name: "Das Causas Primárias", number: 1,
            commentary: "As primeiras perguntas tratam da existência de Deus e da natureza do universo.",
            verses: [
              { number: 1, text: "Pergunta: Que é Deus? — Resposta: Deus é a inteligência suprema, causa primária de todas as coisas." },
              { number: 2, text: "Pergunta: Que se deve entender por infinito? — Resposta: O que não tem começo nem fim: o desconhecido." },
              { number: 4, text: "Pergunta: Onde se pode encontrar a prova da existência de Deus? — Resposta: Não há efeito sem causa. Buscai a causa de tudo o que não é obra do homem." },
              { number: 10, text: "Pergunta: Pode o homem compreender a natureza íntima de Deus? — Resposta: Não; falta-lhe para isso o sentido." },
            ],
          },
          {
            id: "le-2", name: "Dos Espíritos", number: 2,
            verses: [
              { number: 76, text: "Pergunta: Que definição se pode dar dos Espíritos? — Resposta: Os Espíritos são os seres inteligentes da criação." },
              { number: 82, text: "Pergunta: É exato dizer que os Espíritos são imateriais? — Resposta: Como se pode definir uma coisa, quando faltam termos de comparação? O Espírito não é matéria, mas não é imaterial no sentido absoluto." },
              { number: 100, text: "Pergunta: Os Espíritos progridem todos? — Resposta: Sim, todos chegam ao grau supremo. É a vontade de Deus." },
            ],
          },
          {
            id: "le-3", name: "Das Leis Morais", number: 3,
            verses: [
              { number: 614, text: "Pergunta: Que é a lei natural? — Resposta: A lei de Deus. É a única verdadeira para a felicidade do homem." },
              { number: 625, text: "Pergunta: Qual o tipo mais perfeito que Deus ofereceu ao homem? — Resposta: Vede Jesus." },
              { number: 886, text: "Pergunta: Qual é a verdadeira caridade? — Resposta: Benevolência para com todos, indulgência para as imperfeições dos outros, perdão das ofensas." },
            ],
          },
          {
            id: "le-4", name: "Esperanças e Consolações", number: 4,
            verses: [
              { number: 919, text: "Pergunta: Qual o meio prático mais eficaz de melhorar-se nesta vida? — Resposta: Praticar a máxima: 'Fazei aos outros o que quereríeis que vos fizessem.'" },
              { number: 920, text: "Deus gravou na consciência do homem a regra de toda verdadeira justiça: o desejo de que cada um seja tratado conforme deseja ser tratado." },
            ],
          },
        ],
      },
      {
        id: "evangelho-espirito",
        name: "O Evangelho Segundo o Espiritismo",
        description: "Obra fundamental de Allan Kardec sobre a moral cristã à luz espírita",
        chapters: [
          {
            id: "ese-1", name: "Não vim destruir a Lei", number: 1,
            verses: [
              { number: 1, text: "Não penseis que vim destruir a lei ou os profetas; não vim destruir, mas cumprir." },
              { number: 2, text: "A lei mosaica divide-se em: lei divina imutável e lei transitória de Moisés. Cristo veio cumprir a primeira." },
            ],
          },
          {
            id: "ese-5", name: "Bem-aventurados os Aflitos", number: 5,
            commentary: "Kardec explica o sofrimento como instrumento de evolução espiritual.",
            verses: [
              { number: 1, text: "Bem-aventurados os que choram, porque serão consolados." },
              { number: 2, text: "O sofrimento na Terra é temporário e serve ao progresso do espírito." },
              { number: 3, text: "A dor purifica e ensina; através dela, a alma amadurece." },
              { number: 4, text: "Não há castigo eterno — há aprendizado contínuo através das existências." },
              { number: 5, text: "As causas do sofrimento são, na maioria, consequências das próprias faltas do espírito, nesta ou em vidas anteriores." },
            ],
          },
          {
            id: "ese-6", name: "O Cristo Consolador", number: 6,
            verses: [
              { number: 1, text: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei." },
              { number: 2, text: "O jugo de Cristo é o da caridade e da humildade; o fardo é o do dever cumprido." },
              { number: 3, text: "Coragem, pois! Cada sofrimento é uma pedra do edifício da vossa felicidade futura." },
            ],
          },
          {
            id: "ese-11", name: "Amar o Próximo", number: 11,
            verses: [
              { number: 1, text: "Fora da caridade não há salvação." },
              { number: 2, text: "Amai-vos uns aos outros como eu vos amei — eis toda a lei divina." },
              { number: 3, text: "A caridade verdadeira é benevolência para com todos, indulgência para as imperfeições dos outros." },
              { number: 4, text: "A caridade não se limita à esmola; compreende todas as relações com os semelhantes." },
            ],
          },
          {
            id: "ese-15", name: "Fora da Caridade Não Há Salvação", number: 15,
            verses: [
              { number: 1, text: "O que salva não é a crença, mas a prática. Não basta crer, é preciso praticar." },
              { number: 2, text: "A fé sem obras é fé morta." },
              { number: 3, text: "Fora da caridade não há salvação — significa que a prática do bem é condição essencial para a felicidade futura." },
            ],
          },
          {
            id: "ese-17", name: "Sede Perfeitos", number: 17,
            verses: [
              { number: 1, text: "Sede, pois, perfeitos, como é perfeito o vosso Pai que está nos céus." },
              { number: 2, text: "A perfeição a que Jesus se refere é a perfeição moral. Ela é o objetivo de todo espírito." },
              { number: 3, text: "O conhecimento da doutrina espírita é meio; o fim é a transformação moral." },
            ],
          },
        ],
      },
      {
        id: "livro-mediuns",
        name: "O Livro dos Médiuns",
        description: "Guia prático sobre mediunidade e comunicação espiritual",
        chapters: [
          {
            id: "lm-1", name: "Noções Preliminares", number: 1,
            verses: [
              { number: 1, text: "A mediunidade é uma faculdade inerente ao homem, que permite a comunicação com os Espíritos." },
              { number: 2, text: "Médium é toda pessoa que sente a influência dos Espíritos, em grau maior ou menor." },
              { number: 3, text: "A mediunidade é um dom sagrado que deve ser exercido com responsabilidade, humildade e caridade." },
            ],
          },
          {
            id: "lm-2", name: "Dos Perigos da Mediunidade", number: 2,
            verses: [
              { number: 1, text: "A mediunidade exercida sem preparo moral expõe o médium a influências negativas." },
              { number: 2, text: "O estudo e a prática do bem são os melhores escudos contra os espíritos inferiores." },
              { number: 3, text: "O orgulho e a vaidade são as maiores armadilhas para o médium." },
            ],
          },
        ],
      },
      {
        id: "genese-espirita",
        name: "A Gênese",
        description: "Os milagres e as predições à luz da ciência espírita",
        chapters: [
          {
            id: "ge-1", name: "Caráter da Revelação Espírita", number: 1,
            verses: [
              { number: 1, text: "A revelação espírita tem duplo caráter: divino e científico." },
              { number: 2, text: "É divina porque emana dos Espíritos superiores; é científica porque se baseia na observação e no raciocínio." },
              { number: 3, text: "A fé inabalável é a que pode encarar a razão face a face em todas as épocas da humanidade." },
            ],
          },
        ],
      },
      {
        id: "ceu-inferno",
        name: "O Céu e o Inferno",
        description: "A justiça divina segundo o Espiritismo",
        chapters: [
          {
            id: "ci-1", name: "O Porvir e o Nada", number: 1,
            verses: [
              { number: 1, text: "A doutrina do nada é a negação de toda esperança. O materialismo conduz ao desespero." },
              { number: 2, text: "A certeza da vida futura transforma a perspectiva do sofrimento terrestre." },
              { number: 3, text: "Não há penas eternas. Deus, sendo infinitamente justo e bom, não condena eternamente." },
              { number: 4, text: "O inferno é a consciência atormentada pelo remorso. O céu é a paz da consciência tranquila." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Reencarnação", definition: "Princípio de que o espírito renasce em novos corpos para evoluir." },
      { term: "Perispírito", definition: "Envoltório semimaterial que liga o espírito ao corpo físico." },
      { term: "Lei de Causa e Efeito", definition: "Cada ação gera consequências que retornam ao espírito." },
      { term: "Mediunidade", definition: "Faculdade que permite a comunicação entre encarnados e desencarnados." },
      { term: "Kardecismo", definition: "Doutrina espírita codificada por Allan Kardec no século XIX." },
      { term: "Passe", definition: "Transmissão de energia espiritual por imposição das mãos." },
      { term: "Obsessão", definition: "Influência persistente de um espírito sobre uma pessoa encarnada." },
      { term: "Evangelho no Lar", definition: "Prática de leitura e reflexão espiritual em família." },
    ],
  },

  // ═══════════════════════════════════════════
  // UMBANDA
  // ═══════════════════════════════════════════
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
              { number: 5, text: "A Umbanda não faz o mal — seu lema é a caridade, o amor e a paz." },
            ],
          },
          {
            id: "fund-2", name: "As Sete Linhas", number: 2,
            commentary: "As Sete Linhas representam as principais correntes de trabalho espiritual na Umbanda.",
            verses: [
              { number: 1, text: "Oxalá governa a linha da fé e da paz." },
              { number: 2, text: "Ogum governa a linha da luta e da defesa." },
              { number: 3, text: "Oxóssi governa a linha do conhecimento e da natureza." },
              { number: 4, text: "Xangô governa a linha da justiça e do equilíbrio." },
              { number: 5, text: "Iemanjá governa a linha do amor e da família." },
              { number: 6, text: "Oxum governa a linha da fertilidade e da riqueza." },
              { number: 7, text: "Nanã governa a linha da sabedoria e da ancestralidade." },
            ],
          },
          {
            id: "fund-3", name: "O Terreiro e seus Mistérios", number: 3,
            verses: [
              { number: 1, text: "O terreiro é o templo sagrado onde os Orixás e guias espirituais se manifestam." },
              { number: 2, text: "Na gira, os médiuns incorporam as entidades para trabalhar pela caridade." },
              { number: 3, text: "O congá é o altar onde ficam as imagens, velas e elementos rituais." },
              { number: 4, text: "A firmeza é a preparação energética do terreiro antes dos trabalhos." },
              { number: 5, text: "A defumação limpa as energias negativas e prepara o ambiente para os trabalhos." },
            ],
          },
        ],
      },
      {
        id: "orixas",
        name: "Os Orixás",
        description: "As divindades da natureza e seus ensinamentos",
        chapters: [
          {
            id: "ori-1", name: "Oxalá — O Pai Maior", number: 1,
            commentary: "Oxalá é o Orixá da criação, da paz e da fé. Sincretizado com Jesus Cristo.",
            verses: [
              { number: 1, text: "Oxalá é o senhor da paz e da fé. Sua cor é o branco, símbolo de pureza." },
              { number: 2, text: "Ele ensina que a paz verdadeira começa no coração de cada um." },
              { number: 3, text: "Seu dia é sexta-feira. Sua saudação: Êpa Babá!" },
              { number: 4, text: "Oxalá pede a seus filhos: tenham fé, humildade e respeito a toda forma de vida." },
            ],
          },
          {
            id: "ori-2", name: "Ogum — O Guerreiro", number: 2,
            verses: [
              { number: 1, text: "Ogum é o guerreiro divino, protetor dos caminhos e vencedor das demandas." },
              { number: 2, text: "Ele ensina a coragem diante dos obstáculos e a força para seguir em frente." },
              { number: 3, text: "Seu elemento é o ferro. Sua cor é o vermelho ou azul-escuro." },
              { number: 4, text: "Ogum abre os caminhos. Ogunhê!" },
            ],
          },
          {
            id: "ori-3", name: "Oxóssi — O Caçador", number: 3,
            verses: [
              { number: 1, text: "Oxóssi é o senhor das matas e da fartura. Caçador divino que nunca erra o alvo." },
              { number: 2, text: "Ele ensina a buscar o conhecimento e o sustento com sabedoria." },
              { number: 3, text: "Seu elemento é a floresta. Sua cor é o verde." },
              { number: 4, text: "Oxóssi protege aqueles que buscam o sustento com honestidade. Okê Arô!" },
            ],
          },
          {
            id: "ori-4", name: "Iemanjá — A Rainha do Mar", number: 4,
            verses: [
              { number: 1, text: "Iemanjá é a mãe de todos os Orixás, rainha das águas salgadas." },
              { number: 2, text: "Ela ensina o amor incondicional, a maternidade e a proteção." },
              { number: 3, text: "Seu elemento é o mar. Suas cores são o azul-claro e o branco." },
              { number: 4, text: "Iemanjá acolhe todos os seus filhos em seu manto de amor. Odoyá!" },
            ],
          },
          {
            id: "ori-5", name: "Xangô — O Senhor da Justiça", number: 5,
            verses: [
              { number: 1, text: "Xangô é o Orixá da justiça, dos raios e do fogo." },
              { number: 2, text: "Ele ensina que a justiça deve ser feita com sabedoria e equilíbrio." },
              { number: 3, text: "Seu elemento é o fogo e a pedra. Suas cores são vermelho e branco." },
              { number: 4, text: "Xangô não aceita injustiça. Kaô Kabecilê!" },
            ],
          },
        ],
      },
      {
        id: "entidades",
        name: "As Entidades",
        description: "Os guias espirituais que trabalham nos terreiros",
        chapters: [
          {
            id: "ent-1", name: "Pretos Velhos", number: 1,
            commentary: "Espíritos de ancestrais africanos que trazem sabedoria, cura e consolo.",
            verses: [
              { number: 1, text: "Os Pretos Velhos são espíritos de anciãos sábios que viveram como escravos e aprenderam na dor a virtude da paciência." },
              { number: 2, text: "Eles ensinam pela humildade. Sentam-se no chão, fumam cachimbo e falam com voz mansa." },
              { number: 3, text: "Sua sabedoria vem da experiência e do sofrimento transformado em luz." },
              { number: 4, text: "Adoram Deus acima de tudo e trabalham pela caridade sem distinção de raça, credo ou condição." },
            ],
          },
          {
            id: "ent-2", name: "Caboclos", number: 2,
            verses: [
              { number: 1, text: "Os Caboclos são espíritos de indígenas que trazem a força da natureza e a sabedoria ancestral." },
              { number: 2, text: "Trabalham com ervas, raízes e elementos da floresta para curar e proteger." },
              { number: 3, text: "São guerreiros de luz que defendem os necessitados com bravura e determinação." },
              { number: 4, text: "Ensinam o respeito à natureza e a conexão com a terra." },
            ],
          },
          {
            id: "ent-3", name: "Crianças (Erês)", number: 3,
            verses: [
              { number: 1, text: "Os Erês são espíritos de crianças que trazem a pureza, a alegria e a inocência." },
              { number: 2, text: "Trabalham pela cura emocional, alegrando os corações e aliviando as tristezas." },
              { number: 3, text: "Ensinam que a simplicidade e a alegria são caminhos para Deus." },
              { number: 4, text: "Cosme e Damião são os patronos das crianças na Umbanda." },
            ],
          },
          {
            id: "ent-4", name: "Exus e Pombagiras", number: 4,
            commentary: "Exus e Pombagiras são guardiões espirituais que trabalham na encruzilhada entre o mundo material e o espiritual.",
            verses: [
              { number: 1, text: "Exu não é o diabo. É o guardião dos caminhos, mensageiro entre os homens e os Orixás." },
              { number: 2, text: "Exu trabalha com a lei: quem faz o bem recebe o bem, quem faz o mal recebe o mal." },
              { number: 3, text: "Pombagira é a guardiã feminina, senhora dos caminhos e da justiça." },
              { number: 4, text: "Sem Exu não se faz nada — ele é o princípio do movimento, da comunicação e da transformação." },
              { number: 5, text: "Laroiê, Exu!" },
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
              { number: 3, text: "Eu abro a nossa gira / Com Deus e Nossa Senhora / Fecha o corpo e abre a mente / Que a caridade é agora." },
            ],
          },
          {
            id: "pc-2", name: "Pontos de Pretos Velhos", number: 2,
            verses: [
              { number: 1, text: "Vovó não quer casca de coco no terreiro / Faz tropeçar os Pretos Velhos e os filhos de fé." },
              { number: 2, text: "Pisa devagar, pisa devagar / Quem já sofreu muito não pode mais penar." },
              { number: 3, text: "Preto Velho veio de Aruanda / Veio pra curar, veio pra rezar / Com seu cachimbo e sua guia / Preto Velho vem nos ajudar." },
            ],
          },
          {
            id: "pc-3", name: "Pontos de Caboclos", number: 3,
            verses: [
              { number: 1, text: "Se essa rua fosse minha / Eu mandava ladrilhar / Com pedrinhas de brilhante / Pro meu Caboclo passar." },
              { number: 2, text: "Caboclo na mata tem, oi tem / Na beira do rio também / Caboclo é filho da mata / Protetor de todo o bem." },
            ],
          },
          {
            id: "pc-4", name: "Pontos de Fechamento", number: 4,
            verses: [
              { number: 1, text: "Fecha a nossa gira / Com Deus e Nossa Senhora / Oxalá nos abençoe / Até a próxima aurora." },
              { number: 2, text: "Vamos fechar a nossa gira / Com a bênção de Oxalá / Que os Orixás nos protejam / Até a gira voltar." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Orixá", definition: "Divindades que representam forças da natureza e aspectos da vida." },
      { term: "Terreiro", definition: "Espaço sagrado onde se realizam os rituais da Umbanda." },
      { term: "Preto Velho", definition: "Espíritos de ancestrais africanos que trazem sabedoria e consolo." },
      { term: "Caboclo", definition: "Espíritos de indígenas que trazem força e conhecimento da natureza." },
      { term: "Gira", definition: "Sessão espiritual onde as entidades se manifestam para trabalhar." },
      { term: "Ponto Cantado", definition: "Cântico sagrado que invoca e homenageia as entidades." },
      { term: "Pemba", definition: "Giz sagrado usado para riscar pontos de força e proteção." },
      { term: "Saravá", definition: "Saudação de respeito e louvor às entidades espirituais." },
      { term: "Axé", definition: "Energia vital, força sagrada que permeia tudo na natureza." },
      { term: "Congá", definition: "Altar sagrado do terreiro com imagens e elementos rituais." },
    ],
  },

  // ═══════════════════════════════════════════
  // BUDISMO
  // ═══════════════════════════════════════════
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
              { number: 17, text: "Aquele que faz o mal sofre neste mundo e no próximo. Sofre ao ver o mal que fez." },
              { number: 18, text: "Aquele que faz o bem se alegra neste mundo e no próximo. Alegra-se ao ver o bem que fez." },
            ],
          },
          {
            id: "dh-2", name: "Vigilância", number: 2,
            verses: [
              { number: 21, text: "A vigilância é o caminho para a imortalidade; a negligência é o caminho para a morte." },
              { number: 23, text: "Aqueles que meditam com perseverança, que são firmes em seu esforço, esses sábios alcançam o Nibbana, a suprema libertação." },
              { number: 25, text: "Pelo esforço, pela diligência, pela disciplina e pelo autodomínio, que o sábio construa uma ilha que enchente alguma possa submergir." },
            ],
          },
          {
            id: "dh-3", name: "A Mente", number: 3,
            verses: [
              { number: 33, text: "Assim como um arqueiro endireita a sua flecha, o sábio endireita a mente — instável e difícil de controlar." },
              { number: 35, text: "Difícil de controlar, volúvel — a mente. Mas domá-la é bom. Uma mente domada traz felicidade." },
              { number: 36, text: "Que o sábio vigie a sua mente, que é sutil e difícil de perceber, e que se move por onde quer." },
            ],
          },
          {
            id: "dh-14", name: "O Buda", number: 14,
            verses: [
              { number: 183, text: "Não fazer o mal, cultivar o bem, purificar a mente — este é o ensinamento dos Budas." },
              { number: 184, text: "A paciência é a maior austeridade. O Nibbana é o bem supremo, dizem os Budas." },
              { number: 185, text: "Não ofender, não maltratar, observar a disciplina, ser moderado no comer, viver em reclusão, devotar-se à meditação — este é o ensinamento dos Budas." },
              { number: 190, text: "Aquele que toma refúgio no Buda, no Dharma e no Sangha, vê com sabedoria as Quatro Nobres Verdades." },
            ],
          },
          {
            id: "dh-15", name: "Felicidade", number: 15,
            verses: [
              { number: 197, text: "Vivamos felizes, sem odiar os que nos odeiam. Entre os homens que odeiam, vivamos livres do ódio." },
              { number: 199, text: "Vivamos felizes, nós que nada possuímos. Alimentemo-nos de alegria como os devas radiantes." },
              { number: 200, text: "A vitória gera inimizade; o derrotado vive em sofrimento. Aquele que renunciou tanto à vitória como à derrota vive feliz e em paz." },
              { number: 204, text: "A saúde é o maior ganho. O contentamento é a maior riqueza. A confiança é o melhor parente. O Nibbana é a suprema felicidade." },
            ],
          },
          {
            id: "dh-26", name: "O Brâmane", number: 26,
            verses: [
              { number: 383, text: "Corta o fluxo com esforço. Abandona os prazeres dos sentidos, ó brâmane. Conhecendo a cessação das formações, conhecerás o Incriado." },
              { number: 423, text: "Aquele que conhece suas vidas passadas, que vê o céu e o inferno, que alcançou o fim do nascimento — a esse chamo brâmane." },
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
      {
        id: "sutra-coracao",
        name: "Sutra do Coração",
        description: "O texto central da sabedoria Prajna Paramita",
        chapters: [
          {
            id: "sc-1", name: "O Sutra", number: 1,
            commentary: "O Sutra do Coração é um dos textos mais recitados no budismo Mahayana.",
            verses: [
              { number: 1, text: "Avalokiteshvara, o Bodhisattva da Compaixão, meditando profundamente na Perfeição da Sabedoria, viu que os cinco agregados são vazios de existência inerente." },
              { number: 2, text: "A forma é vazio, o vazio é forma. A forma não difere do vazio, o vazio não difere da forma." },
              { number: 3, text: "Da mesma maneira, sensações, percepções, formações mentais e consciência são vazias." },
              { number: 4, text: "Todos os dharmas são marcados pelo vazio: não surgem nem cessam, não são puros nem impuros, não aumentam nem diminuem." },
              { number: 5, text: "Portanto, no vazio não há forma, não há sensação, percepção, formações mentais ou consciência." },
              { number: 6, text: "Gate, gate, paragate, parasamgate, bodhi svaha! — Ido, ido, ido além, ido totalmente além, iluminação!" },
            ],
          },
        ],
      },
      {
        id: "metta-sutta",
        name: "Metta Sutta (Discurso do Amor Universal)",
        description: "Ensinamento sobre o amor incondicional a todos os seres",
        chapters: [
          {
            id: "ms-1", name: "Amor Universal", number: 1,
            commentary: "O Metta Sutta é recitado diariamente por praticantes Theravada como prática de bondade amorosa.",
            verses: [
              { number: 1, text: "Que todos os seres sejam felizes e estejam em segurança, que seus corações se encham de alegria." },
              { number: 2, text: "Quaisquer seres vivos que existam — fracos ou fortes, altos, grandes ou médios, curtos, pequenos ou volumosos." },
              { number: 3, text: "Vistos ou não vistos, próximos ou distantes, já nascidos ou por nascer — que todos os seres sejam felizes." },
              { number: 4, text: "Que ninguém engane o outro, que ninguém despreze o outro em qualquer situação." },
              { number: 5, text: "Que ninguém, por raiva ou má vontade, deseje mal a outro." },
              { number: 6, text: "Assim como uma mãe protegeria com sua vida seu único filho, assim devemos cultivar um amor sem limites para com todos os seres." },
              { number: 7, text: "Que pensamentos de amor sem limites permeiem o mundo inteiro — acima, abaixo e por toda parte — sem obstrução, sem ódio, sem inimizade." },
            ],
          },
        ],
      },
      {
        id: "caminho-octuplo",
        name: "O Nobre Caminho Óctuplo",
        description: "Os oito passos para a cessação do sofrimento",
        chapters: [
          {
            id: "co-1", name: "Os Oito Passos", number: 1,
            commentary: "O Caminho Óctuplo é a quarta Nobre Verdade e o método prático para a libertação.",
            verses: [
              { number: 1, text: "Visão Correta (Samma Ditthi): Compreender as Quatro Nobres Verdades e a natureza da realidade." },
              { number: 2, text: "Intenção Correta (Samma Sankappa): Cultivar a renúncia, a boa vontade e a não-violência." },
              { number: 3, text: "Fala Correta (Samma Vaca): Abster-se da mentira, da maledicência, da fala grosseira e da fofoca." },
              { number: 4, text: "Ação Correta (Samma Kammanta): Abster-se de matar, roubar e de conduta sexual imprópria." },
              { number: 5, text: "Modo de Vida Correto (Samma Ajiva): Ganhar a vida de forma ética, sem causar dano aos outros." },
              { number: 6, text: "Esforço Correto (Samma Vayama): Cultivar estados mentais saudáveis e abandonar os nocivos." },
              { number: 7, text: "Atenção Correta (Samma Sati): Desenvolver a plena atenção ao corpo, sensações, mente e fenômenos." },
              { number: 8, text: "Concentração Correta (Samma Samadhi): Desenvolver os estados de absorção meditativa (jhanas)." },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Dharma", definition: "Os ensinamentos do Buda; a verdade universal; a lei cósmica." },
      { term: "Nirvana", definition: "Estado de libertação do ciclo de sofrimento e renascimentos." },
      { term: "Sangha", definition: "Comunidade de praticantes do caminho budista." },
      { term: "Samsara", definition: "O ciclo de nascimento, morte e renascimento." },
      { term: "Karma", definition: "Lei de causa e efeito: ações geram consequências." },
      { term: "Bodhisattva", definition: "Ser que busca a iluminação para beneficiar todos os seres." },
      { term: "Sunyata", definition: "Vacuidade — todos os fenômenos são vazios de existência inerente." },
      { term: "Metta", definition: "Amor incondicional, bondade amorosa para com todos os seres." },
      { term: "Vipassana", definition: "Meditação de insight — observação clara da natureza da realidade." },
      { term: "Mandala", definition: "Representação simbólica do universo usada na meditação." },
    ],
  },

  // ═══════════════════════════════════════════
  // HINDUÍSMO
  // ═══════════════════════════════════════════
  {
    traditionId: "hinduismo",
    works: [
      {
        id: "bhagavad-gita",
        name: "Bhagavad Gita",
        description: "O Canto do Senhor — diálogo entre Krishna e Arjuna",
        chapters: [
          {
            id: "bg-1", name: "O Desespero de Arjuna", number: 1,
            commentary: "Arjuna, diante do campo de batalha, é tomado por angústia ao ver parentes e mestres no lado oposto.",
            verses: [
              { number: 28, text: "Arjuna disse: 'Ao ver meus próprios parentes dispostos a lutar, meus membros vacilam, minha boca seca.'" },
              { number: 31, text: "'Não vejo bem algum em matar meus próprios parentes nesta batalha.'" },
              { number: 47, text: "Assim falou Arjuna, e, tomado pela dor, largou seu arco e sentou-se no carro de guerra, com a mente cheia de tristeza." },
            ],
          },
          {
            id: "bg-2", name: "Sankhya Yoga — A Alma Eterna", number: 2,
            commentary: "Krishna ensina Arjuna sobre a natureza eterna da alma e o dever (dharma).",
            verses: [
              { number: 11, text: "O Senhor Abençoado disse: 'Embora fales palavras de sabedoria, lamentas por aqueles que não merecem lamento. Os sábios não lamentam nem pelos vivos nem pelos mortos.'" },
              { number: 13, text: "Assim como a alma incorporada passa, neste corpo, pela infância, juventude e velhice, assim também assume outro corpo após a morte." },
              { number: 20, text: "A alma nunca nasce nem morre. Ela não veio a existir, não vem a existir e não virá a existir. É eterna, perpétua e primordial." },
              { number: 22, text: "Assim como uma pessoa veste roupas novas, descartando as velhas, a alma aceita novos corpos, descartando os antigos." },
              { number: 23, text: "Armas não cortam a alma. O fogo não a queima. Água não a molha. O vento não a seca." },
              { number: 47, text: "Você tem direito à ação, mas nunca aos seus frutos. Que os frutos da ação não sejam seu motivo, nem se apegue à inação." },
              { number: 48, text: "Realize suas ações firmado no Yoga, abandonando o apego e sendo igual no sucesso e no fracasso." },
              { number: 62, text: "Quando um homem pensa nos objetos dos sentidos, surge apego a eles. Do apego nasce o desejo, do desejo nasce a ira." },
              { number: 63, text: "Da ira vem a ilusão, da ilusão a confusão da memória, da confusão da memória a destruição da inteligência, e da destruição da inteligência ele perece." },
            ],
          },
          {
            id: "bg-3", name: "Karma Yoga — O Caminho da Ação", number: 3,
            verses: [
              { number: 19, text: "Portanto, sempre realize suas ações sem apego. Pela ação desapegada, o homem alcança o Supremo." },
              { number: 21, text: "O que quer que uma pessoa ilustre faça, os outros seguem. Qualquer exemplo que ela dê, o mundo segue." },
              { number: 35, text: "É melhor cumprir o próprio dever imperfeitamente do que o dever de outro com perfeição." },
            ],
          },
          {
            id: "bg-4", name: "Jnana Yoga — O Caminho do Conhecimento", number: 4,
            verses: [
              { number: 7, text: "Sempre que o dharma declina e a injustiça prevalece, Eu me manifesto." },
              { number: 8, text: "Para proteger os justos, destruir os malvados e restabelecer o dharma, Eu nasço em toda era." },
              { number: 33, text: "Superior ao sacrifício material é o sacrifício do conhecimento. Toda ação, sem exceção, culmina no conhecimento." },
            ],
          },
          {
            id: "bg-6", name: "Dhyana Yoga — A Meditação", number: 6,
            verses: [
              { number: 5, text: "Eleve-se pelo seu próprio eu; não se degrade. Pois o eu é o único amigo do eu, e o eu é o único inimigo do eu." },
              { number: 6, text: "Para aquele que conquistou o eu pelo eu, o eu é um amigo. Mas para aquele que não o fez, o eu age como um inimigo." },
              { number: 35, text: "Krishna disse: 'Sem dúvida, a mente é inquieta e difícil de controlar. Mas pode ser controlada pela prática e pelo desapego.'" },
            ],
          },
          {
            id: "bg-9", name: "O Conhecimento Supremo", number: 9,
            verses: [
              { number: 22, text: "Àqueles que Me adoram com devoção exclusiva, meditando em Minha forma transcendental, Eu supro o que lhes falta e preservo o que possuem." },
              { number: 26, text: "Se alguém Me oferece com devoção uma folha, uma flor, uma fruta ou água, Eu aceito essa oferenda de coração puro." },
              { number: 29, text: "Eu sou igual para todos os seres. Não tenho favoritos nem inimigos. Mas aqueles que Me adoram com devoção estão em Mim, e Eu estou neles." },
            ],
          },
          {
            id: "bg-11", name: "A Visão da Forma Universal", number: 11,
            verses: [
              { number: 32, text: "Eu sou o tempo, o grande destruidor dos mundos, e vim aqui para destruir todos os homens." },
              { number: 33, text: "Portanto, levante-se e conquiste a glória. Conquiste seus inimigos e desfrute de um reino próspero." },
            ],
          },
          {
            id: "bg-12", name: "Bhakti Yoga — O Caminho da Devoção", number: 12,
            verses: [
              { number: 13, text: "Aquele que não odeia criatura alguma, que é amigável e compassivo, livre de egoísmo e apego — esse é querido por Mim." },
              { number: 14, text: "Sempre contente, firme na meditação, autocontrolado, com determinação inabalável, com mente e intelecto dedicados a Mim — esse devotado é querido por Mim." },
              { number: 15, text: "Aquele que não perturba o mundo e a quem o mundo não perturba, livre de alegria, inveja, medo e ansiedade — esse é querido por Mim." },
            ],
          },
          {
            id: "bg-18", name: "Moksha — A Libertação", number: 18,
            commentary: "O capítulo final sintetiza todos os ensinamentos e conclui com a rendição a Deus.",
            verses: [
              { number: 63, text: "Assim te revelei o conhecimento mais secreto de todos. Reflita sobre ele plenamente e faça o que desejar." },
              { number: 65, text: "Fixa tua mente em Mim, sê Meu devoto, faz sacrifícios a Mim, prostra-te diante de Mim — assim certamente virás a Mim." },
              { number: 66, text: "Abandona todas as religiões e refugia-te somente em Mim. Eu te libertarei de todos os pecados. Não te aflijas." },
              { number: 78, text: "Onde quer que esteja Krishna e onde quer que esteja Arjuna, lá haverá prosperidade, vitória, felicidade e moralidade." },
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
              { number: 5, text: "O Atman é menor que o menor e maior que o maior. Ele habita no coração de cada criatura. (Katha Upanishad)" },
              { number: 6, text: "Aquele que vê todos os seres em si mesmo e a si mesmo em todos os seres, nunca se afasta. (Isha Upanishad)" },
            ],
          },
          {
            id: "up-2", name: "Katha Upanishad — A Morte e o Imortal", number: 2,
            commentary: "O jovem Nachiketa dialoga com Yama, o deus da morte, sobre o mistério da imortalidade.",
            verses: [
              { number: 1, text: "Nachiketa perguntou a Yama: 'Quando um homem morre, há os que dizem que ele existe e os que dizem que não. Desejo saber a verdade.'" },
              { number: 2, text: "Yama respondeu: 'A alma não nasce nem morre. Não surge de nada e nada surge dela. Eterna, antiga, não é morta quando o corpo é morto.'" },
              { number: 3, text: "'O Atman não pode ser alcançado por palavras, nem pela mente, nem pela visão. Só é percebido por aquele que diz: Ele é.'" },
              { number: 4, text: "'Levanta-te! Desperta! Tendo alcançado os grandes mestres, aprende. O caminho é afiado como o fio da navalha, difícil de percorrer.'" },
            ],
          },
        ],
      },
      {
        id: "yoga-sutras",
        name: "Yoga Sutras de Patanjali",
        description: "Os aforismos fundamentais sobre a prática do Yoga",
        chapters: [
          {
            id: "ys-1", name: "Samadhi Pada — Sobre a Contemplação", number: 1,
            commentary: "Patanjali define o yoga e descreve os estados de consciência superiores.",
            verses: [
              { number: 1, text: "Agora, o ensinamento do Yoga. (Atha yoganushasanam)" },
              { number: 2, text: "Yoga é a cessação das flutuações da mente. (Yogash chitta vritti nirodhah)" },
              { number: 3, text: "Então, o observador repousa em sua própria natureza." },
              { number: 12, text: "A cessação das flutuações é alcançada pela prática (abhyasa) e pelo desapego (vairagya)." },
              { number: 33, text: "A mente torna-se serena ao cultivar sentimentos de amizade para com os felizes, compaixão pelos que sofrem, alegria pelos virtuosos e indiferença pelos não-virtuosos." },
            ],
          },
          {
            id: "ys-2", name: "Sadhana Pada — Sobre a Prática", number: 2,
            verses: [
              { number: 1, text: "Tapas (austeridade), svadhyaya (autoestudo) e Ishvara pranidhana (entrega a Deus) constituem o kriya yoga." },
              { number: 3, text: "As cinco aflições (kleshas) são: ignorância, egoísmo, apego, aversão e medo da morte." },
              { number: 29, text: "Os oito membros do yoga são: yama, niyama, asana, pranayama, pratyahara, dharana, dhyana e samadhi." },
              { number: 46, text: "Asana é a postura firme e confortável. (Sthira sukham asanam)" },
            ],
          },
        ],
      },
      {
        id: "ramayana",
        name: "Ramayana — Trechos",
        description: "A épica jornada do príncipe Rama e seus ensinamentos sobre dharma",
        chapters: [
          {
            id: "ram-1", name: "O Exílio de Rama", number: 1,
            commentary: "Rama aceita o exílio para honrar a palavra de seu pai, tornando-se modelo de dharma.",
            verses: [
              { number: 1, text: "Rama disse: 'O dever é supremo. Honrarei a palavra de meu pai, mesmo que isso signifique renunciar ao trono.'" },
              { number: 2, text: "Sita disse: 'Para onde fores, eu irei. O lugar da esposa é ao lado do marido, na alegria e na dor.'" },
              { number: 3, text: "Lakshmana disse: 'Não posso viver sem ti, irmão. Onde estiveres, lá estarei. Teu serviço é meu dever e minha alegria.'" },
            ],
          },
          {
            id: "ram-2", name: "O Resgate de Sita", number: 2,
            verses: [
              { number: 1, text: "Hanuman disse: 'Para servir a Rama, atravessarei o oceano. Nenhum obstáculo é grande demais quando o coração está devotado.'" },
              { number: 2, text: "A virtude de Sita era sua maior proteção. Mesmo em cativeiro, sua pureza permaneceu inabalável." },
              { number: 3, text: "Rama derrotou Ravana não apenas pela força das armas, mas pela força do dharma." },
              { number: 4, text: "Quando o dharma prevalece, a injustiça é destruída. Esta é a lição eterna do Ramayana." },
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
      { term: "Moksha", definition: "Libertação do ciclo de nascimento e morte (samsara)." },
      { term: "Samsara", definition: "O ciclo de nascimento, morte e renascimento." },
      { term: "Yoga", definition: "União — disciplina para unir a alma individual à consciência universal." },
      { term: "Bhakti", definition: "Devoção amorosa a Deus como caminho para a libertação." },
      { term: "Ahimsa", definition: "Não-violência — princípio fundamental da ética hindu." },
      { term: "Mantra", definition: "Fórmula sagrada recitada para meditação e invocação espiritual." },
      { term: "Chakra", definition: "Centro de energia no corpo sutil, há sete principais ao longo da coluna." },
      { term: "Pranayama", definition: "Controle da respiração como prática espiritual e de saúde." },
    ],
  },

  // ═══════════════════════════════════════════
  // EXPLORAR (modo neutro/acadêmico)
  // ═══════════════════════════════════════════
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
              { number: 5, text: "Se Deus não existisse, seria necessário inventá-lo. — Voltaire" },
            ],
          },
          {
            id: "fr-2", name: "Ética sem Religião", number: 2,
            verses: [
              { number: 1, text: "Age apenas segundo uma máxima tal que possas querer que ela se torne uma lei universal. — Kant" },
              { number: 2, text: "A dúvida é o começo da sabedoria. — Aristóteles" },
              { number: 3, text: "O homem está condenado a ser livre. — Sartre" },
              { number: 4, text: "É preciso imaginar Sísifo feliz. — Camus" },
              { number: 5, text: "O que não me mata, me fortalece. — Nietzsche" },
              { number: 6, text: "A vida não examinada não vale a pena ser vivida. — Sócrates" },
            ],
          },
          {
            id: "fr-3", name: "O Sentido da Vida", number: 3,
            verses: [
              { number: 1, text: "Quem tem um porquê para viver suporta quase qualquer como. — Nietzsche / Viktor Frankl" },
              { number: 2, text: "O sentido da vida é encontrar seu dom. O propósito da vida é doá-lo. — Pablo Picasso" },
              { number: 3, text: "A felicidade não é um estado ao qual se chega, mas uma maneira de viajar. — Margaret Lee Runbeck" },
              { number: 4, text: "A única maneira de lidar com um mundo sem liberdade é tornar-se tão absolutamente livre que sua própria existência seja um ato de rebelião. — Camus" },
            ],
          },
        ],
      },
      {
        id: "religioes-comparadas",
        name: "Religiões Comparadas",
        description: "Visão acadêmica das convergências e diferenças entre tradições",
        chapters: [
          {
            id: "rc-1", name: "A Regra de Ouro", number: 1,
            commentary: "Praticamente todas as tradições religiosas possuem alguma versão da Regra de Ouro.",
            verses: [
              { number: 1, text: "Cristianismo: 'Tudo o que quereis que os homens vos façam, fazei-o vós também a eles.' (Mateus 7:12)" },
              { number: 2, text: "Judaísmo: 'O que é odioso para ti, não faças ao próximo. Essa é toda a Torá; o resto é comentário.' (Hillel, Talmud)" },
              { number: 3, text: "Islã: 'Nenhum de vós crê verdadeiramente até que deseje para seu irmão o que deseja para si mesmo.' (Hadith)" },
              { number: 4, text: "Budismo: 'Não machuques os outros de maneiras que tu mesmo acharias doloroso.' (Udanavarga 5:18)" },
              { number: 5, text: "Hinduísmo: 'Este é o resumo do dever: não faça ao outro o que causaria dor a ti.' (Mahabharata 5:1517)" },
              { number: 6, text: "Confucionismo: 'O que não desejas para ti, não faças aos outros.' (Analectos 15:23)" },
              { number: 7, text: "Espiritismo: 'Fazei aos outros o que quereríeis que vos fizessem.' (O Livro dos Espíritos, 919)" },
            ],
          },
          {
            id: "rc-2", name: "Visões sobre a Morte", number: 2,
            verses: [
              { number: 1, text: "No Cristianismo, a morte é passagem para a vida eterna — céu, purgatório ou inferno, conforme a fé e as obras." },
              { number: 2, text: "No Islã, após a morte a alma aguarda o Dia do Juízo, quando será julgada por suas ações." },
              { number: 3, text: "No Judaísmo, o foco está na vida presente (olam hazeh), mas há crença na ressurreição dos mortos (techiyat hametim)." },
              { number: 4, text: "No Hinduísmo e no Budismo, a alma renasce conforme o karma até alcançar a libertação (moksha/nirvana)." },
              { number: 5, text: "No Espiritismo, a morte não existe — é transição para o mundo espiritual, seguida de reencarnação." },
              { number: 6, text: "Na Umbanda, a morte é retorno ao plano espiritual. O espírito continua sua evolução e pode retornar como guia." },
            ],
          },
          {
            id: "rc-3", name: "Conceitos de Deus", number: 3,
            verses: [
              { number: 1, text: "Monoteísmo estrito: Judaísmo (HaShem) e Islã (Allah) — um Deus único, sem forma e sem parceiro." },
              { number: 2, text: "Monoteísmo trinitário: Cristianismo — um Deus em três pessoas: Pai, Filho e Espírito Santo." },
              { number: 3, text: "Politeísmo complexo: Hinduísmo — um Brahman absoluto manifestado em milhares de divindades." },
              { number: 4, text: "Não-teísmo: Budismo — o Buda não nega nem afirma Deus; foca na cessação do sofrimento." },
              { number: 5, text: "Panteísmo espiritual: Espiritismo — Deus é a inteligência suprema, causa primária de todas as coisas." },
              { number: 6, text: "Sincretismo: Umbanda — Deus (Olorum/Zambi) se manifesta através dos Orixás e guias espirituais." },
            ],
          },
        ],
      },
      {
        id: "sabedoria-universal",
        name: "Sabedoria Universal",
        description: "Frases e reflexões atemporais de várias tradições",
        chapters: [
          {
            id: "su-1", name: "Sobre o Amor", number: 1,
            verses: [
              { number: 1, text: "Onde há amor, há vida. — Mahatma Gandhi" },
              { number: 2, text: "O amor é a única força capaz de transformar um inimigo em amigo. — Martin Luther King Jr." },
              { number: 3, text: "O amor não começa e termina do modo que pensamos. Amor é uma batalha, amor é uma guerra; amor é crescer. — James Baldwin" },
              { number: 4, text: "Amar não é olhar um para o outro, é olhar juntos na mesma direção. — Saint-Exupéry" },
            ],
          },
          {
            id: "su-2", name: "Sobre o Sofrimento", number: 2,
            verses: [
              { number: 1, text: "A ferida é o lugar por onde a luz entra em você. — Rumi" },
              { number: 2, text: "O mundo quebra todos, e depois alguns ficam fortes nos lugares partidos. — Hemingway" },
              { number: 3, text: "Quem aprendeu a sofrer, sofre menos. — Provérbio budista" },
              { number: 4, text: "Na escuridão mais profunda é que encontramos as estrelas mais brilhantes. — Ditado persa" },
            ],
          },
          {
            id: "su-3", name: "Sobre a Sabedoria", number: 3,
            verses: [
              { number: 1, text: "Só sei que nada sei. — Sócrates" },
              { number: 2, text: "Conhece-te a ti mesmo. — Inscrição no Templo de Delfos" },
              { number: 3, text: "Quando o aluno está pronto, o mestre aparece. — Provérbio budista" },
              { number: 4, text: "A mente que se abre a uma nova ideia jamais volta ao seu tamanho original. — Albert Einstein" },
              { number: 5, text: "O saber é o único recurso que aumenta à medida que é compartilhado. — Provérbio chinês" },
            ],
          },
        ],
      },
    ],
    glossary: [
      { term: "Agnosticismo", definition: "Posição de que não é possível saber com certeza se Deus existe." },
      { term: "Ateísmo", definition: "Ausência de crença em divindades." },
      { term: "Teísmo", definition: "Crença na existência de um ou mais deuses." },
      { term: "Monoteísmo", definition: "Crença em um único Deus." },
      { term: "Politeísmo", definition: "Crença em múltiplos deuses ou divindades." },
      { term: "Panteísmo", definition: "Crença de que Deus e o universo são idênticos." },
      { term: "Sincretismo", definition: "Fusão de diferentes tradições religiosas em uma nova forma." },
      { term: "Ecumenismo", definition: "Movimento pela unidade e diálogo entre diferentes tradições cristãs." },
      { term: "Diálogo Inter-religioso", definition: "Conversação respeitosa entre tradições religiosas diferentes." },
      { term: "Misticismo", definition: "Busca pela experiência direta do divino ou da realidade última." },
    ],
  },
];

export function getLibraryByTradition(traditionId: string): TraditionLibrary | undefined {
  return library.find((l) => l.traditionId === traditionId);
}
