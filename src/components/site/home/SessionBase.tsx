interface ISessionBase {
  className?: string;
  children?: any;
}

const SessionBase = (props: ISessionBase) => {
  return (
    <div className={`${props.className} flex border-b w-full py-10`}>
      {props.children}
    </div>
  );
};

export default SessionBase;
