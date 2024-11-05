import TitlePageProduct from "./TitlePageProduct";

interface IndicacaoDeUsoProps {
    indicacaoDeUso: string;
}
const IndicacaoDeUso = (props: IndicacaoDeUsoProps) => {
    const renderiza = props.indicacaoDeUso.length > 0;

    function renderizarIndicacaoDeUso() {
        return (
            <div className="flex flex-col w-full mb-3">
                <TitlePageProduct title="INDICAÇÕES DE USO" />
                <p className="text-sm md:text-base text-justify">
                    {props.indicacaoDeUso}
                </p>
            </div>
        );
    }
    return renderiza ? <div>{renderizarIndicacaoDeUso()}</div> : false;
};

export default IndicacaoDeUso;
