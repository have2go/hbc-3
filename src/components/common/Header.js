import Image from "next/image";
import logo from "/public/hbc-white.svg";
import Link from "next/link";
import { SidebarWithBurgerMenu } from "../SidebarWithBurgerMenu";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <>
            <header className="flex justify-between items-center gap-3 1.5XL:hidden">
                <div className="flex flex-col w-64 text-white">
                    <div className="flex gap-1 text-sm">
                        <Link href="/" className="text-black">
                            RU
                        </Link>
                        <p>—</p>
                        <Link href="/en" className="">
                            EN
                        </Link>
                    </div>
                    <Link href="/">
                        <Image src={logo} alt="Логотип Highbrow Customs" />
                    </Link>
                    <p className="text-xs pt-4 ">Услуги для международной торговли</p>
                </div>
                <div className="flex text-white text-base font-bold text-nowrap 2XL:text-sm ">
                    <Link
                        href="/payment-agent"
                        className={`px-[5px] border-r ${pathname === "/payment-agent" ? "text-black" : "text-white"}`}
                    >
                        Платёжный агент
                    </Link>
                    <Link href="/customs-clearance" className="px-[5px] XL:px-[3px] border-r">
                        Таможенное оформление
                    </Link>
                    <Link href="/in-development" className="px-[5px] border-r">
                        Акцизные товары
                    </Link>
                    <Link href="/in-development" className="px-[5px] border-r">
                        Поручительство
                    </Link>
                    <Link href="/in-development" className="px-[5px] border-r">
                        Логистика
                    </Link>
                    <Link href="/in-development" className="px-[5px] border-r">
                        О нас
                    </Link>
                    <Link
                        href="/contacts"
                        className={`px-[5px] ${pathname === "/contacts" ? "text-black" : "text-white"}`}
                    >
                        Контакты
                    </Link>
                </div>
                <div className="flex flex-col text-right text-base font-medium text-nowrap 2XL:text-xs ">
                    <p className="">contact@hb-customs.ru</p>
                    <p className="">+7(812) 600-48-49</p>
                </div>
            </header>
            <header className="flex flex-col 1200max:hidden 1.5xl:hidden">
                <div className="flex justify-between">
                    <div className="flex flex-col w-64 XL:w-56 text-white">
                        <div className="flex gap-1 text-sm">
                            <Link href="/" className="text-black">
                                RU
                            </Link>
                            <p>—</p>
                            <Link href="/en" className="">
                                EN
                            </Link>
                        </div>
                        <Link href="/">
                            <Image src={logo} alt="Логотип Highbrow Customs" />
                        </Link>
                        <p className="text-xs pt-4 XL:text-[11px]">Услуги для международной торговли</p>
                    </div>
                    <div className="flex items-center text-white text-base font-bold text-nowrap 2XL:text-sm ">
                        <Link href="/payment-agent" className="px-[5px] XL:px-[3px] border-r">
                            Платёжный агент
                        </Link>
                        <Link href="/customs-clearance" className="px-[5px] XL:px-[3px] border-r">
                            Таможенное оформление
                        </Link>
                        <Link href="/in-development" className="px-[5px] XL:px-[3px] border-r">
                            Акцизные товары
                        </Link>
                        <Link href="/in-development" className="px-[5px] XL:px-[3px] border-r">
                            Поручительство
                        </Link>
                        <Link href="/in-development" className="px-[5px] XL:px-[3px] border-r">
                            Логистика
                        </Link>
                        <Link href="/in-development" className="px-[5px] XL:px-[3px] border-r">
                            О нас
                        </Link>
                        <Link href="/contacts" className="pl-[5px] XL:px-[3px]">
                            Контакты
                        </Link>
                    </div>
                </div>
            </header>
            <header className="flex justify-between items-center 1201min:hidden">
                <div className="flex flex-col w-64 XL:w-56 SM:w-[200px] text-white">
                    <div className="flex gap-1 text-sm SM:text-xs">
                        <Link href="/" className="text-black">
                            RU
                        </Link>
                        <p>—</p>
                        <Link href="/en" className="">
                            EN
                        </Link>
                    </div>
                    <Link href="/">
                        <Image src={logo} alt="Логотип Highbrow Customs" />
                    </Link>
                    <p className="text-xs pt-4 XL:text-[11px] SM:text-[9px] SM:pt-2 ">
                        Услуги для международной торговли
                    </p>
                </div>
                <SidebarWithBurgerMenu />
            </header>
        </>
    );
}
