import AboutUsSection from "@/components/site/home/sections/AboutUsSection";
import SectionContact from "@/components/site/home/sections/ContactSection";
import HeroSection from "@/components/site/home/sections/HeroSection";
import KindCarsSection from "@/components/site/home/sections/KindCarsSection";
import QuotesMessages from "@/components/site/home/sections/QuotesMessages";
import WhatWeDo from "@/components/site/home/sections/WhatWeDo";
import SessionBase from "@/components/site/home/SessionBase";

export default function Home() {
  // flex flex-col items-center justify-center
  return (
    <main className="flex flex-col items-center justify-center lg:bg-repeat-y">
      {/* home page first section - call to orcamento */}
      <SessionBase className="flex-col lg:flex-row lg:py-6 py-4  dark:bg-slate-600 lg:bg-[url('/img/bg-1.png')] bg-no-repeat">
        <HeroSection />
      </SessionBase>

      {/* home page second section - about kind of cars us worked */}
      <SessionBase className="bg-amber-100 border-amber-300">
        <KindCarsSection />
      </SessionBase>

      {/* home page fourth section - motivational phrases */}
      <SessionBase
        className={`flex-col justify-center items-center text-black bg-white py-20 border-gray-200`}
      >
        <QuotesMessages />
      </SessionBase>

      {/* home page third section - about kind of products us worked */}
      {/* text-black bg-white - trocar bg e cor texto para testar */}
      <SessionBase
        className={`flex-col justify-center items-center text-gray-300 bg-slate-700 py-8 border-slate-900`}
      >
        <WhatWeDo />
      </SessionBase>

      {/* section about us */}
      <SessionBase
        className={`flex-col justify-center items-center bg-white py-8 border-gray-200`}
        font={"truculenta.className"}
      >
        <AboutUsSection />
      </SessionBase>

      

      {/* section contact */}
      <SessionBase className="flex-col justify-center items-center bg-white text-black">
        <SectionContact />
      </SessionBase>
    </main>
  );
}
