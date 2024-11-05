import DilutionDescription from "./DilutionDescription";
import TitlePageProduct from "./TitlePageProduct";

interface DilutionPercentageBarProps {
    percent: number;
    dilution: string;
}

const DilutionPercentageBar = (props: DilutionPercentageBarProps) => {
    const renderiza = props.percent > 0 && props.percent <= 100;
    const percent = props.percent > 50 ? props.percent : 100 - props.percent;
    console.log(percent, " :", props.percent);

    function renderizarDilutionPercentageBar() {
        return (
            <div className="flex flex-col w-full">
                <TitlePageProduct title="Diluicao" />

                <div className="flex flex-col md:flex-row md:justify-between mb-1 font-medium  ">
                    <span className="text-zinc-800 text-xs lg:text-sm">
                        percentual de concentração
                    </span>
                    <span className="font-bold text-center lg:text-lg text-fuchsia-600">{`${props.percent} %`}</span>
                </div>
                {/* Barra percentual de concentracao */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 dark:bg-gray-700">
                    <div
                        style={{ width: `${percent}%` }}
                        className={` bg-fuchsia-500 h-2.5 rounded-full dark:bg-amber-500`}
                    ></div>
                </div>
                <DilutionDescription dilution={props.dilution} />
            </div>
        );
    }
    return renderiza ? renderizarDilutionPercentageBar() : false;
};

export default DilutionPercentageBar;
