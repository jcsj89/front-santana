import Color from "@/utils/colors";
import { lato, open_Sans } from "@/utils/fonts";
import Link from "next/link";

interface ILinks {
  name: string;
  href: string;
}

const ItemMenu = (props: ILinks) => {
  return (
    <Link
      className={`${lato.className} antialiased text-gray-800 hover:text-[#DB4437] duration-150`}
      href={props.href}
    >
      {props.name}
    </Link>
  );
};

export default ItemMenu;
