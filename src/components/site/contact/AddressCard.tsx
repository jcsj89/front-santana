import { roboto_mono } from "@/utils/fonts";
import {
    IconBrandWhatsapp,
    IconMail,
    IconMapPin,
    IconPhone,
} from "@tabler/icons-react";

const AddressCard = () => {
    const classDiv =
        "flex justify-center items-center text-sm lg:text-base gap-3";
    const font = roboto_mono.className;

    return (
        <div className="flex justify-center lg:justify-start lg:px-4 border-t sm:border-none">
            <address className="flex flex-col justify-center items-start py-4 px-3 my-5 gap-1 sm:border">
                <div className={`${classDiv} ${font}`}>
                    <IconMail className="text-amber-400" />
                    contato@santanaquimica.com.br
                </div>
                <div className={`${classDiv} ${font}`}>
                    <IconPhone className="text-sky-500" />
                    (17) 3269-1200
                </div>
                <div className={`${classDiv} ${font}`}>
                    <IconBrandWhatsapp className="text-green-500" />
                    (17) 99619-3941
                </div>
                <div className={`${classDiv} ${font}`}>
                    <IconMapPin className="text-red-500" />
                    Rua Carlos Pagianotto, 251, Ipigua-SP
                </div>
            </address>
        </div>
    );
};

export default AddressCard;
