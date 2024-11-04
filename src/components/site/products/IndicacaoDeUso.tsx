interface IndicacaoDeUsoProps {
    indicacaoDeUso: string;
}
const IndicacaoDeUso = (props: IndicacaoDeUsoProps) => {
    const renderiza = props.indicacaoDeUso.length > 0;

    function renderizarIndicacaoDeUso() {
        return (
            <div className="flex flex-col w-full mb-3">
                <h4 className="uppercase text-xl font-bold mb-1">
                    INDICAÇÕES DE USO
                </h4>
                <p className="">{props.indicacaoDeUso}</p>
            </div>
        );
    }
    return renderiza ? <div>{renderizarIndicacaoDeUso()}</div> : false;
};

export default IndicacaoDeUso;
