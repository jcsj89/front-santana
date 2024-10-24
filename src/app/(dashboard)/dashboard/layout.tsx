import type { Metadata } from "next";

import { open_Sans } from "@/utils/fonts";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Santana Quimica",
  description: "Santana Quimica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="pt-BR">
      <div className={`flex justify-center h-screen w-full `}>{children}</div>
    </div>
  );
}
