import { corFundo } from "@/components/site/products/cores.phmetro";

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
            <h4 className="text-xl font-bold mb-1">pH</h4>
            <div className="flex w-full flex-wrap">
                {renderizaPhmetro(props.ph || 7)}
            </div>
            <div className="flex flex-col">
                <h5 className="text-lg font-bold text-gray-500">
                    Escala do pH
                </h5>
                <p className="text-xs lg:text-base">
                    O pH é uma medida que indica o nível de acidez ou basicidade
                    de uma solução.
                </p>

                <div className="flex flex-col items-center lg:items-start my-4">
                    <div className="flex gap-4 w-full border">
                        <div className="text-right border">ACIDO</div>
                        <div className="text-left border">0 - 6</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-right border">NEUTRO</div>
                        <div className="text-left border">7 - 8</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-right border">ACIDO</div>
                        <div className="text-left border">8 - 14</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 grid-rows-3 gap-4 bg-blue-500">
                    <div className="bg-sky-300">ACIDO</div>
                    <div className="bg-sky-300">0 - 6</div>
                    <div className="bg-sky-300">NEUTRO</div>
                    <div className="bg-sky-300">7</div>
                    <div className="bg-sky-300">ALCALINO</div>
                    <div className="bg-sky-300">8 - 14</div>
                </div>

                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div>1</div>
                    <div>2</div>
                    <div className="row-start-2">3</div>
                    <div className="row-start-2">4</div>
                    <div className="row-start-3">5</div>
                    <div className="row-start-3">6</div>
                </div>
            </div>
        </div>
    );
};

export default Phmetro;
