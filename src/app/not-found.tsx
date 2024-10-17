import Image from "next/image";

const PaginaNaoEncontrada = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen  relative">
      <div className="flex p-8">
        DESCULPE EXPLORADOR, ESTA PAGINA NAO TEM SAIDA.{" "}
      </div>
      <Image src={"/img/1234.png"} alt="" width={400} height={400} />
    </div>
  );
};

export default PaginaNaoEncontrada;
