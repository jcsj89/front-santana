interface ISessionBase {
  className?: string;
  children?: any;
  font?: string;
}

const SessionBase = (props: ISessionBase) => {
  return (
    <div
      className={`${props.className} ${props.font} flex border-b w-full py-10`}
    >
      {props.children}
    </div>
  );
};

export default SessionBase;
