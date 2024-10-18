interface ModoDeUsoProps {
  modoDeUso: string;
}
const ModoDeUso = (props: ModoDeUsoProps) => {
  const renderiza = props.modoDeUso.length > 0;

  function renderizarModoDeUso() {
    return (
      <div className="flex flex-col">
        <h1 className="capitalize text-2xl font-bold mb-2">Modo de Uso</h1>
        <p className="mb-5">{props.modoDeUso}</p>
      </div>
    );
  }
  return renderiza ? <div>{renderizarModoDeUso()}</div> : false;
};

export default ModoDeUso;
