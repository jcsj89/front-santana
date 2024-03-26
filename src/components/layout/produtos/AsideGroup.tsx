interface AsideGroupProps {
  title: string;
  subTitle?: string;
  items?: string[];
  titleClassName?: string;
  subTitleClassName?: string;
  item?: string;
}

const AsideGroup = (props: AsideGroupProps) => {
  return (
    <div>
      <h2 className={`lg:text-lg text-gray-800 ${props.titleClassName}`}>
        {props.title}
      </h2>
      <h3 className={`text-gray-600 ${props.subTitleClassName}`}>
        {props.subTitle}
      </h3>
      {props.items ? (
        <ul>
          {props.items?.map((link) => (
            <li className="uppercase" key={Math.random() * Math.random()}>
              {link}
            </li>
          ))}
        </ul>
      ) : (
        false
      )}
    </div>
  );
};

export default AsideGroup;
