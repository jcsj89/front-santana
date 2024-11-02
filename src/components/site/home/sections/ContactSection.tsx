"use client";

import ContactForm from "@/components/form/ContactForm";

import { raleway } from "@/utils/fonts";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

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
                    Para uma mensagem rápida use o formulário abaixo, mas se
                    deseja contato com informações mais completas use este outro
                    formulário aqui.
                </p>
            </div>
            <ContactForm />

            <address className="flex flex-col gap-2 mt-20">
                <div className="flex items-center">
                    <IconMail className="text-amber-500" />
                    <a
                        className="mx-2"
                        href="mailto:santanaquimica@terra.com.br?subject=Contato Site&body=Mensagem originada pelo site"
                    >
                        vendas@santanaquimica.com.br
                    </a>
                </div>
                <div className="flex items-center">
                    <IconPhone className="text-sky-500" />
                    <a className="mx-2" href="tel:01732691200">
                        {`+55 (17) 3269-1200`}
                    </a>
                </div>
                <div className="flex items-center">
                    <IconMapPin className="text-red-500" />
                    <span className="text-xs sm:text-base mx-2">
                        Rua Carlos Pagianotto,251 CEP 15109-106 - Ipiguá - SP
                    </span>
                </div>
            </address>
        </div>
    );
};

export default ContactSection;
