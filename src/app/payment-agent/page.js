"use client";
import Image from "next/image";
import altBg from "/public/alt-bg.jpg";

import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });

import Header from "@/components/common/Header";
import PaymentAgent from "./components/PaymentAgent";
import HowItWorks from "./components/HowItWorks";
import ConsultForm from "./components/ConsultForm";
import Footer from "@/components/common/Footer";
import Problems from "./components/Problems";
import GoodSides from "./components/GoodSides";
import YellowForm from "./components/YellowForm";
import PaymentAgentSeo from "./components/PaymentAgentSeo";

export default function Home() {
    return (
        <main className="relative text-customGray">
            <Image
                src={altBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-[75vh] w-screen object-cover shadow-lg"
            />
            <section className="relative max-w-[1690px] px-10 h-[75vh]  mx-auto pt-10 text-black MD:px-5 SM:px-3 ">
                <div className="flex flex-col justify-between h-4/5">
                    <Header />
                    <div className="h-full flex items-center">
                        <h1
                            className={`text-white text-6xl leading-tight ${openSans.className} font-bold 2XL:text-5xl LG:text-5xl MD:text-4xl SM:text-2xl`}
                        >
                            Финансовая логистика
                        </h1>
                    </div>
                </div>
            </section>
            <PaymentAgent />
            <HowItWorks />
            <ConsultForm />
            <Problems />
            <GoodSides />
            <YellowForm />
            <PaymentAgentSeo />
            <Footer />
        </main>
    );
}
