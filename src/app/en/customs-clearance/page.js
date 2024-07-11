"use client";
import Image from "next/image";
import mainBg from "/public/main-bg-eng.jpg";
import MainEn from "../components/sections/MainEn";
import FooterEn from "../components/common/FooterEn";
import CustomsEn from "./components/CustomsEn";
import ServicesEn from "./components/ServicesEn";
import StagesEn from "./components/StagesEn";
import DocsEn from "./components/DocsEn";
import CustomsSeoEn from "./components/CustomsSeoEn";

export default function Home() {
    return (
        <main className="relative text-customGray">
            <Image
                src={mainBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <MainEn />
            <CustomsEn />
            <ServicesEn />
            <StagesEn />
            <DocsEn />
            <CustomsSeoEn />
            <FooterEn />
        </main>
    );
}
