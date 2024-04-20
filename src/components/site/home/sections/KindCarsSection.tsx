import React from 'react'
import ImageCard from '../ImageCard';
import LinkPage from '@/components/UI/LinkPage';

const KindCarsSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl my-6 font-bold uppercase text-[#5d8aa8]">
          Produtos de lavagem para todos os tipos de veiculos
        </h1>

        <div className="flex p-3 ">
          <ImageCard src="/img/car-svgrepo-com.svg" />
          <ImageCard src="/img/bus-svgrepo-com.svg" />
          <ImageCard src="/img/truck-svgrepo-com.svg" />
          <ImageCard src="/img/motorbike-transport-svgrepo-com.svg" />
          <ImageCard src="/img/tractor-transport-svgrepo-com.svg" />
        </div>

        <div className="w-3/6 p-10">
          <p className="text-sm text-gray-400">
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
          className="border-b border-blue-600 text-[#1DA1F2] hover:text-gray-600"
        >
          Conheca nosso produtos
        </LinkPage>
      </div>
    </>
  );
}

export default KindCarsSection
