import React from "react";
import Image from "next/image";
import logo from "/public/hbc-white.svg";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

import { Typography, List, ListItem, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Footer() {
    const [is2XL, setIs2XL] = useState(false);
    const [open, setOpen] = React.useState(0);

    const handleOpen = value => {
        setOpen(open === value ? 0 : value);
    };

    useEffect(() => {
        setIs2XL(window.innerWidth <= 1600);
    }, []);

    return (
        <footer className="flex justify-between items-center bg-customGray py-12">
            <div className="w-full px-10 max-w-[1690px] mx-auto grid grid-cols-[1fr_440px] grid-rows-[1fr_120px] gap-y-5 gap-x-10 LG:grid-cols-1 LG:grid-rows-none MD:px-5 SM:px-3">
                {!is2XL && (
                    <div className="flex py-6 justify-between">
                        <div className="flex flex-col gap-3 text-[#909090]">
                            <Link href="/" className="font-medium text-customYellow">
                                HIGHBROW CUSTOMS
                            </Link>
                            <p className="text-sm">О компании</p>
                            <p className="text-sm">Реквизиты</p>
                            <p className="text-sm">FAQ</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="/payment-agent" className={`font-medium text-white`}>
                                ПЛАТЁЖНЫЙ АГЕНТ
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 text-[#909090]">
                            <p className="font-medium text-white">ТАМОЖЕННОЕ ОФОРМЛЕНИЕ</p>
                            <p className="text-sm">Импорт</p>
                            <p className="text-sm">Экспорт</p>
                            <p className="text-sm">Транзит</p>
                            <p className="text-sm">Поручительство</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-medium text-white">АКЦИЗНЫЕ ТОВАРЫ</p>
                        </div>
                        <div className="flex flex-col gap-3 text-[#909090]">
                            <p className="font-medium text-white">ЛОГИСТИКА</p>
                            <p className="text-sm">Контейнерные перевозки</p>
                            <p className="text-sm">Автоперевозки</p>
                            <p className="text-sm">Морские перевозки</p>
                            <p className="text-sm">Авиаперевозки</p>
                            <p className="text-sm">Ж/Д перевозки</p>
                        </div>
                    </div>
                )}
                {is2XL && (
                    <List className={`text-white ${montserrat.className} p-0`}>
                        <ListItem className="bg-palePurple">
                            <Link href="/payment-agent" className="">
                                Платёжный агент
                            </Link>
                        </ListItem>
                        <Accordion
                            open={open === 1}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 stroke-white transition-transform ${
                                        open === 1 ? "rotate-180" : ""
                                    }`}
                                />
                            }
                        >
                            <ListItem
                                className={`text-white ${montserrat.className} p-0 bg-palePurple`}
                                selected={open === 1}
                            >
                                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                    <Typography
                                        color="white"
                                        className={`mr-auto font-normal text-white ${montserrat.className} p-0 `}
                                    >
                                        Таможенное оформление
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className={`text-white ${montserrat.className} p-0`}>
                                    <ListItem>
                                        <Link href="#" className="px-[5px]  ">
                                            Экспорт
                                        </Link>
                                    </ListItem>

                                    <ListItem>
                                        <Link href="#" className="px-[5px] XL:px-[3px]  ">
                                            Импорт
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#" className="px-[5px] XL:px-[3px]  ">
                                            Транзит
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#" className="px-[5px] XL:px-[3px]  ">
                                            Поручительство
                                        </Link>
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            open={open === 2}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 stroke-white transition-transform ${
                                        open === 2 ? "rotate-180" : ""
                                    }`}
                                />
                            }
                        >
                            <ListItem
                                className={`text-white ${montserrat.className} p-0 bg-palePurple`}
                                selected={open === 2}
                            >
                                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                    <Typography
                                        color="white"
                                        className={`mr-auto font-normal text-white ${montserrat.className} p-0`}
                                    >
                                        Логистика
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className={`text-white ${montserrat.className} p-0`}>
                                    <ListItem>
                                        <Link href="#" className="px-[5px]  ">
                                            Контейнерные перевозки
                                        </Link>
                                    </ListItem>

                                    <ListItem>
                                        <Link href="#" className="px-[5px] XL:px-[3px]  ">
                                            Автоперевозки
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#" className="px-[5px] XL:px-[3px]  ">
                                            Морские перевозки
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#" className="px-[5px] XL:px-[3px]  ">
                                            Авиаперевозки
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#" className="px-[5px] XL:px-[3px]  ">
                                            Ж/Д перевозки
                                        </Link>
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                    </List>
                )}
                <div className="bg-palePurple rounded-[20px] p-6 flex flex-col gap-5 text-white SM:gap-3">
                    <p className="text-2xl SM:text-xl">САНКТ-ПЕТЕРБУРГ</p>
                    <p className="">+7(812) 600-48-49 (доб. 209)</p>
                    <p className="">zayavka@hb-customs.ru</p>
                    <div className="flex flex-col gap-1 SM:text-sm">
                        <p className="">
                            197342, Россия, Санкт-Петербург,
                            <br />
                            Белоостровская ул, д.22, офис 326
                        </p>
                        <p className="text-[#909090]">Режим работы: 10:00 - 18:00 (по МСК) </p>
                    </div>
                </div>
                <div className="border-t border-paleGray flex justify-between items-center text-[#909090] gap-3 XL:text-xs LG:row-start-4 LG:h-10 MD:flex-col MD:items-start MD:h-auto MD:pt-3">
                    <p className="">©2024 hb-customs.ru - полный комплекс услуг для международной торговли</p>
                    <p className="">Условия конфиденциальности</p>
                    <p className="text-nowrap">Карта сайта</p>
                </div>
                <div className="bg-palePurple rounded-[20px] p-6 flex">
                    <Link href="/" className="flex items-center">
                        <Image src={logo} alt="Highbrow Customs" className="w-2/3 " />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
