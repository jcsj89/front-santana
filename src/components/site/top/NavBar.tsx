import ItemMenu from "./ItemMenu";

interface INavBar {
    linkClassname?: string;
    navBarClassname?: string;
}

interface ILinks {
    name: string;
    href: string;
}

const links: ILinks[] = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/produtos" },
    //   { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
];

const NavBar = (props: INavBar) => {
    function renderizarLinks() {
        return links?.map((link, i) => (
            <li
                className="ml-3 sm:ml-6 md:ml-7 first:ml-0"
                key={i * Math.random()}
            >
                <ItemMenu
                    linkClassname={props.linkClassname}
                    name={link.name}
                    href={link.href}
                />
            </li>
        ));
    }

    return (
        <nav
            className={`flex items-center justify-center flex-wrap ${
                props.navBarClassname || ""
            }`}
        >
            <ul className="flex flex-wrap">{renderizarLinks()}</ul>
        </nav>
    );
};

export default NavBar;
