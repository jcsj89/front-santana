import {
    IconBrandWhatsapp,
    IconMail,
    IconMapPin,
    IconPhone,
} from "@tabler/icons-react";

const AddressCard = () => {
    return (
        <address className="flex flex-col justify-center items-start border p-5 gap-3">
            <div className="flex justify-center items-center text-xl gap-3">
                <IconMail className="text-amber-400" />
                contato@santanaquimica.com.br
            </div>
            <div className="flex justify-center items-center text-xl gap-3">
                <IconPhone className="text-sky-500" />
                (17) 3269-1200
            </div>
            <div className="flex justify-center items-center text-xl gap-3">
                <IconBrandWhatsapp className="text-red-500" />
                (17) 99619-3941
            </div>
            <div className="flex justify-center items-center text-xl gap-3">
                <IconMapPin className="text-green-500" />
                Rua Carlos Pagianotto, 251, Ipigua-SP
            </div>
        </address>
    );
};

export default AddressCard;
