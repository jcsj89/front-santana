import { IconMail, IconMobile, IconPhone } from "@/icons";

const ContactTopHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center bg-[#0F9D58] py-1 text-xs sm:text-sm md:text-base text-white">
      <div className="flex px-4 py-1">
        <span className="">{IconPhone("w-5 h-5")}</span>
        <span className="px-2">17 - 32691200</span>
      </div>
      <div className="flex px-4 py-1 sm:ml-3">
        <span>{IconMobile("w-5 h-5")}</span>
        <span className="px-2">17 - 996193941</span>
      </div>
      <div className="flex px-4 py-1 sm:ml-3">
        <span>{IconMail("w-5 h-5")}</span>
        <span className="px-2">santanaquimica@terra.com.br</span>
      </div>
    </div>
  );
};

export default ContactTopHeader;
