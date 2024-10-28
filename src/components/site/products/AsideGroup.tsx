import Product from "@/core/ProductModel";
import Link from "next/link";

interface AsideGroupProps {
  products?: Product[];
}

const AsideGroup = (props: AsideGroupProps) => {
  function renderizarLinksProdutos(classificacao: string) {
    return props.products?.map((prod, index) =>
      prod.classification === classificacao ? (
        <li
          className="text-[#4285F4] hover:text-[#004e98]"
          key={"li1" + prod.id}
        >
          <Link className="capitalize" href={`/produtos/${prod.id}`}>
            {prod.description}
          </Link>
        </li>
      ) : prod.classification && prod.classification?.length < 1 ? (
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

  function renderizarDiluicao(classificacao: string) {
    const className = "text-xs sm:text-sm text-gray-500";
    if (classificacao === "COMUM")
      return <h2 className={className}>Diluicao 1:10</h2>;
    if (classificacao === "CONCENTRADA")
      return <h2 className={className}>Diluicao 1:40</h2>;
    if (classificacao === "SUPER")
      return <h2 className={className}>Diluicao 1:100</h2>;
  }

  return (
    <div key={"agdiv1" + Math.random()} className="p-3">
      {props.products &&
        Product.getClassification(props.products)?.map(
          (classificacao, index) => (
            <div key={"agdiv2" + index} className="">
              <h1
                className="text-sm lg:text-base text-slate-950"
                key={"agh1" + index}
              >
                {classificacao.length > 0 ? (
                  <span>CATEGORIA {classificacao}</span>
                ) : (
                  false
                )}
              </h1>

              {renderizarDiluicao(classificacao)}

              <div
                key={"agdiv3" + index}
                className="mt-2 mb-3 md:mt-3 md:mb-4 lg:text-base"
              >
                {renderizarLinksProdutos(classificacao)}
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default AsideGroup;
