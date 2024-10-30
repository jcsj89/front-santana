import Product from "@/core/ProductModel";
import { zilla_Slab } from "@/utils/fonts";
import Image from "next/image";

interface IProduct {
  product: Product;
  unselectProduct: () => void;
}

const ProductPage = (props: IProduct) => {
  return (
    <div
      onClick={() => props.unselectProduct()}
      className="flex flex-col  items-center w-full border p-5"
    >
      <div className="flex border mb-5">
        <h2
          className={`text-4xl text-amber-700 font-black capitalize ${zilla_Slab.className}`}
        >
          {props.product.description}
        </h2>
      </div>
      <Image
        className="border p-5"
        src={props.product.photos![0]}
        width={330}
        height={300}
        alt={props.product.description!}
      />
      <div>{props.product.modoDeUso}</div>
    </div>
  );
};

export default ProductPage;
