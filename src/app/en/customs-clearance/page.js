"use client";
import Image from "next/image";
import headerBg from "/public/header-bg.jpg";
import HeaderEn from "../components/common/HeaderEn";
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
                src={headerBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-[175px] w-screen object-cover shadow-lg SM:h-[150px]"
            />
            <section className="relative max-w-[1690px] px-10 h-[175px] SM:h-[150px] mx-auto pt-10 text-black MD:px-5 SM:px-3 ">
                <div className=" mx-auto ">
                    <HeaderEn />
                </div>
            </section>
            <CustomsEn />
            <ServicesEn />
            <StagesEn />
            <DocsEn />
            <CustomsSeoEn />
            <FooterEn />
        </main>
    );
}
