import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Drawer,
    Card,
} from "@material-tailwind/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "/public/hbc-black.svg";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export function SidebarWithBurgerMenu() {
    const [open, setOpen] = React.useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = value => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <IconButton variant="text" size="lg" onClick={openDrawer}>
                {isDrawerOpen ? <XMarkIcon className="h-8 w-8 stroke-2" /> : <Bars3Icon className="h-8 w-8 stroke-2" />}
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={closeDrawer} size={320}>
                <Card color="transparent" shadow={false} className="h-[calc(100vh-2rem)] w-full p-3">
                    <div className="mb-2 flex items-center gap-4 p-4 justify-between">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <Image src={logo} alt="Highbrow Customs" className="w-4/6" />
                        <IconButton variant="text" className="bg-paleGray/10" color="black" onClick={closeDrawer}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </IconButton>
                    </div>
                    <List className={` ${montserrat.className}`}>
                        <Accordion
                            open={open === 1}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                                />
                            }
                        >
                            <Link href="/payment-agent" className="">
                                <ListItem>Финансовая логистика</ListItem>
                            </Link>
                            <ListItem>
                                <Link href="/customs-clearance" className="">
                                    Таможенное оформление
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/excise-goods" className="">
                                    Акцизные товары
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/international-shipping" className="">
                                    Международные перевозки
                                </Link>
                            </ListItem>
                        </Accordion>

                        <hr className="my-2 border-blue-gray-50" />
 
                        <Link href="/contacts" className="">
                            <ListItem>Контакты</ListItem>
                        </Link>
                    </List>
                    <div className="mx-auto text-center pt-10">
                        <p className="">+7(812) 600-48-49</p>
                        <p className="">contact@hb-customs.ru</p>
                    </div>
                </Card>
            </Drawer>
        </>
    );
}
