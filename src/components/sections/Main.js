import React from "react";
import { useDisclosure } from "@nextui-org/react";

import Header from "../common/Header";

import { Open_Sans } from "next/font/google";
import ModalWithForm from "../common/ModalWithForm";
const openSans = Open_Sans({ subsets: ["latin"] });

export default function Main() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <section className="w-full px-10 max-w-[1690px] mx-auto h-screen pt-10 text-black MD:px-5 SM:px-3 ">
                <div className="flex flex-col justify-between h-4/5">
                    <Header />
                    <h1
                        className={`text-white text-[40px] leading-tight ${openSans.className} font-bold 2XL:text-4xl LG:text-3xl SM:text-2xl`}
                    >
                        Превращаем{<br />}глобальные вызовы в{<br />}возможности — ваш{<br />}партнер в области{<br />}
                        внешнеэкономической{<br />}деятельности
                    </h1>
                    <button
                        onClick={onOpen}
                        className="bg-transparent text-3xl font-medium border-[3px] border-black rounded-[20px] w-full max-w-[505px] h-20 XL:h-16 XL:text-[26px] LG:text-2xl LG:max-w-[450px] MD:border-[3px] SM:text-xl SM:border-[2px] MD:bg-white/60 SM:max-w-[300px] hover:bg-gradient-to-r from-[#F6E960] to-[#E4D119]  hover:border-2 hover:scale-[1.01] transition-all"
                    >
                        Получите консультацию
                    </button>
                </div>
            </section>
            <ModalWithForm isOpen={isOpen} onOpenChange={onOpenChange} title={"Получить консультацию"} />
        </>
    );
}
