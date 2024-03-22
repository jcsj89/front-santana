import Image from "next/image";
import { truculenta } from "@/utils/fonts";

const Logo = () => {
  return (
    <div className="flex justify-center items-center px-3 py-2">
      <Image
        className=""
        style={{}}
        width={80}
        height={80}
        alt=""
        src="/path468.svg"
      ></Image>
      <span className={`text-7xl ml-3 ${truculenta.className}`}>santana</span>
    </div>
  );
};

export default Logo;
