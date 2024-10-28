import { lato, truculenta } from "@/utils/fonts";

const AboutUsSection = () => {
  return (
    <>
      <h1 className="text-center mx-2 text-lg lg:text-3xl antialiased">
        Gostaria de conhecer a nossa história?
      </h1>
      <h3 className="text-center mx-2 text-sm lg:text-lg  antialiased">
        A essência por trás da nossa jornada
      </h3>

      <div className="flex flex-col justify-center items-center my-5 px-3">
        <h2 className={`text-[#DB4437] text-7xl ${truculenta.className}`}>
          santana
        </h2>
        <h3 className="text-sm text-zinc-500">
          Industria Quimica | desde 1994{" "}
        </h3>
      </div>

      <div
        className={`${lato.className} flex flex-col justify-center items-center mx-2 mt-14 px-3 lg:w-4/5 2xl:w-3/5  text-justify lg:text-center antialiased lg:text-2xl text-black`}
      >
        <p className="antialiased text-justify text-gray-900">
          Com mais de trinta anos de experiência no mercado, somos uma indústria
          líder em produtos químicos, especializada na linha de limpeza
          automotiva. Nossa trajetória é marcada pelo compromisso com a
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

        {/* <p>
          Contamos com uma equipe altamente qualificada e dedicada, com vasta
          expertise em fabricação e comercialização, o que nos permite garantir
          agilidade e eficiência em todos os processos, desde a produção até a
          entrega dos nossos produtos em suas mãos.
        </p>
        <p>
          Estamos constantemente atualizados com as demandas do mercado, sempre
          atentos às últimas tendências e necessidades dos clientes. Com uma
          linha completa de produtos, estamos prontos para atender às exigências
          específicas da sua empresa, oferecendo soluções sob medida para todas
          as suas necessidades de limpeza automotiva.
        </p> */}
      </div>
    </>
  );
};

export default AboutUsSection;
