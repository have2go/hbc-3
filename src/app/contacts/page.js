"use client";
import Image from "next/image";

import mainBg from "/public/main-bg.jpg";

import Main from "@/components/sections/Main";
import ContactsAndMap from "./components/ContactsAndMap";
import Footer from "@/components/common/Footer";
import BlueForm from "./components/BlueForm";

export default function Contacts() {
    return (
        <main className="relative text-customGray">
            <Image
                src={mainBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <Main />
            <ContactsAndMap />
            <BlueForm />
            <Footer />
        </main>
    );
}
