import { truculenta } from "@/utils/fonts";
import { IconCopyright } from "@tabler/icons-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-1 w-full justify-center items-center py-12">
        <h2 className={`${truculenta.className} text-4xl`}>santana</h2>
      </div>

      <div className="flex bg-white text-xs border-t border-gray-200 w-full justify-center ">
        <div className="flex justify-center items-center  py-1">
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
