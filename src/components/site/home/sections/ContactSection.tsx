"use client";

import ContactForm from "@/components/form/ContactForm";

import { raleway } from "@/utils/fonts";
import { IconMail, IconMap, IconPhone } from "@tabler/icons-react";

const ContactSection = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center my-36 gap-5 p-5 w-full xl:w-2/3 ${raleway.className}`}
    >
      <div className="flex flex-col w-full m-8 justify-center items-center">
        <h5
          className={`${raleway.className} text-5xl xl:text-6xl py-3 mb-2 text-[#0F9D58] w-full sm:w-2/3 md:w-1/2`}
        >
          Olá !
        </h5>
        <h6 className="text-xl w-full sm:w-2/3 md:w-1/2 py-2 ">
          Entre em contato.
        </h6>
        <p className="w-full sm:w-2/3 md:w-1/2">
          Para uma mensagem rápida use o formulário abaixo, mas se deseja
          contato com informações mais completas use este outro formulário aqui.
        </p>
      </div>
      <ContactForm />

      <address className="">
        <div className="flex mx-1">
          <IconMail />
          <span>vendas@santanaquimica.com.br</span>
        </div>
        <div>
          <IconPhone />
          <span>+55 (17) 3269-1200</span>
        </div>
        <div>
          <IconMap />
          <span>Rua Carlos Pagianotto, nº 251 CEP 15109-106 - Ipiguá - SP</span>
        </div>
      </address>
    </div>
  );
};

export default ContactSection;
