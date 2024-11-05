import { corFundo } from "@/components/site/products/cores.phmetro";
import TitlePageProduct from "./TitlePageProduct";

interface PhmetroProps {
    icon?: any;
    ph?: number;
}

const Phmetro = (props: PhmetroProps) => {
    const phList = Array.from({ length: 15 });
    const phValue = Math.floor(props.ph as number);

    function renderizaPhmetro(ph: number) {
        return phList.map((value, i) => (
            <div key={i} className="flex flex-col justify-end flex-1 flex-wrap">
                {renderizaIcon(i)}
                <div
                    className={`flex h-14 lg:h-20 flex-wrap ${
                        corFundo(i) || ""
                    }`}
                ></div>
                <div className="flex items-center justify-center text-gray-500 text-xs lg:text-base flex-wrap">
                    {i}
                </div>
            </div>
        ));
    }

    function renderizaIcon(ph: number) {
        if (ph === phValue) {
            return (
                <div className="flex items-center justify-center pb-3 text-zinc-800">
                    {props.icon}
                </div>
            );
        } else {
            return false;
        }
    }

    return (
        <div className="flex flex-col w-full">
            <TitlePageProduct title="pH" />
            <p className="text-xs lg:text-base text-justify">
                O pH é uma medida que indica o nível de acidez ou alcalinidade
                de uma solução.
            </p>
            <div className="flex w-full flex-wrap">
                {renderizaPhmetro(props.ph || 7)}
            </div>
            <div className="flex flex-col">
                <h5 className="text-base lg:text-lg font-bold text-gray-400 mt-3 mb-2">
                    Parametros da escala do pH
                </h5>
                <div className="grid grid-cols-2 grid-rows-3 gap-1 lg:gap-2 lg:w-1/2 2xl:w-1/3 text-sm lg:text-base">
                    <div className=" text-left">Ácido:</div>
                    <div className="">0 - 6</div>
                    <div className=" text-left">Neutro:</div>
                    <div className="">7</div>
                    <div className=" text-left">Alcalino:</div>
                    <div className="">8 - 14</div>
                </div>
            </div>
        </div>
    );
};

export default Phmetro;
