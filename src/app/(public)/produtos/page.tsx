"use client";
import AsideMenu from "@/components/layout/produtos/AsideMenu";
import ProductCard from "@/components/layout/produtos/ProductCard";
import Product from "@/core/ProductModel";
import { productsList } from "@/data/ProductsList";

import { useEffect, useState } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState<Product[]>([]);

  useEffect(() => {
    setProdutos(productsList.filter((p) => p.showInWeb && p.active));
  }, []);

  return (
    <div className="flex justify-center items-start flex-wrap ">
      <div className="flex w-full">
        {/* Left Side text-xs sm:text-sm md:text-base min-w-32 sm:min-w-48 lg:min-w-48 */}
        <div className="min-w-40 sm:min-w-48 lg:min-w-60 xl:min-w-72">
          <AsideMenu products={produtos} />
        </div>

        {/* Right Side */}
        <div className="">
          <div className="flex justify-center font-bold text-2xl lg:text-3xl m-5">
            <h1>Produtos</h1>
          </div>
          <div className="flex justify-center flex-wrap">
            {productsList?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
