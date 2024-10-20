import { delius, montserrat } from "@/utils/fonts";

interface IQuote {
  message: string;
  ref: string;
  week: number;
  month: number;
}

const QuotesMessages = () => {
  // const year = new Date().getFullYear();
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const quoteOfDay = getMessage(quotes);
  
  function getMessage(list: IQuote[]): IQuote {
    let dayQuote;

    dayQuote = list.filter((quote) => {
      return quote.month === month && quote.week === getWeek(day);
    });

    return dayQuote[0];
  }

  function getWeek(day: number): number {
    let week = 0;

    if (day > 0 && day < 8) return 1;
    if (day > 7 && day < 15) return 2;
    if (day > 14 && day < 22) return 3;
    if (day > 21 && day < 32) return 4;

    return week;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h5 className={`${delius.className} text-4xl w-2/3 lg:w-1/3 `}>
          {quoteOfDay.message}
        </h5>
        <h6 className={`${montserrat.className}  w-2/3 lg:w-1/3 py-8`}>
          &#8212; {quoteOfDay.ref}
        </h6>
      </div>
    </>
  );
};

export default QuotesMessages;

const quotes: IQuote[] = [
  {
    message: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
    ref: "Winston Churchill",
    week: 1,
    month: 1,
  },
  {
    message:
      "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    ref: "Steve Jobs",
    week: 2,
    month: 1,
  },
  {
    message: "Acredite que você pode, e você já está no meio do caminho.",
    ref: "Theodore Roosevelt",
    week: 3,
    month: 1,
  },
  {
    message:
      "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    ref: "Vidal Sassoon",
    week: 4,
    month: 1,
  },
  {
    message: "Não espere. O tempo nunca será o ideal.",
    ref: "Napoleon Hill",
    week: 1,
    month: 2,
  },
  {
    message: "Você perde 100% dos tiros que não dá.",
    ref: "Wayne Gretzky",
    week: 2,
    month: 2,
  },
  {
    message:
      "Grandes realizações não são feitas por impulso, mas por uma soma de pequenas conquistas.",
    ref: "Vincent Van Gogh",
    week: 3,
    month: 2,
  },
  {
    message: "Se você pode sonhar, pode realizar.",
    ref: "Walt Disney",
    week: 4,
    month: 2,
  },
  {
    message:
      "Não é o que acontece com você, mas como você reage a isso que importa.",
    ref: "Epicteto",
    week: 1,
    month: 3,
  },
  {
    message:
      "A diferença entre o impossível e o possível está na determinação de uma pessoa.",
    ref: "Tommy Lasorda",
    week: 2,
    month: 3,
  },
  {
    message: "A melhor maneira de prever o futuro é criá-lo.",
    ref: "Peter Drucker",
    week: 3,
    month: 3,
  },
  {
    message: "Faça o que você pode, com o que você tem, onde você está.",
    ref: "Theodore Roosevelt",
    week: 4,
    month: 3,
  },
  {
    message: "A ação é a chave fundamental para todo o sucesso.",
    ref: "Pablo Picasso",
    week: 1,
    month: 4,
  },
  {
    message:
      "Coragem é a resistência ao medo, domínio do medo, e não a ausência dele.",
    ref: "Mark Twain",
    week: 2,
    month: 4,
  },
  {
    message: "A mente é tudo. O que você pensa, você se torna.",
    ref: "Buda",
    week: 3,
    month: 4,
  },
  {
    message: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    ref: "Robert Collier",
    week: 4,
    month: 4,
  },
  {
    message: "O que você faz hoje pode melhorar todos os seus amanhãs.",
    ref: "Ralph Marston",
    week: 1,
    month: 5,
  },
  {
    message:
      "O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum.",
    ref: "Elbert Hubbard",
    week: 2,
    month: 5,
  },
  {
    message:
      "Dificuldades preparam pessoas comuns para destinos extraordinários.",
    ref: "C.S. Lewis",
    week: 3,
    month: 5,
  },
  {
    message:
      "Você não pode mudar o vento, mas pode ajustar as velas do barco para chegar onde quer.",
    ref: "Confúcio",
    week: 4,
    month: 5,
  },
  {
    message: "Seja a mudança que você quer ver no mundo.",
    ref: "Mahatma Gandhi",
    week: 1,
    month: 6,
  },
  {
    message: "A estrada para o sucesso está sempre em construção.",
    ref: "Lily Tomlin",
    week: 2,
    month: 6,
  },
  {
    message:
      "Não deixe o que você não pode fazer interferir no que você pode fazer.",
    ref: "John Wooden",
    week: 3,
    month: 6,
  },
  {
    message:
      "O único limite para a nossa realização de amanhã são nossas dúvidas de hoje.",
    ref: "Franklin D. Roosevelt",
    week: 4,
    month: 6,
  },
  {
    message:
      "Cada sonho que você deixa para trás, é um pedaço do seu futuro que deixa de existir.",
    ref: "Steve Jobs",
    week: 1,
    month: 7,
  },
  {
    message: "Tudo o que você sempre quis está do outro lado do medo.",
    ref: "George Addair",
    week: 2,
    month: 7,
  },
  {
    message:
      "Você é mais corajoso do que pensa, mais forte do que parece e mais inteligente do que acredita.",
    ref: "A.A. Milne",
    week: 3,
    month: 7,
  },
  {
    message:
      "O fracasso é apenas a oportunidade de começar de novo, desta vez de forma mais inteligente.",
    ref: "Henry Ford",
    week: 4,
    month: 7,
  },
  {
    message: "Não basta ter uma boa mente; o principal é usá-la bem.",
    ref: "René Descartes",
    week: 1,
    month: 8,
  },
  {
    message: "O que você faz hoje determina o seu amanhã.",
    ref: "Ralph Marston",
    week: 2,
    month: 8,
  },
  {
    message:
      "Se você não está disposto a arriscar o incomum, você terá que se contentar com o comum.",
    ref: "Jim Rohn",
    week: 3,
    month: 8,
  },
  {
    message: "Não importa o quão devagar você vá, desde que você não pare.",
    ref: "Confúcio",
    week: 4,
    month: 8,
  },
  {
    message: "Persistência é o caminho do êxito.",
    ref: "Charles Chaplin",
    week: 1,
    month: 9,
  },
  {
    message:
      "A diferença entre as pessoas comuns e as bem-sucedidas é a percepção e resposta ao fracasso.",
    ref: "John C. Maxwell",
    week: 2,
    month: 9,
  },
  {
    message:
      "A maior glória em viver não está em nunca cair, mas em nos levantar cada vez que caímos.",
    ref: "Nelson Mandela",
    week: 3,
    month: 9,
  },
  {
    message:
      "Não importa o que você decida. O que importa é que isso te faça feliz.",
    ref: "Paulo Coelho",
    week: 4,
    month: 9,
  },
  {
    message: "Tudo que você sempre quis está do outro lado do medo.",
    ref: "George Addair",
    week: 1,
    month: 10,
  },
  {
    message:
      "O futuro pertence àqueles que acreditam na beleza dos seus sonhos.",
    ref: "Eleanor Roosevelt",
    week: 2,
    month: 10,
  },
  {
    message:
      "A vida não é sobre esperar a tempestade passar, mas aprender a dançar na chuva.",
    ref: "Vivian Greene",
    week: 3,
    month: 10,
  },
  {
    message: "Sucesso é a soma de pequenos esforços repetidos diariamente.",
    ref: "Robert Collier",
    week: 4,
    month: 10,
  },
  {
    message: "Se você está atravessando o inferno, continue.",
    ref: "Winston Churchill",
    week: 1,
    month: 11,
  },
  {
    message:
      "Você pode encontrar o sucesso ao fazer o que ama, mas você nunca será feliz até que ame o que faz.",
    ref: "Dale Carnegie",
    week: 2,
    month: 11,
  },
  {
    message: "Não são os anos da sua vida que contam. É a vida nos seus anos.",
    ref: "Abraham Lincoln",
    week: 3,
    month: 11,
  },
  {
    message:
      "Nunca desista de um sonho só por causa do tempo que vai levar para realizá-lo. O tempo vai passar de qualquer maneira.",
    ref: "Earl Nightingale",
    week: 4,
    month: 11,
  },
  {
    message:
      "A verdadeira medida de um homem não é como ele se comporta em momentos de conforto, mas como ele se mantém em tempos de controvérsia e desafio.",
    ref: "Martin Luther King Jr.",
    week: 1,
    month: 12,
  },
  {
    message: "O fracasso não é o oposto do sucesso; é parte dele.",
    ref: "Arianna Huffington",
    week: 2,
    month: 12,
  },
  {
    message: "Sonhe grande e se atreva a falhar.",
    ref: "Norman Vaughan",
    week: 3,
    month: 12,
  },
  {
    message: "Acredite que você pode e você já está no meio do caminho.",
    ref: "Theodore Roosevelt",
    week: 4,
    month: 12,
  },
];

// "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo."
// — Winston Churchill

// "A única maneira de fazer um ótimo trabalho é amar o que você faz."
// — Steve Jobs

// "Acredite que você pode, e você já está no meio do caminho."
// — Theodore Roosevelt

// "O único lugar onde o sucesso vem antes do trabalho é no dicionário."
// — Vidal Sassoon

// mes 2

// "Não espere. O tempo nunca será o ideal."
// — Napoleon Hill

// "Você perde 100% dos tiros que não dá."
// — Wayne Gretzky

// "Grandes realizações não são feitas por impulso, mas por uma soma de pequenas conquistas."
// — Vincent Van Gogh

// "Se você pode sonhar, pode realizar."
// — Walt Disney

// "Não é o que acontece com você, mas como você reage a isso que importa."
// — Epicteto

// "A diferença entre o impossível e o possível está na determinação de uma pessoa."
// — Tommy Lasorda

// "A melhor maneira de prever o futuro é criá-lo."
// — Peter Drucker

// "Faça o que você pode, com o que você tem, onde você está."
// — Theodore Roosevelt

// "A ação é a chave fundamental para todo o sucesso."
// — Pablo Picasso

// "Coragem é a resistência ao medo, domínio do medo, e não a ausência dele."
// — Mark Twain

// "A mente é tudo. O que você pensa, você se torna."
// — Buda

// "O sucesso é a soma de pequenos esforços repetidos dia após dia."
// — Robert Collier

// "O que você faz hoje pode melhorar todos os seus amanhãs."
// — Ralph Marston

// "O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum."
// — Elbert Hubbard

// "Dificuldades preparam pessoas comuns para destinos extraordinários."
// — C.S. Lewis

// "Você não pode mudar o vento, mas pode ajustar as velas do barco para chegar onde quer."
// — Confúcio

// "Seja a mudança que você quer ver no mundo."
// — Mahatma Gandhi

// "A estrada para o sucesso está sempre em construção."
// — Lily Tomlin

// "Não deixe o que você não pode fazer interferir no que você pode fazer."
// — John Wooden

// "O único limite para a nossa realização de amanhã são nossas dúvidas de hoje."
// — Franklin D. Roosevelt

// "Cada sonho que você deixa para trás, é um pedaço do seu futuro que deixa de existir."
// — Steve Jobs

// "Tudo o que você sempre quis está do outro lado do medo."
// — George Addair

// "Você é mais corajoso do que pensa, mais forte do que parece e mais inteligente do que acredita."
// — A.A. Milne

// "O fracasso é apenas a oportunidade de começar de novo, desta vez de forma mais inteligente."
// — Henry Ford

// "Não basta ter uma boa mente; o principal é usá-la bem."
// — René Descartes

// "O que você faz hoje determina o seu amanhã."
// — Ralph Marston

// "Se você não está disposto a arriscar o incomum, você terá que se contentar com o comum."
// — Jim Rohn

// "Não importa o quão devagar você vá, desde que você não pare."
// — Confúcio

// "Persistência é o caminho do êxito."
// — Charles Chaplin

// "A diferença entre as pessoas comuns e as bem-sucedidas é a percepção e resposta ao fracasso."
// — John C. Maxwell

// "A maior glória em viver não está em nunca cair, mas em nos levantar cada vez que caímos."
// — Nelson Mandela

// "Não importa o que você decida. O que importa é que isso te faça feliz."
// — Paulo Coelho

// "Tudo que você sempre quis está do outro lado do medo."
// — George Addair

// "O futuro pertence àqueles que acreditam na beleza dos seus sonhos."
// — Eleanor Roosevelt

// "A vida não é sobre esperar a tempestade passar, mas aprender a dançar na chuva."
// — Vivian Greene

// "Sucesso é a soma de pequenos esforços repetidos diariamente."
// — Robert Collier

// "Se você está atravessando o inferno, continue."
// — Winston Churchill

// "Você pode encontrar o sucesso ao fazer o que ama, mas você nunca será feliz até que ame o que faz."
// — Dale Carnegie

// "Não são os anos da sua vida que contam. É a vida nos seus anos."
// — Abraham Lincoln

// "Nunca desista de um sonho só por causa do tempo que vai levar para realizá-lo. O tempo vai passar de qualquer maneira."
// — Earl Nightingale

// "A verdadeira medida de um homem não é como ele se comporta em momentos de conforto, mas como ele se mantém em tempos de controvérsia e desafio."
// — Martin Luther King Jr.

// "O fracasso não é o oposto do sucesso; é parte dele."
// — Arianna Huffington

// "Sonhe grande e se atreva a falhar."
// — Norman Vaughan

// "Acredite que você pode e você já está no meio do caminho."
// — Theodore Roosevelt

// "Sucesso é gostar de si mesmo, gostar do que você faz, e gostar de como você faz."
// — Maya Angelou

// "Se você quer ser feliz, defina uma meta que comande seus pensamentos, libere sua energia e inspire suas esperanças."
// — Andrew Carnegie

// "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você."
// — Cynthia Kersey

// "Sempre parece impossível até que seja feito."
// — Nelson Mandela
