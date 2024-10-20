import LinkPage from "@/components/UI/LinkPage";
import {
  IconLetterA,
  IconLetterB,
  IconLetterC,
  IconLetterE,
  IconLetterH,
  IconLetterI,
  IconLetterM,
  IconLetterN,
  IconLetterO,
  IconLetterR,
  IconLetterS,
  IconLetterT,
  IconLetterU,
} from "@tabler/icons-react";
import ImageCard from "../ImageCard";

const KindCarsSection = () => {
  return (
    <>
      {/*
     text-[#5d8aa8] texto titulo
        border-[#5d8aa8] borda redonda

    */}
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-xl md:text-2xl lg:text-4xl my-8 font-bold uppercase  text-[#1177ba]  text-center">
          Produtos de lavagem para todos os tipos de veiculos
        </h1>

        <div
          className="flex lg:flex-row justify-evenly lg:justify-center items-start flex-wrap
        lg:my-4 w-full "
        >
          <div className="flex flex-col justify-center items-center">
            <IconLetterC />
            <IconLetterA />
            <IconLetterR />
            <ImageCard
              className="p-2 lg:mx-6 lg:p-8 lg:border-2 lg:rounded-full lg:border-[#8ccbf5]"
              src="/img/car-svgrepo-com.svg"
            />
            <IconLetterR />
            <IconLetterO />
            <IconLetterS />
          </div>

          <div className="flex flex-col justify-center items-center">
            <IconLetterO />
            <IconLetterN />
            <IconLetterI />
            <ImageCard
              className="p-2 lg:mx-6 lg:p-8 lg:border-2 lg:rounded-full lg:border-[#8ccbf5]"
              src="/img/bus-svgrepo-com.svg"
            />
            <IconLetterB />
            <IconLetterU />
            <IconLetterS />
          </div>
          <div className="flex flex-col justify-center items-center">
            <IconLetterC />
            <IconLetterA />
            <IconLetterM />
            <ImageCard
              className="p-2 lg:mx-6 lg:p-8 lg:border-2 lg:rounded-full lg:border-[#8ccbf5]"
              src="/img/truck-svgrepo-com.svg"
            />
            <IconLetterI />
            <IconLetterN />
            <IconLetterH />
            <IconLetterO />
            <IconLetterE />
            <IconLetterS />
          </div>
          <div className="flex flex-col justify-center items-center">
            <IconLetterM />
            <IconLetterO />
            <IconLetterT />
            <ImageCard
              className="p-2 lg:mx-6 lg:p-8 lg:border-2 lg:rounded-full lg:border-[#8ccbf5]"
              src="/img/motorbike-transport-svgrepo-com.svg"
            />
            <IconLetterO />
            <IconLetterS />
          </div>
          <div className="flex flex-col justify-center items-center">
            <IconLetterT />
            <IconLetterR />
            <IconLetterA />
            <ImageCard
              className="p-2 lg:mx-6 lg:p-8 lg:border-2 lg:rounded-full lg:border-[#8ccbf5]"
              src="/img/tractor-transport-svgrepo-com.svg"
            />
            <IconLetterT />
            <IconLetterO />
            <IconLetterR />
            <IconLetterE />
            <IconLetterS />
          </div>
        </div>

        <div className="lg:w-3/6 lg:p-10 p-5">
          <p className="text-sm text-gray-600 text-justify">
            Na vanguarda da inovação na indústria química automotiva, estamos
            orgulhosos de oferecer uma ampla gama de produtos de lavagem para
            atender a todas as necessidades e tipos de veículos. Desde carros de
            passeio até veículos pesados, nossa linha abrangente é formulada
            para proporcionar resultados excepcionais em cada lavagem. Confie na
            nossa expertise e eleve o padrão de limpeza do seu veículo com
            nossos produtos de lavagem líderes da indústria.
          </p>
        </div>

        <LinkPage
          href="/produtos"
          className="border-b border-blue-600 text-[#1DA1F2] hover:text-gray-600 mb-10"
        >
          Conheca nosso produtos
        </LinkPage>
      </div>
    </>
  );
};

export default KindCarsSection;
