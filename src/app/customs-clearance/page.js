"use client";
import Image from "next/image";
import mainBg from "/public/main-bg.jpg";
import Main from "@/components/sections/Main";
import Footer from "@/components/common/Footer";
import Customs from "./components/Customs";
import Services from "./components/Services";
import Stages from "./components/Stages";
import Docs from "./components/Docs";
import CustomsSeo from "./components/CustomsSeo";

export default function Home() {
    return (
        <main className="relative text-customGray">
            <Image
                src={mainBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <Main />
            <Customs />
            <Services />
            <Stages />
            <Docs />
            <CustomsSeo />
            <Footer />
        </main>
    );
}
