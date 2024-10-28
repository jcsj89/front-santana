import AboutUsSection from "@/components/site/home/sections/AboutUsSection";
import SectionContact from "@/components/site/home/sections/ContactSection";
import HeroSection from "@/components/site/home/sections/HeroSection";
import KindCarsSection from "@/components/site/home/sections/KindCarsSection";
import QuotesMessages from "@/components/site/home/sections/QuotesMessages";
import WhatWeDo from "@/components/site/home/sections/WhatWeDo";
import SessionBase from "@/components/site/home/SessionBase";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      {/* home page first section - call to orcamento */}
      <SessionBase className="flex-col lg:flex-row py-4 lg:py-10 text-black bg-gradient-to-r from-sky-600 via-sky-700 to-sky-600">
        <HeroSection />
      </SessionBase>

      {/* home page - motivational phrases */}
      <SessionBase
        className={`flex-col justify-center items-center text-black bg-white py-20 border-gray-200`}
      >
        <QuotesMessages />
      </SessionBase>

      {/* home page - about kind of cars us worked */}
      <SessionBase className="bg-amber-100 text-black border-amber-300">
        <KindCarsSection />
      </SessionBase>

      {/* section about us */}
      <SessionBase
        className={`flex-col justify-center items-center
            py-14 border-gray-300
            bg-white
            `}
        font={"truculenta.className"}
      >
        <AboutUsSection />
      </SessionBase>

      {/* home page third section - about kind of products us worked */}
      {/* text-black bg-white - trocar bg e cor texto para testar */}
      <SessionBase
        className={`flex-col justify-center items-center
          bg-gradient-to-r from-sky-600 via-sky-700 to-sky-600
          text-black `}
      >
        <WhatWeDo />
      </SessionBase>

      {/* section contact */}
      <SessionBase className="flex-col justify-center items-center bg-white text-black">
        <SectionContact />
      </SessionBase>
    </main>
  );
}
