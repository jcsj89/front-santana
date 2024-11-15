"use client";
import AddressCard from "@/components/site/contact/AddressCard";
import Form from "@/components/site/contact/Form";
import MapCard from "@/components/site/contact/MapCard";

const contatos = () => {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    return (
        <div className="flex flex-col lg:flex-row">
            {/* left side */}
            <div className="flex flex-col lg:w-1/2 items-center">
                <h2 className="font-black text-2xl md:text-4xl mt-4">
                    Contate-nos
                </h2>
                <p className="w-3/4 lg:w-1/2 text-justify lg:my-5 p-3 text-sm md:text-base">
                    Você é sempre bem-vindo para entrar em contato conosco.
                    Nosso atendimento ao cliente está disponível de segunda a
                    sexta, das 8h00 às 17h20. Estamos ansiosos para ouvir de
                    você!
                </p>
                <Form></Form>
            </div>

            {/* right side */}
            <div className="flex flex-col lg:w-1/2 ">
                <AddressCard />
                <MapCard />
            </div>
        </div>
    );
};

export default contatos;
