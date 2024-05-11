"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/common/Header";
import ModalWithForm from "@/components/common/ModalWithForm";
import Footer from "@/components/common/Footer";
import notFoundBg from "/public/not-found.jpg";
import notFoundIcon from "/public/404.svg";
import { Open_Sans, Stick_No_Bills } from "next/font/google";
import { useDisclosure } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import HeaderEn from "./en/components/common/HeaderEn";
import ModalWithFormEn from "./en/components/common/ModalWithFormEn";
import FooterEn from "./en/components/common/FooterEn";

const openSans = Open_Sans({ subsets: ["latin"] });
const stickNoBills = Stick_No_Bills({ subsets: ["latin"] });

export default function NotFound() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const pathname = usePathname();

    return pathname.includes("/en") ? (
        <main className="relative text-customGray">
            <Image
                src={notFoundBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <section className="w-full px-10 max-w-[1690px] mx-auto h-screen pt-10 text-black MD:px-5 SM:px-3 ">
                <div className="flex flex-col justify-between h-4/5">
                    <HeaderEn />
                    <div className="flex items-center max-w-[1450px] w-full gap-10 LG:gap-5 MD:flex-col MD:items-start">
                        <h1
                            className={`text-white text-[40px] leading-tight ${stickNoBills.className} font-bold 2XL:text-4xl LG:text-3xl MD:text-2xl SM:text-xl`}
                        >
                            Oops! It seems that the page you were looking for has gone through customs and hasn&apos;t
                            come back yet.
                        </h1>
                        <Image src={notFoundIcon} alt="404" className="XL:w-[300px] MD:w-52 " />
                    </div>

                    <p className="text-2xl font-bold text-white 2XL:text-xl LG:text-lg MD:text-base SM:text-xs">
                        Not to worry!{<br />}Our experts are here to help you navigate the complexities of entering the
                        Russian market.
                        {<br />}Contact us today for tailored solutions and professional support for your international
                        trade needs.
                    </p>
                    <button
                        onClick={onOpen}
                        className="bg-transparent text-3xl text-customYellow font-medium border-[5px] border-customYellow rounded-[20px] w-full max-w-[505px] h-20 XL:h-16 XL:text-[26px] LG:text-2xl LG:max-w-[450px] MD:border-[3px] SM:text-xl SM:border-[2px]  SM:max-w-[300px]"
                    >
                        Contact Us
                    </button>
                </div>
            </section>
            <ModalWithFormEn isOpen={isOpen} onOpenChange={onOpenChange} title={"Get a free consultation"} />
            <FooterEn />
        </main>
    ) : (
        <main className="relative text-customGray">
            <Image
                src={notFoundBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <section className="w-full px-10 max-w-[1690px] mx-auto h-screen pt-10 text-black MD:px-5 SM:px-3 ">
                <div className="flex flex-col justify-between h-4/5">
                    <Header />
                    <div className="flex items-center max-w-[1450px] w-full gap-10 LG:gap-5 MD:flex-col MD:items-start">
                        <h1
                            className={`text-white text-[40px] leading-tight ${openSans.className} font-bold 2XL:text-4xl LG:text-3xl MD:text-2xl SM:text-xl`}
                        >
                            Похоже, эта страница отправилась на таможенную очистку и пока не вернулась.
                        </h1>
                        <Image src={notFoundIcon} alt="404" className="XL:w-[300px] MD:w-52 " />
                    </div>

                    <p className="text-2xl font-bold text-white 2XL:text-xl LG:text-lg MD:text-base SM:text-xs">
                        Не беда!{<br />}Наши эксперты готовы помочь вам с любыми вопросами,{<br />}связанными с
                        внешнеэкономической деятельностью.{<br />}Свяжитесь с нами и мы попробуем решить ваш вопрос.
                    </p>
                    <button
                        onClick={onOpen}
                        className="bg-transparent text-3xl text-customYellow font-medium border-[5px] border-customYellow rounded-[20px] w-full max-w-[505px] h-20 XL:h-16 XL:text-[26px] LG:text-2xl LG:max-w-[450px] MD:border-[3px] SM:text-xl SM:border-[2px]  SM:max-w-[300px]"
                    >
                        Связаться с менеджером
                    </button>
                </div>
            </section>
            <ModalWithForm isOpen={isOpen} onOpenChange={onOpenChange} title={"Получить консультацию"} />
            <Footer />
        </main>
    );
}
