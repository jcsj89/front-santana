import PaletaCores from "@/components/tests/PaletaCores";
import { lato, montserrat, open_Sans, roboto, truculenta } from "@/utils/fonts";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1>Hello Santana Quimica</h1>
      <div className="bg-orange-500 cursor-pointer m-5 p-3">
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center">
        <h2 className="mb-3">Paleta de cores </h2>
        <div className="flex flex-wrap justify-center items-center">
          <PaletaCores nome=" #ccc" cor="bg-[#ccc]" />
          <PaletaCores nome=" #4285F4" cor="bg-[#4285F4]" />
          <PaletaCores nome=" #DB4437" cor="bg-[#DB4437]" />
          <PaletaCores nome=" #F4B400" cor="bg-[#F4B400]" />
          <PaletaCores nome=" #0F9D58" cor="bg-[#0F9D58]" />
          <PaletaCores nome=" #c3d5cc" cor="bg-[#c3d5cc]" />
          <PaletaCores nome=" #ece9c0" cor="bg-[#ece9c0]" />
          <PaletaCores nome=" #fb8500" cor="bg-[#fb8500]" />
          <PaletaCores nome=" #E76F51" cor="bg-[#E76F51]" />
          <PaletaCores nome=" #F4A261" cor="bg-[#F4A261]" />
          <PaletaCores nome=" #E9C46A" cor="bg-[#E9C46A]" />
          <PaletaCores nome=" #2A9D8F" cor="bg-[#2A9D8F]" />
          <PaletaCores nome=" #264653" cor="bg-[#264653]" />
          <PaletaCores nome=" #f5cb5c" cor="bg-[#f5cb5c]" />
          <PaletaCores nome=" #004e98" cor="bg-[#004e98]" />

          <PaletaCores nome=" #e9f3ff" cor="bg-[#e9f3ff]" />
          <PaletaCores nome=" #008645" cor="bg-[#008645]" />
          <PaletaCores nome=" #00acee" cor="bg-[#00acee]" />
        </div>
      </div>

      <div className="flex flex-col flex-wrap justify-center items-center mt-4">
        <h2 className="mb-3">Tipografia</h2>
        <div className="flex flex-wrap justify-center items-center m-7">
          <p className={`${roboto.className} pb-3`}>
            <h1>roboto</h1>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p className={`${truculenta.className} pb-3`}>
            <h1>truculenta</h1>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p className={`${open_Sans.className} pb-3`}>
            <h1>open_Sans</h1>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p className={`${lato.className} pb-3`}>
            <h1>lato</h1>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p className={`${montserrat.className} pb-3`}>
            <h1>montserrat</h1>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p className={roboto.className}>
            <h1>roboto</h1>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>


      </div>
    </main>
  );
}
