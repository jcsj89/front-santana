"use client";
import { useRouter } from "next/navigation";
import ContactTopHeader from "./ContactTopHeader";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col border-b bg-white text-black border-[#ece9c0] dark:bg-zinc-700">
            <ContactTopHeader />
            <div className="flex flex-col xl:flex-row justify-center sm:justify-evenly  items-center">
                <Logo containerClassName="lg:w-1/3" className="lg:w-24" />

                <NavBar
                    linkClassname="text-sm sm:text-base md:text-lg antialiased text-zinc-950  hover:text-[#004e98] duration-150"
                    navBarClassname="mb-2 sm:my-3 "
                />

                {/* <div className="hidden md:block bg-amber-300">
                    <div className="flex justify-center items-center">
                        <Login />
                        <DarkMode />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Header;

{
    /* <Button
className="flex justify-center items-center p-3 border  border-[#DB4437] bg-[#DB4437] hover:bg-[#fff] hover:text-zinc-900 duration-400 rounded-lg  text-gray-800 uppercase cursor-pointer font-extrabold"
label="SOLICITE UM ORCAMENTO"
onClick={() => router.push("/sobre")}
/> */
}
