interface DilutionDescriptionProps {
  dilution: string;
}
const DilutionDescription = (props: DilutionDescriptionProps) => {
  const renderiza = props.dilution.length > 0;

  function renderizarDilutionDescription() {
    return (
      <div className="flex flex-col">
        <h1 className="capitalize text-2xl font-bold mb-2">Metodo de Diluicao</h1>
        <p className="mb-5">{props.dilution}</p>
      </div>
    );
  }
  return renderiza ? <div>{renderizarDilutionDescription()}</div> : false;
};

export default DilutionDescription;
