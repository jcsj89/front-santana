import Button from "@/components/UI/Button";
import LinkPage from "@/components/UI/LinkPage";
import ContactForm from "@/components/form/ContactForm";
import ImageCard from "@/components/site/home/ImageCard";
import { raleway, roboto, truculenta, zilla_Slab } from "@/utils/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex border-b w-full ">
        {/* left side */}
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
              incomparável, deixe seu veículo impecável, com brilho e proteção
              de longa duração, descubra o segredo por trás de cada lavagem de
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
      </div>

      {/* second section - about kind of cars us worked */}
      <div
        className={`flex border-b w-full bg-gray-200 py-14 text-[#282626] ${zilla_Slab.className}`}
      >
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
              atender a todas as necessidades e tipos de veículos. Desde carros
              de passeio até veículos pesados, nossa linha abrangente é
              formulada para proporcionar resultados excepcionais em cada
              lavagem. Confie na nossa expertise e eleve o padrão de limpeza do
              seu veículo com nossos produtos de lavagem líderes da indústria.
            </p>
          </div>

          <LinkPage
            href="/produtos"
            className="border-b border-blue-600 text-[#1DA1F2] hover:text-gray-600"
          >
            Conheca nosso produtos
          </LinkPage>
        </div>
      </div>

      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">work</h1>
      </div>
      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">help</h1>
      </div>
      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">clients</h1>
      </div>

      {/* section about us */}
      <div
        className={`flex flex-col justify-center items-center border-b w-full py-9 pb-14 bg-[#4682b4] ${roboto.className}`}
      >
        <h1 className="text-4xl text-black antialiased">
          Conheça nossa história: A essência por trás da nossa jornada
        </h1>

        <div className="flex flex-col justify-center items-center my-5 px-3">
          <span className={`text-7xl ${truculenta.className}`}>santana</span>
          <h1 className="text-sm">Industria Quimica | desde 1994</h1>
        </div>

        <div className="flex flex-col justify-center items-center my-5 px-3 w-3/5">
          <p className="text-justify">
            Com mais de duas décadas de experiência no mercado, somos uma
            indústria líder em produtos químicos, especializada na linha de
            limpeza automotiva. Nossa trajetória é marcada pelo compromisso com
            a excelência e pela busca contínua pela inovação. Contamos com uma
            equipe altamente qualificada e dedicada, com vasta expertise em
            fabricação e comercialização, o que nos permite garantir agilidade e
            eficiência em todos os processos, desde a produção até a entrega dos
            nossos produtos em suas mãos. Estamos constantemente atualizados com
            as demandas do mercado, sempre atentos às últimas tendências e
            necessidades dos clientes. Com uma linha completa de produtos,
            estamos prontos para atender às exigências específicas da sua
            empresa, oferecendo soluções sob medida para todas as suas
            necessidades de limpeza automotiva.
          </p>
        </div>
        <h1 className="text-3xl text-[#ff6347]">about us</h1>
        <h1 className="text-3xl text-[#006400]">about us</h1>
        <h1 className="text-3xl text-[#fa7f72]">Sobre Nos</h1>
      </div>
      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">video</h1>
      </div>
      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">why us?</h1>
      </div>
      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">quote</h1>
      </div>
      <div className="flex border my-4 justify-center items-center">
        <h1 className="text-3xl">get in touch</h1>
      </div>

      {/* section contact */}
      <div
        className={`flex flex-col justify-center items-center border-b w-full py-9 pb-14 bg-gray-100 ${roboto.className}`}
      >
        <h1 className="text-3xl">contact form</h1>

        <div className="flex justify-center items-center w-full p-5 bg-blue-500">
          <div className="border p-7">
            <p>nos mande uma mensagem</p>

            <Image
              width={200}
              height={200}
              alt=""
              src={"/img/open-mail-svgrepo-com.svg"}
            />
            <p>Contate-nos!</p>
          </div>
          <div className="border p-7 w-1/3">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="w-1/3 border p-3">
          <h2>O que voce pode encontrar na Santana Quimica?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sit est officia sed ipsam, quos placeat beatae voluptatibus natus
            aspernatur veritatis, libero molestias possimus quidem asperiores,
            dolorem non laboriosam atque.
          </p>
        </div>
        <div className="w-1/3 border p-3">
          <h2>Nosso diferencial</h2>p Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores, consequatur rem. Ipsa ab sapiente dicta
          similique fuga aspernatur, consectetur optio quaerat iusto molestias,
          magnam doloremque vero libero est distinctio quisquam?
        </div>
        <div className="w-1/3 border p-3">
          <h2>O que voce pode encontrar na Santana Quimica?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            nulla. Odit consectetur dolorum, assumenda dolore perferendis
            maxime. Distinctio cumque optio exercitationem nostrum quae natus
            rerum, officiis ab inventore odio aliquid.
          </p>
        </div>
      </div>
    </main>
  );
}
