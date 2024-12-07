import { truculenta } from "@/utils/fonts";
import Image from "next/image";

interface LogoProps {
    size?: number;
    alt?: string;
    onlyLogo?: boolean;
    className?: string;
    containerClassName?: string;
}

const Logo = (props: LogoProps) => {
    return (
        <div
            className={`${
                props.containerClassName || ""
            } flex justify-center items-center px-3 py-2`}
        >
            <Image
                className={props.className}
                style={{}}
                width={props?.size || 80}
                height={props?.size || 80}
                alt={props.alt || "Santana"}
                src="/path468.svg"
            ></Image>
            {props.onlyLogo ? (
                false
            ) : (
                <span className={`text-7xl ml-3 ${truculenta.className}`}>
                    santana
                </span>
            )}
        </div>
    );
};

export default Logo;
