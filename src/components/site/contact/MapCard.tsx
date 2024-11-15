const MapCard = () => {
    return (
        <div className="flex flex-col justify-center p-7">
            <div className="text-2xl my-3 font-black">Localizacao</div>
            <div className="border h-80 xl:w-[600px] xl:h-[450px] ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d427.91525693045116!2d-49.387286160600326!3d-20.663099130301767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bd00756b860dbf%3A0x2e6f8e2a95f93c31!2sSantana%20Qu%C3%ADmica!5e0!3m2!1sen!2sbr!4v1731700062756!5m2!1sen!2sbr"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: 0, position: "inherit" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default MapCard;
