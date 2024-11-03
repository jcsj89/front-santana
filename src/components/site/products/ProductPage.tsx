import Product from "@/core/ProductModel";
import { zilla_Slab } from "@/utils/fonts";
import Image from "next/image";

interface IProduct {
    product: Product;
    unselectProduct: () => void;
}

const ProductPage = (props: IProduct) => {
    function renderizarDiluicao(diluicao: string) {
        return <div>{diluicao}</div>;
    }

    return (
        <div
            onClick={() => props.unselectProduct()}
            className="flex justify-center  my-3 flex-wrap gap-10"
        >
            <div className="flex flex-col justify-start items-center w-1/3 h-96 border p-3">
                <h2
                    className={`text-4xl text-amber-500 font-black capitalize ${zilla_Slab.className}`}
                >
                    {props.product.description}
                </h2>
                <Image
                    className="flex w-52 border p-5 my-4"
                    src={props.product.photos![0]}
                    width={192}
                    height={192}
                    alt={props.product.description!}
                />
            </div>
            <div className="flex flex-col items-center border w-1/3 h-96 p-3">
                <h3 className="text-3xl">Informacoes do Produto</h3>
                DILUIÇÃO:
                <p>
                    Limpeza Leve: Diluir 1 parte do produto em até 100 partes
                    litros de água (1%).
                </p>
                <p>
                    Limpeza pesada: Diluir 1 parte do produto em até 10 partes
                    de água (10%).
                </p>
                INDICAÇÕES DE USO:
                <p>
                    Del Mol é usado na lavagem de superfícies pintadas,
                    carrocerias, chassis de veículos pesados e de passeio, além
                    de pisos. Excelente desempenho na lavagem de motos de
                    esporte off-road ou passeio. Não ataca a pintura.
                </p>
            </div>
            <div className="flex">{props.product.modoDeUso}</div>
        </div>
    );
};

export default ProductPage;
