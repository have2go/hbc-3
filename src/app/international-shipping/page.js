"use client";
import Image from "next/image";
import mainBg from "/public/main-bg.jpg";
import Main from "@/components/sections/Main";
import headerBg from "/public/header-bg.jpg";
import altBg from "/public/alt-bg.jpg";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });

import { useDisclosure } from "@nextui-org/react";
import ModalWithForm from "@/components/common/ModalWithForm";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Shipping from "./components/Shipping";
import Air from "./components/Air";
import Rail from "./components/Rail";
import Multimodal from "./components/Multimodal";
import Auto from "./components/Auto";

export default function Home() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <main className="relative text-customGray">
            <Image
                src={altBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-[75vh] w-screen object-cover shadow-lg"
            />
            <section className="relative max-w-[1690px] px-10 h-[75vh]  mx-auto pt-10 text-black MD:px-5 SM:px-3 ">
                <div className="flex flex-col justify-between h-4/5">
                    <Header />
                    <div className="h-full flex items-center">
                        <h1
                            className={`text-white text-6xl leading-tight ${openSans.className} font-bold 2XL:text-5xl LG:text-5xl MD:text-4xl SM:text-2xl`}
                        >
                            Международные перевозки
                        </h1>
                    </div>
                </div>
            </section>
            <Shipping />
            <Auto />
            <Air />
            <Rail />
            <Multimodal />
            <div className="py-10 SM:py-5"></div>
            <Footer />
            <ModalWithForm isOpen={isOpen} onOpenChange={onOpenChange} title={"Получить консультацию"} />
        </main>
    );
}
