import Product from "@/core/ProductModel";
import { roboto_mono } from "@/utils/fonts";
import { IconArrowDown } from "@tabler/icons-react";
import Image from "next/image";
import DilutionDescription from "./DilutionDescription";
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
            className="flex justify-center my-3  gap-3"
        >
            <div className="flex flex-col  justify-start items-center min-w-[621px] h-96 border p-3 shadow-sm">
                <h2
                    className={`text-4xl font-black capitalize ${roboto_mono.className}`}
                >
                    {props.product.description}
                </h2>
                <Image
                    className="flex w-52 p-5 my-4 "
                    src={props.product.photos![0]}
                    width={192}
                    height={192}
                    alt={props.product.description!}
                />
            </div>
            <div className="flex flex-col items-center border p-3  overflow-hidden">
                <h3 className="text-3xl mb-4">Informacoes do Produto</h3>
                <IndicacaoDeUso indicacaoDeUso={props.product.modoDeUso} />
                <DilutionPercentageBar
                    percent={props.product.dilutionPercent || 0}
                />
                <DilutionDescription dilution={props.product.dilution} />
                <Phmetro ph={8} icon={<IconArrowDown />}/>
            </div>
        </div>
    );
};

export default ProductPage;
