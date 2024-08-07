import Section from "@/components/common/Section";
import Link from "next/link";
import Image from "next/image";
import fizCover from "/public/fiz.jpg";
import yurCover from "/public/yur.jpg";
import trucks from "/public/trucks.jpg";
import Service from "./Service";
import { services } from "@/constants/services";
import { useEffect, useState } from "react";
import { fiz } from "@/constants/cars/fiz";
import { yur } from "@/constants/cars/yur";

export default function Services() {
    const [selectedType, setSelectedType] = useState("fiz");
    const [dataToRender, setDataToRender] = useState({
        title: fiz.title,
        text: fiz.text(),
    });

    useEffect(() => {
        setDataToRender(
            selectedType === "fiz"
                ? {
                      title: fiz.title,
                      text: fiz.text(),
                  }
                : { title: yur.title, text: yur.text() }
        );
    }, [selectedType]);

    return (
        <Section title={"Ввоз автомобилей"}>
            <div className="flex flex-col pb-20 SM:pb-10">
                <div className="py-16 w-full max-w-[1000px] mx-auto grid grid-cols-2 gap-10 1.5XL:w-full 1.5XL:gap-5 XL:pt-6 MD:grid-cols-1 SM:pt-0 SM:pb-6 SM:max-w-[320px] justify-between">
                    <div
                        className={`border-2 ${
                            selectedType === "fiz" ? "border-customYellow" : "border-bgGray"
                        } border-b-0 rounded-t-[20px] hover:border-customYellow hover:scale-[1.01] service-card cursor-pointer transition-all`}
                        onClick={() => {
                            setSelectedType("fiz");
                        }}
                    >
                        <div
                            className={`w-full  h-6 rounded-t-2xl service-card__color-block transition-all ${
                                selectedType === "fiz" ? "bg-customYellow" : "bg-bgGray"
                            }`}
                        ></div>
                        <Image
                            src={fizCover}
                            className={`${
                                selectedType === "fiz" ? "saturate-100" : "saturate-0"
                            } hover:saturate-100 transition-all service-card__image w-full`}
                            alt="Ввоз"
                        />
                        <p className="py-6 w-11/12 text-center mx-auto XL:py-4 XL:text-sm LG:py-3 ">
                            Для физических лиц
                        </p>
                    </div>
                    <div
                        className={`border-2 ${
                            selectedType === "yur" ? "border-customYellow" : "border-bgGray"
                        } border-b-0 rounded-t-[20px] hover:border-customYellow hover:scale-[1.01] service-card cursor-pointer transition-all`}
                        onClick={() => {
                            setSelectedType("yur");
                        }}
                    >
                        <div
                            className={`w-full  h-6 rounded-t-2xl service-card__color-block transition-all ${
                                selectedType === "yur" ? "bg-customYellow" : "bg-bgGray"
                            }`}
                        ></div>
                        <Image
                            src={yurCover}
                            className={`${
                                selectedType === "yur" ? "saturate-100" : "saturate-0"
                            } hover:saturate-100 transition-all service-card__image w-full`}
                            alt="Вывоз"
                        />
                        <p className="py-6 w-11/12 text-center mx-auto XL:py-4 XL:text-sm LG:py-3">
                            Для юридических лиц
                        </p>
                    </div>
                </div>
                <Service data={dataToRender} />
            </div>
        </Section>
    );
}
