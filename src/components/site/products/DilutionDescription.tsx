interface DilutionDescriptionProps {
    dilution: string;
}

const DilutionDescription = (props: DilutionDescriptionProps) => {
    const renderiza = props.dilution.length > 0;

    function renderizarDilutionDescription() {
        return (
            <div className="flex flex-col w-full mb-2">

                <p className="">{props.dilution}</p>
            </div>
        );
    }
    return renderiza ? renderizarDilutionDescription() : false;
};

export default DilutionDescription;
