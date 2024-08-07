"use client";
import Image from "next/image";

import mainBg from "/public/main-bg.jpg";

import Main from "@/components/sections/Main";
import headerBg from "/public/header-bg.jpg";
import Header from "@/components/common/Header";
import ContactsAndMap from "./components/ContactsAndMap";
import Footer from "@/components/common/Footer";
import BlueForm from "./components/BlueForm";

export default function Contacts() {
    return (
        <main className="relative text-customGray">
            <Image
                src={headerBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-[175px] w-screen object-cover shadow-lg SM:h-[150px]"
            />
            <section className="relative max-w-[1690px] px-10 h-[175px] SM:h-[150px] mx-auto pt-10 text-black MD:px-5 SM:px-3 ">
                <div className=" mx-auto ">
                    <Header />
                </div>
            </section>
            <ContactsAndMap />
            <BlueForm />
            <Footer />
        </main>
    );
}
