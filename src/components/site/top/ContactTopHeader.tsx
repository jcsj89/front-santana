import { montserrat } from "@/utils/fonts";
import {
  IconBrandWhatsapp,
  IconMailPlus,
  IconPhone,
} from "@tabler/icons-react";

const ContactTopHeader = () => {
  //#0ca678 green color 1
  //#0F9D58 green color 2
  return (
    <div
      className={`${montserrat.className} flex flex-col sm:flex-row justify-center items-center bg-[#0ca678] py-1 text-xs sm:text-sm md:text-base text-white hover:subpixel-antialiased antialiased leading-3	`}
    >
      <div className="flex px-4 items-center">
        <a
          className="flex items-center"
          href="tel:551732691200"
          aria-label="Converse por telefone"
          target="_blank"
        >
          <span className="">
            <IconPhone stroke={1} />
          </span>
          <span className="px-2 antialiased">17 - 32691200</span>
        </a>
      </div>
      <div className="flex px-4  sm:ml-3 items-center">
        <a
          className="flex items-center"
          href="https://wa.me/5517996193941"
          aria-label="Converse pelo WhatsApp"
          target="_blank"
        >
          <span>
            <IconBrandWhatsapp stroke={1} />
          </span>
          <span className="px-2">17 - 996193941</span>
        </a>
      </div>
      <div className="flex px-4 sm:ml-3 items-center">
        <a
          className="flex items-center"
          href="mailto:santanaquimica@terra.com.br?subject=Contato Site&body=Mensagem originada pelo site"
        >
          <span>
            <IconMailPlus stroke={1} />
          </span>
          <span className="px-2">santanaquimica@terra.com.br</span>
        </a>
      </div>
    </div>
  );
};

export default ContactTopHeader;
