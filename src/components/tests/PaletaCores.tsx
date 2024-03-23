interface CoresProps {
  cor: string;
  nome: string;
}

const PaletaCores = (props: CoresProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="flex w-20 h-20 flex-wrap justify-center items-center">
        {props.nome}
      </h3>
      <div className={` ${props.cor} w-20 h-32`}></div>
    </div>
  );
};

export default PaletaCores;
