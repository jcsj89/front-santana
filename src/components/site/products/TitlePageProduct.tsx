interface TitleProps {
    title: string;
}

{
    /* Title page product
    Este componente renderiza um título para
    uma secao da pagina de um produto   */
}
const TitlePageProduct = (props: TitleProps) => {
    return (
        <h4 className="uppercase text-md lg:text-xl font-bold mt-3 mb-1">
            {props.title}
        </h4>
    );
};

export default TitlePageProduct;
