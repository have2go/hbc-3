import React from "react";
import { useDisclosure } from "@nextui-org/react";

import Header from "../common/HeaderEn";

import { Open_Sans, Stick_No_Bills } from "next/font/google";
import ModalWithFormEn from "../common/ModalWithFormEn";
const openSans = Open_Sans({ subsets: ["latin"] });
const stickNoBills = Stick_No_Bills({ subsets: ["latin"] });

export default function MainEn() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <section className="w-full px-10 max-w-[1690px] mx-auto h-screen pt-10 text-black MD:px-5 SM:px-3 ">
                <div className="flex flex-col justify-between h-4/5">
                    <Header />
                    <h1
                        className={`text-white text-[40px] leading-tight ${stickNoBills.className} font-bold 2XL:text-4xl LG:text-3xl SM:text-2xl`}
                    >
                        Your gateway to the Russian{<br />}market: tailored customs and{<br />}distribution solutions to
                        expand{<br />}your business horizons
                    </h1>
                    <button
                        onClick={onOpen}
                        className="bg-transparent text-3xl font-medium border-[5px] border-white text-white rounded-[20px] w-full max-w-[505px] h-20 XL:h-16 XL:text-[26px] LG:text-2xl LG:max-w-[450px] MD:border-[3px] SM:text-xl SM:border-[2px] MD:bg-white/60 SM:max-w-[300px]"
                    >
                        Get a free consultation
                    </button>
                </div>
            </section>
            <ModalWithFormEn isOpen={isOpen} onOpenChange={onOpenChange} title={"Get a free consultation"} />
        </>
    );
}
