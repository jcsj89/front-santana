"use client";

import ContactForm from "@/components/form/ContactForm";
import { raleway } from "@/utils/fonts";

const ContactSection = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center mt-5 mb-20 gap-5 p-5 w-full xl:w-2/3 ${raleway.className}`}
    >
      <div className="flex flex-col w-full m-8 justify-center items-center">
        <h5
          className={`${raleway.className} text-5xl xl:text-6xl py-3 mb-2 text-amber-500 w-full sm:w-2/3 md:w-1/2`}
        >
          Ola !
        </h5>
        <h6 className="text-xl w-full sm:w-2/3 md:w-1/2 py-2 ">
          Entre em contato.
        </h6>
        <p className="w-full sm:w-2/3 md:w-1/2">
          Para uma mensagem rapida use o formulario abaixo, mas se deseja
          contato com informacoes mais completas use este outro formulario aqui.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
