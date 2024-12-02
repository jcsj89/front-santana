import { Product } from "@/core/ProductModel";
import { roboto_mono } from "@/utils/fonts";
import { IconArrowDown } from "@tabler/icons-react";
import Image from "next/image";
import { corTexto } from "./cores.phmetro";
import DilutionPercentageBar from "./DilutionPercentageBar";
import IndicacaoDeUso from "./IndicacaoDeUso";
import Phmetro from "./Phmetro";
import ProductDocumentCard from "./ProductDocumentCard";

interface IProduct {
    product: Product;
    unselectProduct: () => void;
}

const ProductPage = (props: IProduct) => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-center lg:my-3 gap-2 lg:gap-3">
            {/* Left Side */}
            <div className="flex flex-col justify-start items-center xl:w-1/3  ">
                {/* name and image div */}
                <div className="flex flex-col justify-center items-center w-full lg:h-96 shadow-sm border lg:p-4">
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

                {/* document div */}
                <ProductDocumentCard product={props.product} />
            </div>

            {/* Right Side */}
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

                {/* Outras Embalagems
                    continuar aqui .......................
                */}
                <div className="flex flex-col">
                    Outras Embalagems
                    <div className="flex flex-wrap justify-center items-center">
                        <Image
                            src={`/img/embalagems/20.litros.png`}
                            width={100}
                            height={100}
                            alt=""
                        />
                        <Image
                            src={`/img/embalagems/50.litros.png`}
                            width={100}
                            height={100}
                            alt=""
                        />
                        <Image
                            src={`/img/embalagems/200.litros.png`}
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>
                </div>

                {/* Button Orcamento */}
                <div
                    onClick={() => props.unselectProduct()}
                    className="flex justify-center items-center w-full mt-3 p-3 border cursor-pointer border-zinc-800 uppercase font-black antialiased text-zinc-900 hover:text-[#004e98] hover:border-[#004e98] duration-150 rounded-md"
                >
                    Solicitar Orcamento //fazer form com cards
                </div>
                {/* Button Voltar */}
                <div
                    onClick={() => props.unselectProduct()}
                    className="flex justify-center items-center w-full mt-3 p-3 border cursor-pointer border-zinc-800 uppercase font-black antialiased text-zinc-900 hover:text-[#004e98] hover:border-[#004e98] duration-150 rounded-md"
                >
                    Listar Produtos
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
