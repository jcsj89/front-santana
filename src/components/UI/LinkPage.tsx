import Link from "next/link";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const LinkPage = (props: LinkProps) => {
  return <Link className={props.className} href={props.href}>
    {props.children}
  </Link>;
};

export default LinkPage;
