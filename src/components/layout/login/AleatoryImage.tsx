"use client";
import { loginImages as list } from "@/utils/images";
import Image from "next/image";
import { useEffect, useState } from "react";

type LoginImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const AleatoryImage = () => {
  const [image, setImage] = useState<LoginImage | null>(null);

  useEffect(() => {
    setImage(list[Math.floor(Math.random() * list.length)]);
  }, []);

  return (
    <Image
      alt=""
      style={{ width: "100%", height: "100vh" }}
      width={image?.width || 1000}
      height={image?.height || 1000}
      src={image?.src || ""}
    ></Image>
  );
};

export default AleatoryImage;
