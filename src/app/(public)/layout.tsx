import Footer from "@/components/site/footer/Footer";
import Header from "@/components/site/top/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Santana Quimica",
    description: "Santana Quimica",
};

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // flex w-full flex-col min-h-screen mx-auto
    return (
        <div className={`flex w-full flex-col min-h-screen mx-auto`}>
            <div className="flex-1">
                <Header />
                <main className="">{children}</main>
            </div>
            <Footer />
        </div>
    );
}
