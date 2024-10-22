import { truculenta } from "@/utils/fonts";
import { IconCopyright } from "@tabler/icons-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-1 w-full justify-center items-center py-12">
        <h2 className={`${truculenta.className} text-4xl`}>santana</h2>
      </div>

      <div className="flex bg-white text-sm border-t border-gray-200 w-full justify-center">
        <div className="flex justify-center items-center lg:mr-4">
          <IconCopyright width={16} height={16} className="" />
          <span className="px-1"> Copyright </span>
          <span className=""> {year}</span>
        </div>
        <div className="flex justify-center items-center  ">
          <span className="px-1"> Todos direitos reservados. </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
