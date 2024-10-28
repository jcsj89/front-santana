import LinkPage from "@/components/UI/LinkPage";
import { lato, roboto } from "@/utils/fonts";
import {
  IconLetterK,
  IconLetterO,
  IconLetterR,
  IconLetterW,
  IconSquareNumber1,
  IconSquareNumber2,
  IconSquareNumber3,
  IconSquareNumber4,
  IconSquareNumber5,
} from "@tabler/icons-react";

const WhatWeDo = () => {
  return (
    <>
      <div className="mb-10 flex w-full justify-center">
        <IconLetterW
          width={70}
          height={70}
          className="ease-in duration-300 hover:w-14 hover:h-14"
        />
        <IconLetterO
          width={70}
          height={70}
          className="ease-in duration-300 hover:w-14 hover:h-14"
        />
        <IconLetterR
          width={70}
          height={70}
          className="ease-in duration-300 hover:w-14 hover:h-14"
        />
        <IconLetterK
          width={70}
          height={70}
          className="ease-in duration-300 hover:w-14 hover:h-14"
        />
      </div>
      <h1 className="text-center mx-2 text-lg lg:text-3xl  antialiased">
        Tipos de produtos que fabricamos ?
      </h1>

      <div
        className={`${lato.className} flex flex-col justify-center items-center mx-2 my-5 px-3 lg:w-4/5 2xl:w-3/5  text-justify  antialiased lg:text-2xl`}
      >
        <ul
          className={`${roboto.className} flex flex-col capitalize items-start text-yellow-500 text-sm lg:text-xl`}
        >
          <li>
            <h4 className="text-slate-400">Produtos para </h4>
          </li>
          <li className="flex items-center justify-center p-2">
            <IconSquareNumber1 className="text-slate-500" />
            <span className="ml-3">Lavagem profissional de automoveis</span>
          </li>
          <li className="flex items-center justify-center p-2">
            <IconSquareNumber2 className="text-slate-500" />
            <span className="ml-3">acabamento interno</span>
          </li>
          <li className="flex items-center justify-center p-2">
            <IconSquareNumber3 className="text-slate-500" />
            <span className="ml-3">acabamento externo</span>
          </li>
          <li className="flex items-center justify-center p-2">
            <IconSquareNumber4 className="text-slate-500" />
            <span className="ml-3">Lataria dos veiculos</span>
          </li>
          <li className="flex items-center justify-center p-2">
            <IconSquareNumber5 className="text-slate-500" />
            <span className="ml-3">limpeza industrial </span>
          </li>
        </ul>
        <p className="antialiased my-10 ">
          Na Santana Química, somos especializados na fabricação de produtos de
          limpeza automotiva de alta qualidade. Nossa linha abrange soluções
          inovadoras e eficientes para a limpeza, proteção e manutenção de
          veículos, oferecendo produtos que garantem brilho, durabilidade e
          proteção das superfícies. Trabalhamos com tecnologia avançada para
          desenvolver shampoos, desincrustantes, desengraxantes, e outros itens
          essenciais para o cuidado do seu automóvel. Nosso compromisso é
          entregar produtos que facilitem o trabalho de quem cuida de veículos,
          assegurando eficiência e satisfação dos nossos clientes.
        </p>

        <div className="flex justify-center w-full">
          <LinkPage
            href="/produtos"
            className="border-b border-blue-600 text-[#1DA1F2] hover:text-gray-600 mb-10"
          >
            Confira nosso produtos
          </LinkPage>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
