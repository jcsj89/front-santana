import { loginImages as list } from "@/utils/images";
import Image from "next/image";

const AleatoryImage = () => {
  var aleatory = list[Math.floor(Math.random() * list.length)];

  return (
    <Image
      alt=""
      style={{ width: "100%", height: "auto" }}
      width={aleatory.width}
      height={aleatory.height}
      src={aleatory.src}
    ></Image>
  );
};

export default AleatoryImage;
