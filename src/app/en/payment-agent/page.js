"use client";
import Image from "next/image";

import mainBg from "/public/main-bg-eng.jpg";

import MainEn from "../components/sections/MainEn";
import headerBg from "/public/header-bg.jpg";
import HeaderEn from "../components/common/HeaderEn";
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
                src={headerBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-[175px] w-screen object-cover shadow-lg SM:h-[150px]"
            />
            <section className="relative max-w-[1690px] px-10 h-[175px] SM:h-[150px] mx-auto pt-10 text-black MD:px-5 SM:px-3 ">
                <div className=" mx-auto ">
                    <HeaderEn />
                </div>
            </section>
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
