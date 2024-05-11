"use client";
import Image from "next/image";

import mainBg from "/public/main-bg.jpg";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Open_Sans, Stick_No_Bills } from "next/font/google";
import Section from "@/components/common/Section";
import Form from "@/components/sections/Form";
const openSans = Open_Sans({ subsets: ["latin"] });
const stickNoBills = Stick_No_Bills({ subsets: ["latin"] });

export default function inDevelopment() {
    const daysLeft = Math.floor((1716486898557 - Date.now()) / 86400000);
    const hoursAndMinutes = 1716486898557 - (Date.now() + 86400000 * daysLeft);
    const hoursLeft = Math.floor(hoursAndMinutes / 3600000);
    const minutes = 1716486898557 - (Date.now() + 86400000 * daysLeft + 3600000 * hoursLeft);
    const minutesLeft = Math.floor(minutes / 60000);

    return (
        <main className="relative text-customGray">
            <Image
                src={mainBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
            />
            <section className="w-full px-10 max-w-[1690px] mx-auto h-screen pt-10 text-black MD:px-5 SM:px-3 ">
                <div className="flex flex-col justify-between h-[90%] SM:h-3/4">
                    <Header />
                    <h1
                        className={`text-white text-[40px] leading-tight ${openSans.className} font-bold 2XL:text-4xl LG:text-3xl MD:text-2xl SM:text-xl w-3/4 MD:w-4/5 SM:w-full`}
                    >
                        Мы работаем над созданием этой страницы, чтобы предоставить вам всю необходимую информацию
                        максимально удобно и полно.
                    </h1>
                    <div className="flex flex-col gap-14">
                        <div className="flex items-center gap-10 MD:gap-4">
                            <div className="w-[350px] border border-customYellow h-[1px] -ml-64 MD:-ml-[350px] XXSM:hidden"></div>
                            <p className="text-4xl text-white 2XL:text-3xl LG:text-2xl SM:text-xl">
                                Страница будет запущена через:
                            </p>
                        </div>
                        <div
                            className={`grid grid-cols-[140px_140px_140px] grid-rows-[100px_60px] gap-x-[10px] gap-y-[5px] w-fit text-customGray ${stickNoBills.className} SM:grid-cols-[90px_90px_90px]`}
                        >
                            <div className="bg-white/70 flex justify-between items-center">
                                <p className="mx-auto text-[90px] SM:text-6xl font-extrabold">{daysLeft}</p>
                            </div>
                            <div className="bg-white/70 flex justify-between items-center">
                                <p className="mx-auto text-[90px] SM:text-6xl font-extrabold">{hoursLeft}</p>
                            </div>
                            <div className="bg-white/70 flex justify-between items-center">
                                <p className="mx-auto text-[90px] SM:text-6xl font-extrabold">{minutesLeft}</p>
                            </div>
                            <div className="bg-white/70 flex justify-between items-center">
                                <p className="mx-auto text-[40px] SM:text-2xl font-extrabold">days</p>
                            </div>
                            <div className="bg-white/70 flex justify-between items-center">
                                <p className="mx-auto text-[40px] SM:text-2xl font-extrabold">hours</p>
                            </div>
                            <div className="bg-white/70 flex justify-between items-center">
                                <p className="mx-auto text-[40px] SM:text-2xl font-extrabold">minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Section
                title={
                    "В то время как мы занимаемся разработкой, вы уже можете воспользоваться широким спектром наших услуг:"
                }
            >
                <div className="flex flex-col gap-10 MD:gap-5">
                    <div className="flex flex-col gap-5 SM:gap-1">
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">Платежный агент:</p>
                        </div>
                        <p className="text-xl 2XL:text-base SM:text-sm">
                            Облегчение международных платежей через лицензированных агентов.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 SM:gap-1">
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">Акцизные товары:</p>
                        </div>
                        <p className="text-xl 2XL:text-base SM:text-sm">
                            Помощь в таможенном оформлении товаров подакцизной группы.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 SM:gap-1">
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                                Таможенное оформление:
                            </p>
                        </div>
                        <p className="text-xl 2XL:text-base SM:text-sm">
                            Включая услуги поручительства, импорта, экспорта и транзита.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 SM:gap-1">
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">Логистика:</p>
                        </div>
                        <p className="text-xl 2XL:text-base SM:text-sm">
                            Организация контейнерных, автомобильных, морских, авиа- и железнодорожных перевозок.
                        </p>
                    </div>
                    <p className="mt-14 SM:mt-5 font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                        Если у вас есть вопросы по любой из предложенных услуг или вы хотите обсудить конкретные
                        потребности вашего бизнеса, свяжитесь с нашм менеджером.
                    </p>
                </div>
            </Section>
            <Form
                title="Связь с менеджером"
                subtitle="Мы готовы предложить вам индивидуальные решения и всестороннюю поддержку."
            />
            <Section
                title="Благодарим за ваше терпение и понимание. 
Пожалуйста, заходите снова скоро, чтобы увидеть обновленную страницу!"
            ></Section>
            <Footer />
        </main>
    );
}
