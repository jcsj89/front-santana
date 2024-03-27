import CategoryProductsModel from "@/core/CategoryProductsModel";
import Product from "@/core/ProductModel";

interface AsideMenuProps {
  categories: CategoryProductsModel[];
  products: Product[];
}

const AsideMenu = (props: AsideMenuProps) => {
  const ativado = ["Ativado LS", "ativado 110", "ativado 220"];
  console.log(props.categories);
  return (
    <div className="h-screen px-2 border-r mr-2 text-right">
      {props.categories?.map((cat) => (
        <div key={Math.random() * Math.random()}>
          <ul className="">
            <span className="capitalize" key={Math.random() * Math.random()}>
              Linha - {cat.category}
            </span>
            <div className="">
              {cat.classification?.map((c) => (
                <div key={Math.random() * Math.random()}>
                  <span className="capitalize">Categoria - {c}</span>
                  {props.products.map((p) =>
                    p.classification === c && p.category === cat.category ? (
                      <li className="capitalize" key={Math.random()}>
                        {p.description}
                      </li>
                    ) : (
                      false
                    )
                  )}
                </div>
              ))}
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AsideMenu;
