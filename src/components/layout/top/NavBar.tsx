import ItemMenu from "./ItemMenu";

interface ILinks {
  name: string;
  href: string;
}

const links: ILinks[] = [
  { name: "Home", href: "/" },
  { name: "Produtos", href: "/produtos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

const NavBar = () => {
  function renderizarLinks() {
    return links?.map((link, i) => (
      <li className="ml-3 sm:ml-9 first:ml-0" key={i * Math.random()}>
        <ItemMenu name={link.name} href={link.href} />
      </li>
    ));
  }

  return (
    <nav className="flex items-center justify-center mb-3 sm:my-3 flex-wrap">
      <ul className="flex flex-wrap">{renderizarLinks()}</ul>
    </nav>
  );
};

export default NavBar;
