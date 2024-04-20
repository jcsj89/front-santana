import Button from '@/components/UI/Button';
import { raleway } from '@/utils/fonts';
import Image from 'next/image';
import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-7 w-2/3 ">
        <div className="flex flex-col justify-center items-center w-3/4 border-b pb-8">
          <h1
            className={`text-3xl uppercase font-bold mb-1 ${raleway.className}`}
          >
            Desfrute da excelência
          </h1>
          <h2
            className={`text-2xl uppercase font-bold mb-2 ${raleway.className}`}
          >
            em limpeza <span className="text-red-700">automotiva</span> .
          </h2>

          <p className="lg:w-3/4">
            Nossos produtos são a chave para um resultado profissional
            incomparável, deixe seu veículo impecável, com brilho e proteção de
            longa duração, descubra o segredo por trás de cada lavagem de
            sucesso, experimente agora.
          </p>
        </div>

        <div className="my-8">
          <Button
            label="Clique aqui e peca um orcamento"
            className="border rounded-lg bg-green-700 hover:bg-green-800 duration-200 text-white p-5"
          />
        </div>
      </div>

      {/* right side - image */}
      <div className="flex justify-end items-end w-1/3">
        <div className="hidden lg:block">
          <Image
            src={"/img/12478079.jpg"}
            width={600}
            height={400}
            alt="Lavando carro"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection
