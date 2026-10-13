
export type Subject = {
  id: string;
  title: string;
  description: string;
  studyUrl: string;
  youtubeVideoId?: string;
  relatedSubjectIds: string[];
};

export type SubjectCategory = {
  id: string;
  title: string;
  area: string;
  color: string;
  subjects: Subject[];
};

export const subjectCategories: SubjectCategory[] = [
  {
    id: "matematica",
    title: "Matemática",
    area: "Matemática e suas Tecnologias",
    color: "blue",
    subjects: [
      {
        id: "porcentagem",
        title: "Porcentagem",
        description:
          "Aprenda a calcular porcentagens, descontos, aumentos e variações percentuais.",
        studyUrl:
          "https://brasilescola.uol.com.br/matematica/porcentagem.htm",
        relatedSubjectIds: ["razao-proporcao", "regra-tres"],
      },
      {
        id: "razao-proporcao",
        title: "Razão e proporção",
        description:
          "Entenda a comparação entre grandezas e a resolução de proporções.",
        studyUrl:
          "https://brasilescola.uol.com.br/matematica/razao-proporcao.htm",
        relatedSubjectIds: ["porcentagem", "regra-tres"],
      },
      {
        id: "regra-tres",
        title: "Regra de três",
        description:
          "Resolva problemas envolvendo grandezas diretamente e inversamente proporcionais.",
        studyUrl:
          "https://brasilescola.uol.com.br/matematica/regra-tres.htm",
        relatedSubjectIds: ["porcentagem", "razao-proporcao"],
      },
      {
        id: "estatistica",
        title: "Estatística",
        description:
          "Estude tabelas, gráficos, média, mediana e interpretação de dados.",
        studyUrl:
          "https://brasilescola.uol.com.br/matematica/estatistica.htm",
        relatedSubjectIds: ["porcentagem", "probabilidade"],
      },
      {
        id: "probabilidade",
        title: "Probabilidade",
        description:
          "Aprenda a calcular a chance de ocorrência de eventos.",
        studyUrl:
          "https://brasilescola.uol.com.br/matematica/probabilidade.htm",
        relatedSubjectIds: ["estatistica"],
      },
    ],
  },
  {
    id: "linguagens",
    title: "Linguagens",
    area: "Linguagens, Códigos e suas Tecnologias",
    color: "violet",
    subjects: [
      {
        id: "interpretacao-texto",
        title: "Interpretação de texto",
        description:
          "Identifique informações explícitas, implícitas e a intenção comunicativa.",
        studyUrl:
          "https://brasilescola.uol.com.br/redacao",
        relatedSubjectIds: ["funcoes-linguagem", "generos-textuais"],
      },
      {
        id: "funcoes-linguagem",
        title: "Funções da linguagem",
        description:
          "Reconheça as funções da linguagem e seus efeitos de sentido.",
        studyUrl:
          "https://brasilescola.uol.com.br/gramatica/funcoes-linguagem.htm",
        relatedSubjectIds: ["interpretacao-texto"],
      },
      {
        id: "generos-textuais",
        title: "Gêneros textuais",
        description:
          "Conheça os gêneros, suas características e seus contextos de uso.",
        studyUrl:
          "https://brasilescola.uol.com.br/redacao",
        relatedSubjectIds: ["interpretacao-texto"],
      },
    ],
  },
  {
    id: "ciencias-humanas",
    title: "Ciências Humanas",
    area: "Ciências Humanas e suas Tecnologias",
    color: "amber",
    subjects: [
      {
        id: "brasil-colonia",
        title: "Brasil Colônia",
        description:
          "Estude a colonização portuguesa, a economia colonial e a sociedade da época.",
        studyUrl:
          "https://brasilescola.uol.com.br/historiab/brasil-colonia.htm",
        relatedSubjectIds: ["escravidao", "independencia-brasil"],
      },
      {
        id: "geografia-clima",
        title: "Clima e vegetação",
        description:
          "Entenda os fatores climáticos, os biomas e suas distribuições.",
        studyUrl:
          "https://brasilescola.uol.com.br/geografia",
        relatedSubjectIds: ["brasil-colonia"],
      },
    ],
  },
  {
    id: "ciencias-natureza",
    title: "Ciências da Natureza",
    area: "Ciências da Natureza e suas Tecnologias",
    color: "emerald",
    subjects: [
      {
        id: "ecologia",
        title: "Ecologia",
        description:
          "Estude ecossistemas, cadeias alimentares, relações ecológicas e impactos ambientais.",
        studyUrl:
          "https://brasilescola.uol.com.br/biologia/ecologia.htm",
        relatedSubjectIds: ["cadeia-alimentar"],
      },
      {
        id: "cadeia-alimentar",
        title: "Cadeia alimentar",
        description:
          "Compreenda produtores, consumidores, decompositores e fluxo de energia.",
        studyUrl:
          "https://brasilescola.uol.com.br/biologia/cadeia-alimentar.htm",
        relatedSubjectIds: ["ecologia"],
      },
    ],
  },
];
