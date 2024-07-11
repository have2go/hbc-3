"use client";
import Image from "next/image";

import mainBg from "/public/main-bg-eng.jpg";

import MainEn from "../components/sections/MainEn";
import PaymentAgentEn from "./components/PaymentAgentEn";
import HowItWorksEn from "./components/HowItWorksEn";
import ConsultFormEn from "./components/ConsultFormEn";
import ProblemsEn from "./components/ProblemsEn";
import GoodSidesEn from "./components/GoodSidesEn";
import YellowFormEn from "./components/YellowFormEn";
import PaymentAgentSeoEn from "./components/PaymentAgentSeoEn";
import FooterEn from "../components/common/FooterEn";

export default function Home() {
    return (
        <main className="relative text-customGray">
            <Image
                src={mainBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <MainEn />
            <PaymentAgentEn />
            <HowItWorksEn />
            <ConsultFormEn />
            <ProblemsEn />
            <GoodSidesEn />
            <YellowFormEn />
            <PaymentAgentSeoEn />
            <FooterEn />
        </main>
    );
}
