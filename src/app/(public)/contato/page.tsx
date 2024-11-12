"use client";
import AddressCard from "@/components/site/contact/AddressCard";
import Form from "@/components/site/contact/Form";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const contatos = () => {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    return (
        <div className="flex">
            {/* left side */}
            <div className="flex flex-col w-1/2 items-center">
                <h2 className="font-black text-4xl mt-4">Contate-nos</h2>
                <p className="w-1/2 text-justify my-5">
                    Você é sempre bem-vindo para entrar em contato conosco.
                    Nosso atendimento ao cliente está disponível de segunda a
                    sexta, das 9h00 às 20h00. e sábado a domingo, das 10h00 às
                    18h00. (GMT +3). Estamos ansiosos para ouvir de você!
                </p>
                <Form></Form>
            </div>

            {/* right side */}
            <div className="flex flex-col w-1/2 ">
                <AddressCard />
                <APIProvider
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
                >
                    <Map
                        style={{ width: "400px", height: "400px" }}
                        defaultCenter={{
                            lat: -20.6625408464526,
                            lng: -49.3853346648214,
                        }}
                        defaultZoom={15}
                        gestureHandling={"greedy"}
                        disableDefaultUI={true}
                    />
                </APIProvider>
            </div>
        </div>
    );
};

export default contatos;
