"use client";
import Image from "next/image";

import mainBg from "/public/main-bg-eng.jpg";

import Main from "@/components/sections/Main";
import ContactsAndMap from "./components/ContactsAndMapEn";
import Footer from "@/components/common/Footer";

import MainEn from "../components/sections/MainEn";
import ContactsAndMapEn from "./components/ContactsAndMapEn";
import BlueFormEn from "./components/BlueFormEn";
import FooterEn from "../components/common/FooterEn";

export default function ContactsEn() {
    return (
        <section className="relative text-customGray">
            <Image
                src={mainBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <MainEn />
            <ContactsAndMapEn />
            <BlueFormEn />
            <FooterEn />
        </section>
    );
}
