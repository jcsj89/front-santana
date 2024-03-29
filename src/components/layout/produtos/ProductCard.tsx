import Product from "@/core/ProductModel";
import Image from "next/image";
import TagsProductCard from "./TagsProductCard";

interface ProductCardProps {
  product: Product;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center justify-start m-3 p-5 min-w-32 max-w-60 md:min-w-72 md:max-w-72 shadow">
      <Image
        src={"/img/products/at.ls.300.png"}
        width={150}
        height={150}
        alt="Imagem produto"
      />
      <div className="my-3">
        <h1 className="text-neutral-950 uppercase font-bold lg:text-lg 2xl:text-xl">
          {props.product.description}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <TagsProductCard tags={props.product.tags || [""]} />
      </div>
    </div>
  );
};

export default ProductCard;
