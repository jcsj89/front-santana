import { open_Sans } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const PaginaNaoEncontrada = () => {
  return (
    <div className="flex flex-col items-center min-h-svh  bg-slate-800 text-white">
      <div className="flex flex-col justify-center items-center mt-3">
        <div className="text-xl text-gray-400 uppercase">
          Pagina nao encontrada
        </div>
        <div className="text-6xl text-sky-600">404</div>
      </div>

      <div
        className={`${open_Sans.className} flex flex-col justify-center items-center text-sm  my-9 text-purple-500 `}
      >
        <span>Este site, uma ilusão é.</span>
        <span>Um mistério profundo, este link se tornou.</span>
        <span>Voltar, você deve, escolha a luz e encontre a verdade,</span>
        <span>antes que o lado sombrio da Força o encontre!</span>
      </div>

      <div className="flex">
        <Image
          className=""
          src={"/img/1234.png"}
          alt=""
          width={300}
          height={300}
        />
      </div>

      <div className="flex">
        <Link
          className="bg-green-500 text-white font-bold  text-md md:text-2xl rounded-full  text-center my-9 px-6 py-3"
          href={"/"}
        >
          Voltar a Luz!
        </Link>
      </div>
    </div>
  );
};

export default PaginaNaoEncontrada;
