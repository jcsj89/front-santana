import Image from "next/image";
import Link from "next/link";

const PaginaNaoEncontrada = () => {
  return (
    <div className="flex flex-col sm:justify-center items-center h-screen relative bg-slate-800 text-white">
      <div className="flex flex-col justify-center items-center text-sm sm:text-2xl my-9">
        <span>Este site, uma ilusão é.</span>
        <span>Um mistério profundo, este link se tornou.</span>
        <span>Voltar, você deve, escolha a luz e encontre a verdade,</span>
        <span>antes que o lado sombrio da Força o encontre!</span>
      </div>

      <Image
        className=" p-5 "
        src={"/img/1234.png"}
        alt=""
        width={400}
        height={400}
      />
      <Link
        className="bg-green-500 text-white font-bold  text-md md:text-2xl rounded-full  text-center my-9 px-6 py-3"
        href={"/"}
      >
        Voltar a Luz!
      </Link>
    </div>
  );
};

export default PaginaNaoEncontrada;
