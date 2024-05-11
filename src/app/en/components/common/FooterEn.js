import React from "react";
import Image from "next/image";
import logo from "/public/hbc-white.svg";
import Link from "next/link";
import { Montserrat } from "next/font/google";

import { Typography, List, ListItem, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function FooterEn() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = value => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <footer className="flex justify-between items-center bg-customGray py-12">
            <div className="w-full px-10 max-w-[1690px] mx-auto grid grid-cols-[1fr_440px] grid-rows-[1fr_120px] gap-y-5 gap-x-10 LG:grid-cols-1 LG:grid-rows-none MD:px-5 SM:px-3">
                <div className="flex py-6 justify-between 2XL:hidden">
                    <div className="flex flex-col gap-3 text-[#909090]">
                        <Link href="/en" className="font-medium text-customYellow">
                            HIGHBROW CUSTOMS
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            About Us
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            Credentials
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            FAQ
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="/en/payment-agent" className={`font-medium text-white`}>
                            PAYMENT AGENT
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3 text-[#909090]">
                        <p className="font-medium text-white">CUSTOMS CLEARANCE</p>
                        <Link href="/en/in-development" className="text-sm">
                            Import
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            Export
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            Transit
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            Guarantees
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="/en/in-development" className="font-medium text-white">
                            EXCISE GOODS
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3 text-[#909090]">
                        <Link href="/en/in-development" className="font-medium text-white">
                            LOGISTICS
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            Container
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            Road
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            Marine
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            Air
                        </Link>
                        <Link href="/en/in-development" className="text-sm">
                            Rail
                        </Link>
                    </div>
                </div>
                <List className={`text-white ${montserrat.className} p-0 2xl:hidden`}>
                    <Link href="/en/payment-agent" className="">
                        <ListItem className="bg-palePurple">Payment agent</ListItem>
                    </Link>
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
                                    Customs clearance
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className={`text-white ${montserrat.className} p-0`}>
                                <ListItem>
                                    <Link href="/en/in-development" className="px-[5px]  ">
                                        Import
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link href="/en/in-development" className="px-[5px] XL:px-[3px]  ">
                                        Export
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/en/in-development" className="px-[5px] XL:px-[3px]  ">
                                        Transit
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/en/in-development" className="px-[5px] XL:px-[3px]  ">
                                        Guarantees
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
                                    Logistics
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className={`text-white ${montserrat.className} p-0`}>
                                <ListItem>
                                    <Link href="/en/in-development" className="px-[5px]  ">
                                        Container
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link href="/en/in-development" className="px-[5px] XL:px-[3px]  ">
                                        Road
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/en/in-development" className="px-[5px] XL:px-[3px]  ">
                                        Marine
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/en/in-development" className="px-[5px] XL:px-[3px]  ">
                                        Air
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/en/in-development" className="px-[5px] XL:px-[3px]  ">
                                        Rail
                                    </Link>
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                </List>
                <div className="bg-palePurple rounded-[20px] p-6 flex flex-col gap-5 text-white SM:gap-3">
                    <p className="text-2xl SM:text-xl">SAINT PETERSBURG</p>
                    <p className="">+7(812) 600-48-49 (EXT. 209)</p>
                    <p className="">zayavka@hb-customs.ru</p>
                    <div className="flex flex-col gap-1 SM:text-sm">
                        <p className="">
                            197342, Russia, Saint Petersburg,
                            <br />
                            Beloostrovskaya St., 22, office 326
                        </p>
                        <p className="text-[#909090]">Office hours: 10:00 - 18:00 (MSK)</p>
                    </div>
                </div>
                <div className="border-t border-paleGray flex justify-between items-center text-[#909090] gap-3 XL:text-xs LG:row-start-4 LG:h-10 MD:flex-col MD:items-start MD:h-auto MD:pt-3">
                    <p className="">©2024 hb-customs.ru - Full Range of Services for International Trade</p>
                    <p className="">Privacy Policy</p>
                    <p className="text-nowrap">Site map</p>
                </div>
                <div className="bg-palePurple rounded-[20px] p-6 flex">
                    <Link href="/en" className="flex items-center">
                        <Image src={logo} alt="Highbrow Customs" className="w-2/3 " />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
