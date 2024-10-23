"use client";

import ContactForm from "@/components/form/ContactForm";

const ContactSection = () => {
  return (
    <div className="flex flex-col border p-10 w-full">
      <h1 className="text-4xl uppercase ">Precisa falar conosco ?</h1>

      <div className="flex">
        {/* left column */}
        <div className="flex flex-col w-1/2 border">
          <ContactForm />
         </div>
         
        {/* right column */}
        <div className="flex flex-col w-1/2 border">

        </div>
      </div>


    </div>
  );
};

export default ContactSection;
