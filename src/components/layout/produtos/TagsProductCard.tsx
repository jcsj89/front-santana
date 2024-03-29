interface TagsProductCardProps {
  tags: string[];
}

const TagsProductCard = (props: TagsProductCardProps) => {
  const colors = [
    "bg-[#00acee] text-white",
    "bg-[#f5cb5c] text-white",
    "bg-[#00acee] text-white",
    "bg-[#0F9D58] text-white",
    "bg-[#DB4437] text-white",
    "bg-[#c3d5cc] text-black",
    "bg-[#ece9c0] text-black",
    "bg-[#fb8500] text-white",
    "bg-[#E76F51] text-white",
    "bg-[#264653] text-white",
  ];

  

  function renderizarTags(tags: string[]) {
    return (
      <>
        {tags.length > 0 &&
          tags?.map((tag) =>
            tag.length > 0 ? (
              <span
                className={`font-bold text-center rounded-lg px-1 m-1 border text-sm lowercase ${
                  colors[Math.floor(Math.random() * colors.length)]
                }`}
                key={Math.random() * Math.random()}
              >
                {tag}
              </span>
            ) : (
              false
            )
          )}
      </>
    );
  }

  return (
    <div className="flex justify-center items-center flex-wrap">
      {props?.tags ? renderizarTags(props.tags) : false}
    </div>
  );
};

export default TagsProductCard;
