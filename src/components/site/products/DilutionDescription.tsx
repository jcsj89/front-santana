interface DilutionDescriptionProps {
    dilution: string;
}

const DilutionDescription = (props: DilutionDescriptionProps) => {
    const renderiza = props.dilution.length > 0;

    function renderizarDilutionDescription() {
        return (
            <div className="flex w-full text-sm md:text-base text-justify text-zinc-600">
                <p className="">{props.dilution}</p>
            </div>
        );
    }
    return renderiza ? renderizarDilutionDescription() : false;
};

export default DilutionDescription;
