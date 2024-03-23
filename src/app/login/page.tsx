"use client";
import Button from "@/components/UI/Button";
import AleatoryImage from "@/components/layout/login/AleatoryImage";
import Logo from "@/components/layout/top/Logo";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChange(e: any) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  return (
    <div className="flex flex-col md:flex-row w-full  h-screen  flex-wrap">
      {/* Left Side */}
      <div className="hidden lg:block lg:w-1/2 2xl:w-1/3">
        <AleatoryImage />
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-center p-2 w-full lg:w-1/2 2xl:w-2/3">
        <div className="flex flex-col justify-center items-center ">
          <Link className="lg:mb-4" href={"/"}>
            <Logo onlyLogo className="w-20 sm:w-28 md:w-32 lg:w-40" />
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl lg:m-2 text-center">
            Santana Quimica
          </h1>

          <h2 className="text-gray-500 my-2">
            Por favor use suas credenciais para fazer login em sua conta!
          </h2>
        </div>

        <div className="flex flex-col w-full p-3 mt-2 md:px-8 lg:px-12">
          <div className="flex flex-col justify-start w-full ">
            <label
              className="md:text-lg text-gray-600 dark:text-white"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="h-12 bg-gray-100 focus:bg-white rounded-lg border hover:border-[#0F9D58] focus:border-[#0F9D58] hover:outline-none focus:outline-none pl-2 duration-200"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              type="email"
              required
              autoFocus
            />
          </div>

          <div className="flex flex-col justify-start w-full mt-2 lg:mt-5">
            <label
              className="md:text-lg text-gray-600 dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="h-12 bg-gray-100 focus:bg-white rounded-lg border hover:border-[#0F9D58] focus:border-[#0F9D58] hover:outline-none focus:outline-none pl-2 duration-200 "
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              type="password"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between items-center my-1 lg:my-3 lg:pb-3 md:px-8 lg:px-12">
          <div>
            <Button
              className="m-5 md:m-0 text-lg border w-full px-10 py-4 rounded-lg border-green-600 hover:bg-[#0F9D58] hover:text-white duration-200"
              label="Login"
            />
          </div>

          <div className="flex flex-col items-end w-full">
            <div>
              <span className="text-sm  mr-3">Esqueceu a senha?</span>
              <Link
                className="text-[#DB4437] hover:text-red-700 duration-200"
                href={"/"}
              >
                Recuperar senha
              </Link>
            </div>
            <div>
              <span className="text-sm  mr-3">Nao tem uma conta ?</span>
              <Link
                className="text-[#4285F4] hover:text-blue-700 duration-200"
                href={"/"}
              >
                Criar conta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
