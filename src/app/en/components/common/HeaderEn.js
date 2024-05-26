import Image from "next/image";
import logo from "/public/hbc-white.svg";
import Link from "next/link";
import { SidebarWithBurgerMenuEn } from "../SidebarWithBurgerMenuEn";
import { usePathname } from "next/navigation";

export default function HeaderEn() {
    const pathname = usePathname();

    return (
        <>
            <header className="flex justify-between items-center gap-3 1.5XL:hidden">
                <div className="flex flex-col w-64 text-white">
                    <div className="flex gap-1 text-sm">
                        <Link href="/">RU</Link>
                        <p>—</p>
                        <Link href="/en" className="text-black">
                            EN
                        </Link>
                    </div>
                    <Link href="/en">
                        <Image src={logo} alt="Логотип Highbrow Customs" />
                    </Link>
                    <p className="text-xs pt-4 ">Customs & Distribution services for Russia</p>
                </div>
                <div className="flex text-white text-base font-bold text-nowrap 2XL:text-sm ">
                    <Link
                        href="/en/payment-agent"
                        className={`px-[5px] border-r ${pathname === "/payment-agent" ? "text-black" : "text-white"}`}
                    >
                        Payment agent
                    </Link>
                    <Link href="/en/in-development" className="px-[5px] border-r">
                        Import
                    </Link>
                    <Link href="/en/in-development" className="px-[5px] border-r">
                        Export
                    </Link>
                    <Link href="/en/in-development" className="px-[5px] border-r">
                        Transit
                    </Link>
                    <Link href="/en/in-development" className="px-[5px] border-r">
                        Excise goods
                    </Link>
                    <Link href="/en/in-development" className="px-[5px] border-r">
                        Customs Guarantees
                    </Link>
                    <Link href="/en/in-development" className="px-[5px] border-r">
                        Logistics
                    </Link>
                    <Link href="/en/in-development" className="px-[5px] border-r">
                        About US
                    </Link>
                    <Link href="/en/contacts" className="px-[5px]">
                        Contacts
                    </Link>
                </div>
                <div className="flex flex-col text-right text-base font-medium text-nowrap 2XL:text-xs text-white">
                    <p className="">zayavka@hb-customs.ru</p>
                    <p className="">+7(812) 600-48-49 (EXT. 209)</p>
                </div>
            </header>
            <header className="flex flex-col 1200max:hidden 1.5xl:hidden">
                <div className="flex justify-between">
                    <div className="flex flex-col w-64 XL:w-56 text-white">
                        <div className="flex gap-1 text-sm">
                            <Link href="/">RU</Link>
                            <p>—</p>
                            <Link href="/en" className="text-black">
                                EN
                            </Link>
                        </div>
                        <Link href="/">
                            <Image src={logo} alt="Логотип Highbrow Customs" />
                        </Link>
                        <p className="text-xs pt-4 XL:text-[11px]">Услуги для международной торговли</p>
                    </div>
                    <div className="flex items-center text-white text-base font-bold text-nowrap 2XL:text-sm ">
                        <Link href="/en/payment-agent" className="px-[5px] XL:px-[3px] border-r">
                            Payment agent
                        </Link>
                        <Link href="/en/in-development" className="px-[5px] XL:px-[3px] border-r">
                            Import
                        </Link>
                        <Link href="/en/in-development" className="px-[5px] XL:px-[3px] border-r">
                            Export
                        </Link>
                        <Link href="/en/in-development" className="px-[5px] XL:px-[3px] border-r">
                            Transit
                        </Link>
                        <Link href="/en/in-development" className="px-[5px] XL:px-[3px] border-r">
                            Excise goods
                        </Link>
                        <Link href="/en/in-development" className="px-[5px] XL:px-[3px] border-r">
                            Customs Guarantees
                        </Link>
                        <Link href="/en/in-development" className="px-[5px] XL:px-[3px] border-r">
                            Logistics
                        </Link>
                        <Link href="/en/in-development" className="px-[5px] XL:px-[3px] border-r">
                            About US
                        </Link>
                        <Link href="/en/contacts" className="pl-[5px] XL:px-[3px]">
                            Contacts
                        </Link>
                    </div>
                </div>
            </header>
            <header className="flex justify-between items-center 1201min:hidden">
                <div className="flex flex-col w-64 XL:w-56 SM:w-[200px] text-white">
                    <div className="flex gap-1 text-sm SM:text-xs">
                        <Link href="/">RU</Link>
                        <p>—</p>
                        <Link href="/en" className="text-black">
                            EN
                        </Link>
                    </div>
                    <Link href="/en">
                        <Image src={logo} alt="Логотип Highbrow Customs" />
                    </Link>
                    <p className="text-xs pt-4 XL:text-[11px] SM:text-[9px] SM:pt-2 ">
                        Customs & Distribution services for Russia
                    </p>
                </div>
                <SidebarWithBurgerMenuEn />
            </header>
        </>
    );
}
