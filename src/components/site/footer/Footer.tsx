import { IconCopyright } from "@tabler/icons-react";
import NavBar from "../top/NavBar";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col w-full justify-center items-center border-t border-gray-200">
      <div className="flex flex-1 w-full justify-center items-center py-5 sm:py-7 bg-zinc-600 text-white ">
        <NavBar linkClassname="text-xs md:text-sm xl:text-md hover:text-zinc-400 duration-200" />
      </div>

      <div className="flex bg-zinc-700 text-xs border-t border-zinc-500 w-full justify-center ">
        <div className="flex justify-center items-center py-2 sm:py-3 text-white">
          <IconCopyright stroke={1} width={16} height={16} />
          <span className="px-1"> Copyright </span>
          <span className="pr-1">{year}</span>
          <span className="">- Todos direitos reservados. </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
