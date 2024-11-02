import Product from "@/core/ProductModel";
import Link from "next/link";

interface AsideGroupProps {
    products: Product[];
}

const AsideGroup = (props: AsideGroupProps) => {
    function renderizarLinksProdutos(concentrationLevel: string) {
        return props.products?.map((prod, index) =>
            prod.concentrationLevel === concentrationLevel ? (
                <li
                    className="text-[#4285F4] hover:text-[#004e98]"
                    key={"li1" + prod.id}
                >
                    <Link className="capitalize" href={`/produtos/${prod.id}`}>
                        {prod.description}
                    </Link>
                </li>
            ) : prod.concentrationLevel &&
              prod.concentrationLevel?.length < 1 ? (
                <li
                    className="text-[#4285F4] hover:text-[#004e98]"
                    key={"li2" + prod.id}
                >
                    <Link className="capitalize" href={`/produtos/${prod.id}`}>
                        <span>{prod.description}</span>
                    </Link>
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

    return (
        <div key={"agdiv1" + Math.random()} className="p-3">
            {props.products &&
                Product.getConcentrationLevel(props.products)?.map(
                    (concentrationLevel, index) => (
                        <div key={"agdiv2" + index} className="">
                            <h1
                                className="text-sm lg:text-base text-slate-950"
                                key={"agh1" + index}
                            >
                                {concentrationLevel.length > 0 ? (
                                    <span className="uppercase">
                                        CATEGORIA {concentrationLevel}
                                    </span>
                                ) : (
                                    false
                                )}
                            </h1>

                            {renderizarDiluicao(concentrationLevel)}

                            <div
                                key={"agdiv3" + index}
                                className="mt-2 mb-3 md:mt-3 md:mb-4 lg:text-base"
                            >
                                {renderizarLinksProdutos(concentrationLevel)}
                            </div>
                        </div>
                    )
                )}
        </div>
    );
};

export default AsideGroup;
