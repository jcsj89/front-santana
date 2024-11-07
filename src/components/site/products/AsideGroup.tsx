import { IProductProperties } from "@/core/IProductProperties";
import { Product } from "@/core/ProductModel";
import { ProductUtils } from "@/utils/ProductUtils";

interface AsideGroupProps {
    products: Product[];
    selectProduct: (product: Product) => void;
}

const AsideGroup = (props: AsideGroupProps) => {
    function renderizarLinksProdutos(category: string) {
        return props.products?.map((prod, index) =>
            prod.category === category ? (
                <li
                    className="text-[#4285F4] hover:text-[#004e98] cursor-pointer"
                    key={"li1" + prod.id}
                    onClick={() => props.selectProduct(prod)}
                >
                    {prod.description}
                </li>
            ) : prod.category && prod.category?.length < 1 ? (
                <li
                    className="text-[#4285F4] hover:text-[#004e98] border"
                    key={"li2" + prod.id}
                >
                    <span className="bg-yellow-300 ">{prod.description}</span>
                </li>
            ) : (
                false
            )
        );
    }

    function renderizarDiluicao(concentrationLevel: string) {
        const className = "text-xs sm:text-sm text-gray-500";
        if (concentrationLevel.toLowerCase() === "COMUM".toLowerCase())
            return <h2 className={className}>Diluicao 1:10</h2>;
        if (concentrationLevel.toLowerCase() === "CONCENTRADo".toLowerCase())
            return <h2 className={className}>Diluicao 1:40</h2>;
        if (concentrationLevel.toLowerCase() === "SUPER".toLowerCase())
            return <h2 className={className}>Diluicao 1:100</h2>;
    }

    function renderizarGrupo(productsList: IProductProperties[]) {
        return (
            productsList &&
            ProductUtils.getCategory(productsList)?.map((category, index) => (
                <div key={"agdiv2" + index} className="">
                    <h1
                        className="text-sm lg:text-base text-slate-950"
                        key={"agh1" + index}
                    >
                        {category.length ? (
                            <span className="uppercase">{category}</span>
                        ) : (
                            false
                        )}
                    </h1>

                    {renderizarDiluicao(category)}

                    <div
                        key={"agdiv3" + index}
                        className="mt-1 mb-2 md:mt-2 md:mb-3 lg:text-base"
                    >
                        <ul>{renderizarLinksProdutos(category)}</ul>
                    </div>
                </div>
            ))
        );
    }

    return (
        <div key={"agdiv1" + Math.random()} className="p-3">
            {renderizarGrupo(props.products)}
        </div>
    );
};

export default AsideGroup;
