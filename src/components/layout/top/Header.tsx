"use client";
import Button from "@/components/UI/Button";
import ContactTopHeader from "./ContactTopHeader";
import Logo from "./Logo";
import NavBar from "./NavBar";
import LinkPage from "@/components/UI/LinkPage";
import { IconBeaker } from "@/icons";
import { useRouter } from "next/navigation";
import DarkMode from "@/components/UI/DarkMode";
import Login from "./Login";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col border-b mb-2 border-[#ece9c0] dark:bg-gray-700">
      <ContactTopHeader />
      <div className="flex flex-col lg:flex-row justify-center sm:justify-evenly lg:justify-between items-center">
        <div className="lg:w-1/3">
          <Logo />
        </div>

        <NavBar />

        <div className="flex w-1/3 justify-end items-center collapse lg:visible">
          <Button
            className="flex justify-center items-center mb-2 sm:mb-0 border border-[#db4437] hover:bg-[#f12948] hover:text-gray-100 duration-200 rounded-lg p-4  text-gray-800 uppercase cursor-pointer font-extrabold"
            label="SOLICITE UM ORCAMENTO"
            onClick={() => router.push("/sobre")}
          />
          <Login />
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Header;
