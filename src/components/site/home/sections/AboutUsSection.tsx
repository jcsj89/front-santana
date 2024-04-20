import { truculenta } from "@/utils/fonts";

const AboutUsSection = () => {
  return (
    <>
      <h1 className="text-4xl text-black antialiased">
        Conheça nossa história: A essência por trás da nossa jornada
      </h1>

      <div className="flex flex-col justify-center items-center my-5 px-3">
        <span className={`text-7xl ${truculenta.className}`}>santana</span>
        <h1 className="text-sm">Industria Quimica | desde 1994</h1>
      </div>

      <div className="flex flex-col justify-center items-center my-5 px-3 w-3/5">
        <p className="text-justify">
          Com mais de duas décadas de experiência no mercado, somos uma
          indústria líder em produtos químicos, especializada na linha de
          limpeza automotiva. Nossa trajetória é marcada pelo compromisso com a
          excelência e pela busca contínua pela inovação. Contamos com uma
          equipe altamente qualificada e dedicada, com vasta expertise em
          fabricação e comercialização, o que nos permite garantir agilidade e
          eficiência em todos os processos, desde a produção até a entrega dos
          nossos produtos em suas mãos. Estamos constantemente atualizados com
          as demandas do mercado, sempre atentos às últimas tendências e
          necessidades dos clientes. Com uma linha completa de produtos, estamos
          prontos para atender às exigências específicas da sua empresa,
          oferecendo soluções sob medida para todas as suas necessidades de
          limpeza automotiva.
        </p>
      </div>
    </>
  );
};

export default AboutUsSection;
