"use client";
import Image from "next/image";

import mainBg from "/public/main-bg.jpg";

import Main from "@/components/sections/Main";
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
                src={mainBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <Main />
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
