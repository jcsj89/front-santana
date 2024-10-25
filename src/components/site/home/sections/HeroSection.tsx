import Button from "@/components/UI/Button";
import { raleway, truculenta } from "@/utils/fonts";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      {/* right side - image */}
      <div className="flex justify-center items-end lg:justify-end w-full lg:w-1/3 p-3 ">
        <Image
          className="w-44 lg:w-80"
          src={"/img/image11352.png"}
          width={300}
          height={400}
          alt="Cientista feliz"
        />
      </div>

      <div className="flex flex-col justify-center items-center lg:w-2/3 ">
        <div className="flex flex-col justify-center items-center p-3 sm:p-5 lg:p-14 ">
          <h1
            className={`text-2xl md:text-3xl uppercase font-bold mb-1  ${raleway.className}`}
          >
            Desfrute da excelência
          </h1>
          <h2
            className={`text-lg md:text-lg font-bold mb-8 ${raleway.className}`}
          >
            em limpeza{" "}
            <span className={`${truculenta.className} text-gray-200 text-xl`}>
              automotiva
            </span>
          </h2>

          <div className="flex flex-col items-center justify-between w-3/4  relative">
            <p className="lg:w-3/4 text-justify">
              Nossos produtos são a chave para um resultado profissional
              incomparável, deixe seu veículo impecável, com brilho e proteção
              de longa duração, descubra o segredo por trás de cada lavagem de
              sucesso, experimente agora.
            </p>
          </div>

          <div className="my-8">
            <Button
              label="Solicite seu orçamento aqui"
              className="uppercase border border-sky-600 rounded-lg bg-sky-500 hover:bg-sky-600 duration-200 text-white p-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
