import { IconMoon, IconSunSolid } from "@/icons";
import { useState } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState<boolean>(false);
  const IconWidth = "w-6 h-6";

  function changeDark() {
    dark ? setDark(false) : setDark(true);
  }

  return dark ? (
    <div onClick={changeDark} className="flex mx-5 items-center justify-center">
      <span className="ml-4 text-[#7209b7]">{IconMoon(IconWidth)}</span>
      <div className="flex items-center justify-start px-1 mx-1 w-16 h-8 rounded-full border border-zinc-900 bg-gray-600">
        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-zinc-800"></div>
      </div>
      <span className="mr-1 text-[#6e6c66]">{IconSunSolid(IconWidth)}</span>
    </div>
  ) : (
    <div onClick={changeDark} className="flex mx-5 items-center justify-center">
      <span className="ml-4 text-[#6e6c66]">{IconMoon(IconWidth)}</span>
      <div className="flex items-center justify-end px-1 mx-1 w-16 h-8 rounded-full border border-stone-400">
        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-zinc-400"></div>
      </div>
      <span className="mr-1 text-[#fcba04]">{IconSunSolid(IconWidth)}</span>
    </div>
  );
};

export default DarkMode;
