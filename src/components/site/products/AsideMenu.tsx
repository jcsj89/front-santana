"use client";

import { IProductProperties } from "@/core/IProductProperties";
import { roboto } from "@/utils/fonts";
import { ProductUtils } from "@/utils/ProductUtils";
import { useEffect, useState } from "react";
import AsideGroup from "./AsideGroup";
import { Product } from "@/core/ProductModel";

interface AsideMenuProps {
    selectProduct: (product: Product) => void;
    products: Product[];
}

const AsideMenu = (props: AsideMenuProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    function renderizarMenu() {
        return ProductUtils.getLine(props.products)?.map((line, index) => (
            <div key={"amdiv1" + index}>
                <ul key={"ul" + index} className="border-b pb-3 mb-3">
                    <div
                        key={"amdiv2" + index}
                        className="font-bold text-base lg:text-xl text-zinc-950 capitalize mb-3"
                    >
                        <span className="uppercase">LINHA {line}</span>
                    </div>
                    <div key={"amdiv3" + index}>
                        <AsideGroup
                            selectProduct={props.selectProduct}
                            products={props.products.filter(
                                (p) => p.line === line
                            )}
                        />
                    </div>
                </ul>
            </div>
        ));
    }
    return (
        <div
            className={`flex flex-col px-3 lg:px-6 mr-2 text-right sm:text-left ${roboto.className}`}
        >
            {loading ? <span>carregando...</span> : renderizarMenu()}
        </div>
    );
};

export default AsideMenu;
