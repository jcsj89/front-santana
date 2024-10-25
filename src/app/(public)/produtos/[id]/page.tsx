"use client";
import DilutionDescription from "@/components/site/products/DilutionDescription";
import IndicacaoDeUso from "@/components/site/products/IndicacaoDeUso";
import ModoDeUso from "@/components/site/products/ModoDeUso";
import Product from "@/core/ProductModel";
import { productsList } from "@/data/ProductsList";
import Image from "next/image";
import { useEffect, useState } from "react";

const Produto = ({ params }: { params: Promise<{ id: string }> }) => {
  const [product, setProduct] = useState<Product>(Product.createEmpty());
  const id = params.then((res) => res.id);

  useEffect(() => {
    if (productsList.length > 1) {
      const prod = productsList.find((prod) => prod.id === id);
      prod && setProduct(prod);
    }
  }, [id]);

  function calculateDiluicao(value: number) {
    value > 0 && value < 100 ? value : 1;
    const percent = 100 / value;
    return "Percentual de diluicao: " + percent + "%";
  }

  return (
    <div className="flex justify-center border h-screen">
      <div className="lg:container border ">
        <div className="border flex flex-col items-center justify-center ">
          <div className="border  flex flex-col justify-center  items-center my-5 px-8">
            <h1 className="capitalize text-2xl">{product.description}</h1>
            <h2 className="capitalize">Categoria {product.classification}</h2>
            <h2>Diluicao {product.dilution}</h2>
            <h3>{calculateDiluicao(product.dilutionPercent || 1)}</h3>
          </div>
          <div className="flex my-7 p-6">
            <div className="border-r p-6 m-6 w-1/3">
              <Image
                src={"/img/products/at.ls.300.png"}
                width={150}
                height={150}
                alt="Imagem produto"
              />
            </div>
            <div className="border w-2/3">
              <ModoDeUso modoDeUso={product.modoDeUso || ""} />
              <IndicacaoDeUso indicacaoDeUso={product.indicacaoDeUso || ""} />
              <DilutionDescription dilution={product.dilution || ""} />

              <h2>Diluicao {product.dilution}</h2>
              <h3>{calculateDiluicao(product.dilutionPercent || 1)}</h3>
            </div>
          </div>
        </div>
        {product.id}
        {product.tags}
        {product.description}
      </div>
    </div>
  );
};

export default Produto;
