import React from "react";
import Image from "next/image";
import logo from "/public/hbc-white.svg";
import Link from "next/link";
import { Montserrat } from "next/font/google";

import {
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Footer() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <footer className="flex justify-between items-center bg-customGray py-12">
      <div className="w-full px-10 max-w-[1690px] mx-auto grid grid-cols-[1fr_440px] grid-rows-[1fr_120px] gap-y-5 gap-x-10 LG:grid-cols-1 LG:grid-rows-none MD:px-5 SM:px-3">
        {/* <div className="flex py-6 justify-between 2XL:hidden">
                    <div className="flex flex-col gap-3 text-[#909090]">
                        <Link href="/" className="font-medium text-customYellow">
                            HIGHBROW CUSTOMS
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            О компании
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            Реквизиты
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            FAQ
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="/payment-agent" className={`font-medium text-white`}>
                            ПЛАТЁЖНЫЙ АГЕНТ
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3 text-[#909090]">
                        <Link href="customs-clearance" className="font-medium text-white">
                            ТАМОЖЕННОЕ ОФОРМЛЕНИЕ
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            Импорт
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            Экспорт
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            Транзит
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            Поручительство
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="/in-development" className="font-medium text-white">
                            АКЦИЗНЫЕ ТОВАРЫ
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3 text-[#909090]">
                        <Link href="/in-development" className="font-medium text-white">
                            ЛОГИСТИКА
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            Контейнерные перевозки
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            Автоперевозки
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            Морские перевозки
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            Авиаперевозки
                        </Link>
                        <Link href="/in-development" className="text-sm">
                            Ж/Д перевозки
                        </Link>
                    </div>
                </div> */}
        {/* <List className={`text-white ${montserrat.className} p-0 2xl:hidden`}> */}
        <List className={`text-white ${montserrat.className} p-0`}>
          <Link href="/payment-agent" className="">
            <ListItem className="bg-palePurple">Платёжный агент</ListItem>
          </Link>
          <Link href="/customs-clearance" className="">
            <ListItem className="bg-palePurple">Таможенное оформление</ListItem>
          </Link>
          <Link href="/contacts" className="">
            <ListItem className="bg-palePurple">Контакты</ListItem>
          </Link>
          {/* <Accordion
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
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
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
                  <Link href="/in-development" className="px-[5px]  ">
                    Экспорт
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/in-development"
                    className="px-[5px] XL:px-[3px]  "
                  >
                    Импорт
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/in-development"
                    className="px-[5px] XL:px-[3px]  "
                  >
                    Транзит
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/in-development"
                    className="px-[5px] XL:px-[3px]  "
                  >
                    Поручительство
                  </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion> */}
          {/* <Accordion
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
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
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
                  <Link href="/in-development" className="px-[5px]  ">
                    Контейнерные перевозки
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    href="/in-development"
                    className="px-[5px] XL:px-[3px]  "
                  >
                    Автоперевозки
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/in-development"
                    className="px-[5px] XL:px-[3px]  "
                  >
                    Морские перевозки
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/in-development"
                    className="px-[5px] XL:px-[3px]  "
                  >
                    Авиаперевозки
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/in-development"
                    className="px-[5px] XL:px-[3px]  "
                  >
                    Ж/Д перевозки
                  </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion> */}
        </List>
        <div className="bg-palePurple rounded-[20px] p-6 flex flex-col gap-5 text-white SM:gap-3">
          <p className="text-2xl SM:text-xl">САНКТ-ПЕТЕРБУРГ</p>
          <p className="">+7(812) 600-48-49</p>
          <p className="">contact@hb-customs.ru</p>
          <div className="flex flex-col gap-1 SM:text-sm">
            <p className="">
              194044, Санкт-Петербург,
              <br />
              Финляндский проспект, д. 4А, офис 727 <br />
              БЦ &ldquo;Петровский форт&ldquo;
            </p>
            <p className="text-[#909090]">
              Режим работы: 10:00 - 18:00 (по МСК){" "}
            </p>
          </div>
        </div>
        <div className="border-t border-paleGray flex justify-between items-center text-[#909090] gap-3 XL:text-xs LG:row-start-4 LG:h-10 MD:flex-col MD:items-start MD:h-auto MD:pt-3">
          <p className="">
            ©2024 hb-customs.ru - полный комплекс услуг для международной
            торговли
          </p>
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
