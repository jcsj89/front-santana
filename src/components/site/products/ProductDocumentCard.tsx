import { Product } from "@/core/ProductModel";
import { IconDownload } from "@tabler/icons-react";
import TitlePageProduct from "./TitlePageProduct";

interface Props {
    product: Product;
}

const ProductDocumentCard = (props: Props) => {
    return (
        <>
            {props.product.documents && props.product.documents.length > 0 && (
                <TitlePageProduct title="Documentos" />
            )}
            {props.product.documents &&
                props.product.documents.map((doc) => (
                    <div
                        key={doc.id}
                        className="flex flex-col justify-start w-full mt-5 gap-1 p-3 border border-red-300"
                    >
                        <div>Tipo: {doc.type}</div>
                        <div>Descricao: {doc.description}</div>
                        <div>Versao: {doc.version}</div>
                        <div>Data da versao: {doc.updatedAt.getDay()}</div>
                        <a
                            className="flex w-full justify-center items-center mt-2 p-2 border border-red-500 bg-red-600 hover:bg-red-500 duration-200 text-white text-sm"
                            href={doc.anexo}
                            target="_blank"
                        >
                            <span className="mr-2">
                                <IconDownload className="w-4 h-4" />
                            </span>
                            <span>Download</span>
                        </a>
                    </div>
                ))}
        </>
    );
};

export default ProductDocumentCard;
