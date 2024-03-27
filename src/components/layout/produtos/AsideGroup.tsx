"use client";
import Product from "@/core/ProductModel";
import Link from "next/link";

interface AsideGroupProps {
  products?: Product[];
  classification?: string[];
}

const AsideGroup = (props: AsideGroupProps) => {
  function renderizarLinksProdutos(classificacao: string) {
    return props.products?.map((prod) =>
      prod.classification === classificacao && prod.showInWeb && prod.active ? (
        <li className="text-[#4285F4] hover:text-[#004e98]" key={Math.random()}>
          <Link href={`/produtos/${prod.id}`}>{prod.description}</Link>
        </li>
      ) : (
        false
      )
    );
  }

  function renderizarDiluicao(classificacao: string) {
    const className = "text-sm text-[#fb8500]";
    if (classificacao === "COMUM")
      return <h2 className={className}>Diluicao 1:10</h2>;
    if (classificacao === "CONCENTRADA")
      return <h2 className={className}>Diluicao 1:40</h2>;
    if (classificacao === "SUPER")
      return <h2 className={className}>Diluicao 1:100</h2>;
  }

  return (
    <div>
      {props?.classification?.map((classificacao) => (
        <>
          <h1
            className="text-sm md:text-base"
            key={Math.random() * Math.random()}
          >
            <span>CATEGORIA</span> {classificacao}
          </h1>

          {renderizarDiluicao(classificacao)}

          <div className="mt-2 mb-3 md:mt-3 md:mb-4 text-sm md:text-base ">
            {renderizarLinksProdutos(classificacao)}
          </div>
        </>
      ))}
    </div>
  );
};

export default AsideGroup;
