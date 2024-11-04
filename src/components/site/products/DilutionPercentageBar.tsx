interface DilutionPercentageBarProps {
    percent: number;
}

const DilutionPercentageBar = (props: DilutionPercentageBarProps) => {
    const renderiza = props.percent > 0 && props.percent <= 100;
    const w = "w-[34%]";

    function renderizarDilutionPercentageBar() {
        return (
            <div className="flex flex-col w-full">
                <div className="flex justify-between mb-1 text-base font-medium text-amber-700 dark:text-amber-500">
                    <span>{`${props.percent} %`}</span>
                    <span className="text-zinc-800">
                        percentual de concentracao
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3 dark:bg-gray-700">
                    <div
                        style={{ width: props.percent }}
                        className={` bg-purple-600 h-2.5 rounded-full dark:bg-purple-500`}
                    ></div>
                </div>
            </div>
        );
    }
    return renderiza ? renderizarDilutionPercentageBar() : false;
};

export default DilutionPercentageBar;
