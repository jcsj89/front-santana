import LinkPage from "@/components/UI/LinkPage";
import { IconUser } from "@/icons";

import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center border-l ml-5 h-8 hover:text-[#4285F4] duration-200">
      <span className="mx-2">{IconUser()}</span>
      <LinkPage href="/login" key={Math.random() * Math.random()}>
        Login
      </LinkPage>
    </div>
  );
};

export default Login;
