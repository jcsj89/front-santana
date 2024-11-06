import {Product} from "@/core/ProductModel";
import { bona_nova, roboto, zilla_Slab } from "@/utils/fonts";
import { IconPolaroid } from "@tabler/icons-react";
import Image from "next/image";
import { getColor } from "./colors.product.name";

interface ProductTableCardProps {
    product: Product;
    selectProduct: (product: Product) => void;
}

const ProductTableCard = (props: ProductTableCardProps) => {
    const photos = props.product.photos || null;
    const description = props.product.description || "produto";
    const classification = props.product.classification || null;
    const color = props.product.color || "";

    function renderizarImagem(imageUrl: string) {
        if (imageUrl === null || imageUrl === undefined || !imageUrl.length)
            return <IconPolaroid width={80} height={80} />;

        return (
            <Image
                className="max-h-40"
                width={80}
                height={80}
                src={imageUrl}
                alt=""
            />
        );
    }

    function renderizarClassificacao(classification: string | undefined) {
        return classification !== undefined && classification.length > 1 ? (
            <span>{classification}</span>
        ) : (
            false
        );
    }

    function getBriefName(name: string) {
        const letters = name
            .split(" ")
            .map((word) => word[0])
            .join("");
        return letters.toLowerCase();
    }


    return (
        <div
            key={props.product.id}
            className="flex flex-col justify-center min-w-44 max-w-60  md:min-w-60 md:max-w-72 md:min-h-72 md:max-h-72 border m-3"
            onClick={() => props.selectProduct(props.product)}
        >
            <div
                className={`${zilla_Slab.className} flex justify-between text-sm p-1`}
            >
                <div className="uppercase">{description}</div>
                <div className="text-gray-500">{`${props.product.dilutionPercent.toFixed(
                    1
                )} %`}</div>
            </div>

            <div className="flex flex-col flex-1 justify-center items-center">
                <div
                    className={`
                        text-4xl font-black capitalize
                        ${bona_nova.className}
                        ${getColor(color)[0]} `}
                >
                    {getBriefName(description)}
                </div>

                {photos !== null ? (
                    <div className="my-1">{renderizarImagem(photos[0])}</div>
                ) : (
                    <div className="my-1">
                        <IconPolaroid width={80} height={80} />
                    </div>
                )}
            </div>

            {classification !== null ? (
                <div
                    className={`
                        ${roboto.className}
                        ${getColor(color)[1]}
                        text-white
                        flex flex-col justify-center items-center text-xs p-1 lowercase`}
                >
                    {renderizarClassificacao(classification)}
                </div>
            ) : (
                false
            )}
        </div>
    );
};

export default ProductTableCard;
