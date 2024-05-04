"use client";
import Image from "next/image";

import mainBg from "/public/main-bg.jpg";
import MainEn from "./components/sections/MainEn";
import ServicesEn from "./components/sections/ServicesEn";
import AboutEn from "./components/sections/AboutEn";
import GeographyEn from "./components/sections/GeographyEn";
import FormEn from "./components/sections/FormEn";
import InternationalServicesEn from "./components/sections/InternationalServicesEn";
import FooterEn from "./components/common/FooterEn";

export default function HomeEng() {
    return (
        <section className="relative text-customGray" id="main">
            <Image
                src={mainBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <MainEn />
            <ServicesEn />
            <AboutEn />
            <GeographyEn />
            <FormEn />
            <InternationalServicesEn />
            <FooterEn />
        </section>
    );
}
