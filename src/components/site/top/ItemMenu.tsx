import { lato } from "@/utils/fonts";
import Link from "next/link";

interface ILinks {
  name: string;
  href: string;
  linkClassname?: string;
}

const ItemMenu = (props: ILinks) => {
  return (
    <Link
      className={`${lato.className} ${props.linkClassname || ""}
      `}
      href={props.href}
    >
      {props.name}
    </Link>
  );
};

export default ItemMenu;
