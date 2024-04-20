'use client'

import ContactForm from '@/components/form/ContactForm';
import Image from 'next/image';
import React from 'react'

const SectionContact = () => {
  return (
    <>
      <h1 className="text-4xl uppercase">Precisa falar conosco ?</h1>

      <div className="flex justify-center items-center w-full p-10 ">
        <div className="flex flex-col w-1/2 justify-center items-center">
          <Image
            width={300}
            height={300}
            alt=""
            src={"/img/open-mail-svgrepo-com.svg"}
          />
          <p className="pt-10 text-4xl text-red-500">Contate-nos!</p>
          <p className="text-xl">
            Preencha os campos ao lado e nos envie sua mensagem.
          </p>
          <div className="flex flex-col justify-center items-center border-t w-full mt-6 p-4 text-gray-600">
            <span>Ou</span>
            <p>Envie um email para</p>
            <span>santanaquimica@terra.com.br</span>
            <span>contato@santanaquimica.com.br</span>
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-center   p-7">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default SectionContact
