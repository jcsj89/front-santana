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
          className={`${raleway.className} text-5xl xl:text-6xl p-3 mb-2 text-amber-500`}
        >
          Ola !
        </h5>
        <h6 className="text-xl w-full sm:w-2/3 md:w-1/2 m-2 py-2 ">
          Entre em contato.
        </h6>
        <p className="lg:w-1/3">
          Para uma mensagem rapida use o formulario abaixo, mas se deseja
          contato com informacoes mais completas use este formulario aqui.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
