import {Product} from "@/core/ProductModel";
import Image from "next/image";
import TagsProductCard from "./TagsProductCard";

interface ProductCardProps {
  product: Product;
  imgSrc: string[];
  selectProduct: (product: Product) => void;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center justify-start border m-3 p-5 min-w-32 max-w-60 md:min-w-72 md:max-w-72 shadow">
      <div className="flex">
        <Image
          src={props.imgSrc[0]}
          width={150}
          height={150}
          alt="Imagem produto"
        />
      </div>
      <div className="flex  my-6 flex-1">
        <h1 onClick={() => props.selectProduct(props.product)} className="text-neutral-950 uppercase font-bold lg:text-lg 2xl:text-xl">
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
