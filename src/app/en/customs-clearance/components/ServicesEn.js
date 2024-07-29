import Section from "@/components/common/Section";
import Link from "next/link";
import Image from "next/image";
import vvoz from "/public/vvoz.jpg";
import vivoz from "/public/vivoz.jpg";
import trucks from "/public/trucks.jpg";
import Service from "./ServiceEn";
import { servicesEn } from "@/constants/servicesEn";
import { useEffect, useState } from "react";

export default function ServicesEn() {
    const [selectedType, setSelectedType] = useState("vvoz");
    const [arrToRender, setArrToRender] = useState([]);

    useEffect(() => {
        const newArr = servicesEn.map((service, i) => {
            return (
                <Service
                    isActive={
                        service.type === selectedType
                            ? true
                            : (selectedType === "vvoz" || selectedType === "vivoz") && service.type === "vvozVivoz"
                            ? true
                            : false
                    }
                    title={service.title}
                    text={service.text}
                    key={i}
                />
            );
        });
        setArrToRender(newArr);
    }, [selectedType]);
    return (
        <Section title={"Determine the right direction and select the necessary customs procedure"}>
            <div className="flex flex-col">
                <div className="py-16 w-[95%] mx-auto grid grid-cols-3 gap-10 1.5XL:w-full 1.5XL:gap-5 XL:pt-6 MD:grid-cols-1 SM:pt-0 SM:pb-6 SM:max-w-[320px] justify-between">
                    <div
                        className={`border-2 ${
                            selectedType === "vvoz" ? "border-customYellow" : "border-bgGray"
                        } border-b-0 rounded-t-[20px] hover:border-customYellow hover:scale-[1.01] service-card cursor-pointer transition-all`}
                        onClick={() => {
                            setSelectedType("vvoz");
                        }}
                    >
                        <div
                            className={`w-full  h-6 rounded-t-2xl service-card__color-block transition-all ${
                                selectedType === "vvoz" ? "bg-customYellow" : "bg-bgGray"
                            }`}
                        ></div>
                        <Image
                            src={vvoz}
                            className={`${
                                selectedType === "vvoz" ? "saturate-100" : "saturate-0"
                            } hover:saturate-100 transition-all service-card__image w-full`}
                            alt="Ввоз"
                        />
                        <p className="py-6 w-11/12 text-center mx-auto XL:py-4 XL:text-sm LG:py-3 ">
                            Import of foreign goods into the territory of the Customs Union
                        </p>
                    </div>
                    <div
                        className={`border-2 ${
                            selectedType === "vivoz" ? "border-customYellow" : "border-bgGray"
                        } border-b-0 rounded-t-[20px] hover:border-customYellow hover:scale-[1.01] service-card cursor-pointer transition-all`}
                        onClick={() => {
                            setSelectedType("vivoz");
                        }}
                    >
                        <div
                            className={`w-full  h-6 rounded-t-2xl service-card__color-block transition-all ${
                                selectedType === "vivoz" ? "bg-customYellow" : "bg-bgGray"
                            }`}
                        ></div>
                        <Image
                            src={vivoz}
                            className={`${
                                selectedType === "vivoz" ? "saturate-100" : "saturate-0"
                            } hover:saturate-100 transition-all service-card__image w-full`}
                            alt="Вывоз"
                        />
                        <p className="py-6 w-11/12 text-center mx-auto XL:py-4 XL:text-sm LG:py-3">
                            Export of goods from the territory of the Customs Union
                        </p>
                    </div>
                    <div
                        className={`border-2 ${
                            selectedType === "transit" ? "border-customYellow" : "border-bgGray"
                        } border-b-0 rounded-t-[20px] hover:border-customYellow hover:scale-[1.01] service-card cursor-pointer transition-all`}
                        onClick={() => {
                            setSelectedType("transit");
                        }}
                    >
                        <div
                            className={`w-full  h-6 rounded-t-2xl service-card__color-block transition-all ${
                                selectedType === "transit" ? "bg-customYellow" : "bg-bgGray"
                            }`}
                        ></div>
                        <Image
                            src={trucks}
                            className={`${
                                selectedType === "transit" ? "saturate-100" : "saturate-0"
                            } hover:saturate-100 transition-all service-card__image w-full`}
                            alt="Транзит"
                        />
                        <p className="py-6 w-11/12 text-center mx-auto XL:py-4 XL:text-sm LG:py-3 LG:text-xs">
                            Movement of foreign goods from the customs authority of departure to the customs authority
                            appointments
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">{arrToRender}</div>
            </div>
        </Section>
    );
}
