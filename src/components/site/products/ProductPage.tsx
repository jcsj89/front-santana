import {Product} from "@/core/ProductModel";
import { roboto_mono } from "@/utils/fonts";
import { IconArrowDown } from "@tabler/icons-react";
import Image from "next/image";
import { corTexto } from "./cores.phmetro";
import DilutionPercentageBar from "./DilutionPercentageBar";
import IndicacaoDeUso from "./IndicacaoDeUso";
import Phmetro from "./Phmetro";

interface IProduct {
    product: Product;
    unselectProduct: () => void;
}

const ProductPage = (props: IProduct) => {
    return (
        <div
            onClick={() => props.unselectProduct()}
            className="flex flex-col lg:flex-row lg:justify-center lg:my-3 gap-2 lg:gap-3"
        >
            <div className="flex flex-col justify-start items-center xl:w-1/3 lg:h-96 border py-3 shadow-sm lg:p-4 ">
                <h2
                    className={`text-lg lg:text-4xl font-black capitalize ${
                        roboto_mono.className
                    } ${corTexto(Math.floor(props.product.ph))}`}
                >
                    {props.product.description}
                </h2>
                <Image
                    className="flex w-28 lg:w-52 lg:p-5 my-4"
                    src={props.product.photos![0]}
                    width={192}
                    height={192}
                    alt={props.product.description!}
                />
            </div>
            <div className="flex flex-col items-center lg:px-5 lg:py-2 border p-2 lg:p-4 xl:w-2/3 gap-3 lg:gap-5">
                <h3 className="text-center text-2xl lg:text-3xl font-black">
                    Informações do Produto
                </h3>
                <IndicacaoDeUso indicacaoDeUso={props.product.modoDeUso} />
                <DilutionPercentageBar
                    percent={props.product.dilutionPercent || 0}
                    dilution={props.product.dilution}
                />

                <Phmetro
                    ph={props.product.ph}
                    icon={
                        <IconArrowDown className="w-3 md:w-4 lg:w-5 xl:w-6" />
                    }
                />
            </div>
        </div>
    );
};

export default ProductPage;
