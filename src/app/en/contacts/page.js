"use client";
import Image from "next/image";

import mainBg from "/public/main-bg-eng.jpg";

import Main from "@/components/sections/Main";
import ContactsAndMap from "./components/ContactsAndMapEn";
import Footer from "@/components/common/Footer";
import headerBg from "/public/header-bg.jpg";
import HeaderEn from "../components/common/HeaderEn";
import MainEn from "../components/sections/MainEn";
import ContactsAndMapEn from "./components/ContactsAndMapEn";
import BlueFormEn from "./components/BlueFormEn";
import FooterEn from "../components/common/FooterEn";

export default function ContactsEn() {
    return (
        <section className="relative text-customGray">
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
            <ContactsAndMapEn />
            <BlueFormEn />
            <FooterEn />
        </section>
    );
}
