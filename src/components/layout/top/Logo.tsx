import { truculenta } from "@/utils/fonts";
import Image from "next/image";

interface LogoProps {
  size?: number;
  alt?: string;
  onlyLogo?: boolean;
}

const Logo = (props: LogoProps) => {
  return (
    <div className="flex justify-center items-center px-3 py-2">
      <Image
        className=""
        style={{}}
        width={props?.size || 80}
        height={props?.size || 80}
        alt={props.alt || "Santana"}
        src="/path468.svg"
      ></Image>
      {props.onlyLogo ? (
        false
      ) : (
        <span className={`text-7xl ml-3 ${truculenta.className}`}>santana</span>
      )}
    </div>
  );
};

export default Logo;
