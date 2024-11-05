interface DilutionPercentageBarProps {
    percent: number;
}

const DilutionPercentageBar = (props: DilutionPercentageBarProps) => {
    const renderiza = props.percent > 0 && props.percent <= 100;
    const percent = props.percent > 50 ? props.percent : 100 - props.percent;
    console.log(percent, " :", props.percent);

    function renderizarDilutionPercentageBar() {
        return (
            <div className="flex flex-col w-full">
                <h4 className="uppercase text-xl font-bold mb-1">Diluicao</h4>
                <div className="flex justify-between mb-1 text-base font-medium text-amber-700 dark:text-amber-500">
                    <span className="text-zinc-800">
                        percentual de concentracao
                    </span>
                    <span>{`${props.percent} %`}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3 dark:bg-gray-700">
                    <div
                        style={{ width: `${percent}%` }}
                        className={` bg-amber-600 h-2.5 rounded-full dark:bg-amber-500`}
                    ></div>
                </div>
            </div>
        );
    }
    return renderiza ? renderizarDilutionPercentageBar() : false;
};

export default DilutionPercentageBar;
