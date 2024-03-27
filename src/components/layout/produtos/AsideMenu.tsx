import Product from "@/core/ProductModel";
import { useEffect, useState } from "react";
import AsideGroup from "./AsideGroup";

interface AsideMenuProps {
  categories: string[];
  classification: string[];
  products: Product[];
}

const AsideMenu = (props: AsideMenuProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function renderizarMenu() {
    return props.categories?.map((category) => (
      <div key={Math.random() * Math.random()}>
        <ul className="border-b pb-3 mb-3">
          <div
            className="text-sm sm:text-base text-zinc-950 capitalize mb-3"
            key={Math.random() * Math.random()}
          >
            Linha - {category}
          </div>
          <div>
            <AsideGroup
              classification={props.classification}
              products={props.products}
            />
          </div>
        </ul>
      </div>
    ));
  }
  return (
    <div className="h-screen px-2 border-r mr-2 text-right ">
      {loading ? <span>carregando...</span> : renderizarMenu()}
    </div>
  );
};

export default AsideMenu;
