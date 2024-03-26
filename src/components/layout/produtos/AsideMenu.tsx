import AsideGroup from "./AsideGroup";

const AsideMenu = () => {
  const ativado = ["Ativado LS", "ativado 110", "ativado 220"];
  return (
    <div className="h-screen px-2 border-r mr-2 text-right">
      <AsideGroup title="Linha Automotiva" titleClassName="mb-4" />
      <AsideGroup
        title="Linha Comum"
        subTitle="Diluicao 1: 10"
        items={ativado}
        titleClassName="mb-4"
      />
      <ul>
        <li>Linha Automotiva e industrial</li>
        <li>Ativado</li>
        <li>Ativado 110</li>
        <li>Sanq Chassis 110</li>
      </ul>
    </div>
  );
};

export default AsideMenu;
