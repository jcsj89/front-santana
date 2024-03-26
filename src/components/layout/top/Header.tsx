"use client";
import Button from "@/components/UI/Button";
import DarkMode from "@/components/UI/DarkMode";
import { useRouter } from "next/navigation";
import ContactTopHeader from "./ContactTopHeader";
import Login from "./Login";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col border-b border-[#ece9c0] dark:bg-gray-700">
      <ContactTopHeader />
      <div className="flex flex-col xl:flex-row justify-center sm:justify-evenly lg:justify-between items-center">
        <div className="lg:w-1/3">
          <Logo className="lg:w-24" />
        </div>

        <NavBar />

        <div className="hidden md:block">
          <div className="flex justify-center items-center">
            <Button
              className="flex justify-center items-center p-3 border  border-[#DB4437] bg-[#DB4437] hover:bg-[#fff] hover:text-zinc-900 duration-400 rounded-lg  text-gray-800 uppercase cursor-pointer font-extrabold"
              label="SOLICITE UM ORCAMENTO"
              onClick={() => router.push("/sobre")}
            />
            <Login />
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
