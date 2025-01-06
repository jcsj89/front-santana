"use client";
import { IconBrandWhatsapp, IconCopyright } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import NavBar from "../top/NavBar";

const Footer = () => {
    const [year, setYear] = useState<number>(2025);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="flex flex-col w-full justify-center items-center border-t border-gray-200">
            <div className="flex flex-1 w-full justify-center items-center py-5 sm:py-7 bg-zinc-900 text-white ">
                <NavBar linkClassname="text-xs md:text-sm xl:text-md hover:text-zinc-400 duration-200" />
            </div>

            <div className="flex flex-col md:flex-row bg-zinc-800 text-xs border-t border-zinc-500 w-full justify-between items-center">
                {/* empty div usado para centralizar a div do meio e empurrar a outra para o final */}
                <div className="text-white"></div>
                {/* div do meio */}
                <div className="flex justify-center items-center py-2 sm:py-3 text-white">
                    <IconCopyright stroke={1} width={16} height={16} />
                    <span className="px-1"> Copyright </span>
                    <span className="pr-1">{year}</span>
                    <span className="">- Todos direitos reservados. </span>
                </div>
                {/* div link whatsapp */}
                <div className="flex items-center text-zinc-300 gap-2">
                    <span>desenvolvido por</span>
                    <span className="text-green-500">
                        <a href="https://wa.me/5517997257501" target="_blank">
                            <IconBrandWhatsapp />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
