"use client";
import Image from "next/image";

import mainBg from "/public/main-bg.jpg";

import About from "@/components/sections/About";
import Main from "@/components/sections/Main";
import Services from "@/components/sections/Services";
import Form from "@/components/sections/Form";
import Reviews from "@/components/sections/Reviews";
import InternationalServices from "@/components/sections/InternationalServices";
import Footer from "@/components/common/Footer";
import Geography from "@/components/sections/Geography";

import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Home() {
    const { height, width } = useWindowDimensions();

    return (
        <main className="relative text-customGray">
            <Image
                src={mainBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <Main />
            <Services />
            <About />
            {width > 768 && <Geography />}
            <Form />
            <Reviews />
            <InternationalServices />
            <Footer />
        </main>
    );
}
