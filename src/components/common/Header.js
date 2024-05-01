import Image from "next/image";
import logo from "/public/hbc-white.svg";
import Link from "next/link";
import { SidebarWithBurgerMenu } from "../SidebarWithBurgerMenu";
import { useState, useEffect } from "react";

export default function Header() {
    const [is15XL, setIs15XL] = useState(false);
    const [isXL, setIsXL] = useState(false);

    useEffect(() => {
        setIs15XL(window.innerWidth <= 1400);
        setIsXL(window.innerWidth <= 1200);
    }, []);

    if (!is15XL) {
        return (
            <header className="flex justify-between items-center gap-3">
                <div className="flex flex-col w-64 text-white">
                    <div className="flex gap-1 text-sm">
                        <button>RU</button>
                        <p>—</p>
                        <button>EN</button>
                    </div>
                    <Image src={logo} alt="Логотип Highbrow Customs" />
                    <p className="text-xs pt-4 ">Услуги для международной торговли</p>
                </div>
                <div className="flex text-white text-base font-bold text-nowrap 2XL:text-sm ">
                    <Link href="#" className="px-[5px] border-r">
                        Платёжный агент
                    </Link>
                    <Link href="#" className="px-[5px] border-r">
                        Экспорт
                    </Link>
                    <Link href="#" className="px-[5px] border-r">
                        Импорт
                    </Link>
                    <Link href="#" className="px-[5px] border-r">
                        Транзит
                    </Link>
                    <Link href="#" className="px-[5px] border-r">
                        Акцизные товары
                    </Link>
                    <Link href="#" className="px-[5px] border-r">
                        Поручительство
                    </Link>
                    <Link href="#" className="px-[5px] border-r">
                        Логистика
                    </Link>
                    <Link href="#" className="px-[5px] border-r">
                        О нас
                    </Link>
                    <Link href="#" className="px-[5px]">
                        Контакты
                    </Link>
                </div>
                <div className="flex flex-col text-right text-base font-medium text-nowrap 2XL:text-xs ">
                    <p className="">zayavka@hb-customs.ru</p>
                    <p className="">+7(812) 600-48-49 (доб. 209)</p>
                </div>
            </header>
        );
    }

    if (is15XL && !isXL) {
        return (
            <header className="flex flex-col">
                <div className="flex justify-between">
                    <div className="flex flex-col w-64 XL:w-56 text-white">
                        <div className="flex gap-1 text-sm">
                            <button>RU</button>
                            <p>—</p>
                            <button>EN</button>
                        </div>
                        <Image src={logo} alt="Логотип Highbrow Customs" />
                        <p className="text-xs pt-4 XL:text-[11px]">Услуги для международной торговли</p>
                    </div>
                    <div className="flex items-center text-white text-base font-bold text-nowrap 2XL:text-sm ">
                        <Link href="#" className="px-[5px] XL:px-[3px] border-r">
                            Платёжный агент
                        </Link>
                        <Link href="#" className="px-[5px] XL:px-[3px] border-r">
                            Экспорт
                        </Link>
                        <Link href="#" className="px-[5px] XL:px-[3px] border-r">
                            Импорт
                        </Link>
                        <Link href="#" className="px-[5px] XL:px-[3px] border-r">
                            Транзит
                        </Link>
                        <Link href="#" className="px-[5px] XL:px-[3px] border-r">
                            Акцизные товары
                        </Link>
                        <Link href="#" className="px-[5px] XL:px-[3px] border-r">
                            Поручительство
                        </Link>
                        <Link href="#" className="px-[5px] XL:px-[3px] border-r">
                            Логистика
                        </Link>
                        <Link href="#" className="px-[5px] XL:px-[3px] border-r">
                            О нас
                        </Link>
                        <Link href="#" className="pl-[5px] XL:px-[3px]">
                            Контакты
                        </Link>
                    </div>
                </div>
            </header>
        );
    }

    if (isXL) {
        return (
            <header className="flex justify-between items-center">
                <div className="flex flex-col w-64 XL:w-56 SM:w-[200px] text-white">
                    <div className="flex gap-1 text-sm SM:text-xs">
                        <button>RU</button>
                        <p>—</p>
                        <button>EN</button>
                    </div>
                    <Image src={logo} alt="Логотип Highbrow Customs" />
                    <p className="text-xs pt-4 XL:text-[11px] SM:text-[9px] SM:pt-2 ">
                        Услуги для международной торговли
                    </p>
                </div>
                <SidebarWithBurgerMenu />
            </header>
        );
    }
}
