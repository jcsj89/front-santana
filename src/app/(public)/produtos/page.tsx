"use client";
import AsideMenu from "@/components/layout/produtos/AsideMenu";
import Product from "@/core/ProductModel";
import {
  getCategory,
  getClassification,
  productsList,
} from "@/data/ProductsList";

import { useEffect, useState } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [classificacao, setClassificacao] = useState<string[]>([]);

  useEffect(() => {
    setCategorias(getCategory());
    setClassificacao(getClassification());
    setProdutos(productsList.filter((p) => p.showInWeb && p.active));
  }, []);

  return (
    <div className="flex justify-center items-start flex-wrap bg-[#ece9c0]">
      <div className="flex lg:container border  w-full">
        {/* Left Side */}
        <div className="w-1/3 text-xs sm:text-sm md:text-base">
          <AsideMenu classification={classificacao} categories={categorias.sort()} products={produtos} />
        </div>

        {/* Right Side */}
        <div className="w-2/3">
          <h1>Produtos</h1>
          {categorias?.map((i) => (
            <p key={Math.random()}>
                <p key={Math.random()}>{i}</p>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produtos;
