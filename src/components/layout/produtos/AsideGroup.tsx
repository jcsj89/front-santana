"use client";
import Product from "@/core/ProductModel";
import { productsList } from "@/data/ProductsList";
import { useEffect } from "react";

interface AsideGroupProps {
  title: string;
  subTitle?: string;
  items?: string[];
  titleClassName?: string;
  subTitleClassName?: string;
  item?: string;
  products?: Product[];
}

const AsideGroup = (props: AsideGroupProps) => {
  
  useEffect(() => {
    console.log(productsList);
    console.log("productsList");
  }, []);

  return (
    <div>
      {productsList.map((product) => (
        <h1 key={Math.random()}>{product.description}</h1>
      ))}

      <h2 className={`lg:text-lg text-gray-800 ${props.titleClassName}`}>
        {props.title}
      </h2>
      <h3 className={`text-gray-600 ${props.subTitleClassName}`}>
        {props.subTitle}
      </h3>
      {props.items ? (
        <ul>
          {props.items?.map((link) => (
            <li className="uppercase" key={Math.random() * Math.random()}>
              {link}
            </li>
          ))}
        </ul>
      ) : (
        false
      )}
    </div>
  );
};

export default AsideGroup;
