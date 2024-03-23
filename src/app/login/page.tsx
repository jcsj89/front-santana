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
    <div className="flex justify-center items-center w-full max-h-screen">
      <div className="collapse md:w-1/3 lg:w-1/2 md:visible max-h-screen">
        <AleatoryImage />
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2">
        <div className="flex flex-col justify-center items-center  p-10">
          <span>
            <Link href={"/"}>
              <Logo onlyLogo size={120} />
            </Link>
          </span>
          <h1 className="text-5xl m-3 text-center">Santana Quimica</h1>
          <h2 className="text-gray-500 my-3">
            Por favor faca login em sua conta!
          </h2>

          <div className="flex flex-col justify-start mt-10  w-full pt-2 mb-5">
            <label className="mb-2 text-lg text-gray-600" htmlFor="email">
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

          <div className="flex flex-col justify-start w-full ">
            <label className="mb-2 text-lg text-gray-600" htmlFor="password">
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

          <div className="flex w-full justify-end my-3 pb-4">
            <span className="text-sm text-[#DB4437]">Esqueceu a senha?</span>
          </div>

          <div className="flex w-full justify-center border-b pb-7">
            <Button
              className="my-4 text-lg border w-1/3 px-10 py-4 rounded-lg border-green-600 hover:bg-[#0F9D58] hover:text-white duration-200"
              label="Login"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center my-9">
            <p className="mx-4">Nao tem uma conta ?</p>
            <Button
              className="my-4 text-lg border px-10 py-4 "
              label="Criar Conta"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
