import { lato } from "@/utils/fonts";
import Link from "next/link";

interface ILinks {
  name: string;
  href: string;
}

const ItemMenu = (props: ILinks) => {
  return (
    <Link
      className={`${lato.className} sm:text-lg md:text-xl antialiased text-zinc-950  hover:text-[#004e98] duration-150`}
      href={props.href}
    >
      {props.name}
    </Link>
  );
};

export default ItemMenu;
