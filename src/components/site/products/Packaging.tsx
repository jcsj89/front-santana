import { PackageModel } from "@/core/PackageModel";
import Image from "next/image";
import TitlePageProduct from "./TitlePageProduct";

interface PackagingProps {
    packages: PackageModel[];
}

const Packaging = (props: PackagingProps) => {
    return (
        <div className="flex flex-col w-full my-3 py-3">
            <TitlePageProduct title="EMBALAGENS DISPONIVEIS" />
            <div className="text-sm text-zinc-500">
                Outras possibilades de embalagem
            </div>
            <div className="flex flex-wrap w-full mt-4 gap-4 ">
                {props.packages.map((item, i) => (
                    <div key={item.id} className="flex flex-col justify-end items-center border gap-2 py-2">
                        <Image
                            key={i}
                            src={`${item.image}`}
                            width={100}
                            height={100}
                            alt={`${item.description}`}
                            className="flex items-center justify-center text-wrap text-xs"
                        />
                        <div className="flex items-center justify-center text-wrap text-xs">
                            {item.volume} Litros
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packaging;
