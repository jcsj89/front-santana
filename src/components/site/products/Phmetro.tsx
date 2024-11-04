import { cores } from "@/components/site/products/cores.phmetro";

interface PhmetroProps {
    icon?: any;
    ph?: number;
}

const Phmetro = (props: PhmetroProps) => {
    const phList = Array.from({ length: 15 });

    function cor(ph: number) {
        return cores.find((cor) => cor.ph === ph)?.cor;
    }

    function renderizaPhmetro(ph: number) {
        return phList.map((value, i) => (
            <div key={i} className="flex flex-col justify-end flex-1 ">
                {renderizaIcon(i)}
                <div className={`flex h-16 ${cor(i) || ""}`}></div>
                <div className="flex items-center justify-center text-gray-500">
                    {i}
                </div>
            </div>
        ));
    }

    function renderizaIcon(ph: number) {
        if (ph === props.ph) {
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
            <div className="flex w-full">{renderizaPhmetro(props.ph || 7)}</div>
            <div className="flex flex-col">
                <h5 className="text-lg font-bold text-gray-500">
                    Escala do pH
                </h5>
                <p>
                    O pH é uma medida que indica o nível de acidez ou basicidade
                    de uma solução.
                </p>
                <ol>
                    <li>0 - 6 : ACIDO</li>
                    <li>7 : NEUTRO</li>
                    <li>8 - 14 : ALCALINO</li>
                </ol>
            </div>
        </div>
    );
};

export default Phmetro;
