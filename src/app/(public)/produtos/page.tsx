"use client";
import AsideMenu from "@/components/site/products/AsideMenu";
import ProductPage from "@/components/site/products/ProductPage";
import ProductTableCard from "@/components/site/products/ProductTableCard";
import Product from "@/core/ProductModel";
import { productsList } from "@/data/ProductsList";
import { roboto_mono } from "@/utils/fonts";

import { useEffect, useState } from "react";

const Produtos = () => {
    const [produtos, setProdutos] = useState<Product[]>([]);
    const [productSelected, setProductSelected] = useState<Product | null>(
        null
    );

    useEffect(() => {
        setProdutos(productsList.filter((p) => p.showInWeb && p.active));
    }, []);

    function getProduct(product: Product) {
        setProductSelected(product);
    }

    function unselectProduct() {
        setProductSelected(null);
    }

    return (
        <div className="flex justify-center">
            {/* Left Side text-xs sm:text-sm md:text-base min-w-32 sm:min-w-48 lg:min-w-48 */}
            <div className="flex justify-center py-2 min-w-40 sm:min-w-48 lg:min-w-60 xl:min-w-72 border-r ">
                <AsideMenu products={produtos} />
            </div>

            {/* Right Side */}

            {productSelected === null ? (
                <div className="flex flex-col p-3 md:px-3 md:py-0">
                    <div
                        className={`flex items-center justify-center font-bold text-2xl lg:text-3xl`}
                    >
                        <h2 className={`${roboto_mono.className}`}>
                            Lista de Produtos
                        </h2>
                    </div>
                    <div className="flex justify-center flex-wrap">
                        {produtos.length &&
                            produtos.map((product) => (
                                <ProductTableCard
                                    key={`${product.id}+'card1'`}
                                    product={product}
                                    selectProduct={getProduct}
                                />
                            ))}
                    </div>
                </div>
            ) : (
                <div className="flex p-3 md:px-3 md:py-0 flex-wrap">
                    <ProductPage
                        product={productSelected}
                        unselectProduct={unselectProduct}
                    />
                </div>
            )}
        </div>
    );
};

export default Produtos;
