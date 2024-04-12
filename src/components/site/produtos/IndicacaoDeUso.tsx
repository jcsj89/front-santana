interface IndicacaoDeUsoProps {
  indicacaoDeUso: string;
}
const IndicacaoDeUso = (props: IndicacaoDeUsoProps) => {
  const renderiza = props.indicacaoDeUso.length > 0;

  function renderizarIndicacaoDeUso() {
    return (
      <div className="flex flex-col">
        <h1 className="capitalize text-2xl font-bold mb-2">Indicacao de Uso</h1>
        <p className="mb-5">{props.indicacaoDeUso}</p>
      </div>
    );
  }
  return renderiza ? <div>{renderizarIndicacaoDeUso()}</div> : false;
};

export default IndicacaoDeUso;
