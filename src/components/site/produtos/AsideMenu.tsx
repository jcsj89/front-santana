import Product from "@/core/ProductModel";
import { roboto } from "@/utils/fonts";
import { useEffect, useState } from "react";
import AsideGroup from "./AsideGroup";

interface AsideMenuProps {
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
    return Product.getCategory(props.products)?.map((category) => (
      <div key={Math.random() * Math.random()}>
        <ul className="border-b pb-3 mb-3">
          <div
            className="font-bold text-base lg:text-xl text-zinc-950 capitalize mb-3"
            key={Math.random() * Math.random()}
          >
            <span className="capitalize">LINHA {category}</span>
          </div>
          <div>
            <AsideGroup
              products={props.products.filter((p) => p.category === category)}
            />
          </div>
        </ul>
      </div>
    ));
  }
  return (
    <div
      className={`h-screen px-3 lg:px-6 border-r mr-2 text-right sm:text-left ${roboto.className}`}
    >
      {loading ? <span>carregando...</span> : renderizarMenu()}
    </div>
  );
};

export default AsideMenu;
