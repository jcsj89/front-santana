import Product from "@/core/ProductModel";
import { bona_nova_sc, roboto, zilla_Slab } from "@/utils/fonts";
import { IconPolaroid } from "@tabler/icons-react";
import Image from "next/image";

interface ProductTableCardProps {
    product: Product;
    selectProduct?: (product: Product) => void;
}

const ProductTableCard = (props: ProductTableCardProps) => {
    const photos = props.product.photos || [""];
    const description = props.product.description || "produto";
    const classification = props.product.classification || "geral";

    function renderizarImagem(imageUrl: string) {
        if (imageUrl === null || imageUrl === undefined || !imageUrl.length)
            return <IconPolaroid width={80} height={80} />;

        return (
            <Image
                className="max-h-40"
                width={100}
                height={100}
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
        return letters;
    }

    return (
        <div
            key={props.product.id}
            className="flex flex-col justify-center min-w-44 max-w-60  md:min-w-60 md:max-w-72 md:min-h-72 md:max-h-72 border m-3"
        >
            <div
                className={`${zilla_Slab.className} flex justify-between text-sm  p-1`}
            >
                <div>{description}</div>
                <div>{`${props.product.dilutionPercent.toFixed(1)} %`}</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center">
                <div
                    className={`text-4xl font-black ${bona_nova_sc.className}`}
                >
                    {getBriefName(description)}
                </div>
                <div className="my-1">
                    {photos !== null ? (
                        renderizarImagem(photos[0])
                    ) : (
                        <IconPolaroid width={80} height={80} />
                    )}
                </div>
            </div>

            <div
                className={`${roboto.className} flex flex-col justify-center items-center bg-amber-400 text-xs p-1 lowercase`}
            >
                {renderizarClassificacao(classification)}
            </div>
        </div>
    );
};

export default ProductTableCard;
