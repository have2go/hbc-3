import Section from "@/components/common/Section";
import Link from "next/link";
import Image from "next/image";
import vvoz from "/public/vvoz.jpg";
import vivoz from "/public/vivoz.jpg";
import trucks from "/public/trucks.jpg";
import { services } from "@/constants/customsClearance";

export default function Services() {
    return (
        <Section title={"Определите нужное направление и выберите необходимую таможенную процедуру"}>
            <div className="flex flex-col">
                <div className="py-16 w-[95%] mx-auto grid grid-cols-[460px_460px_460px] justify-between">
                    <div className="border-2 border-bgGray border-b-0 rounded-t-[20px] hover:border-customYellow service-card cursor-pointer transition-all">
                        <div className="w-full bg-bgGray h-6 rounded-t-2xl service-card__color-block transition-all"></div>
                        <Image
                            src={vvoz}
                            className="saturate-0 hover:saturate-100 transition-all service-card__image"
                        />
                        <p className="py-6 w-11/12 text-center mx-auto ">
                            Ввоз иностранного товара на территорию Таможенного союза
                        </p>
                    </div>
                    <div className="border-2 border-bgGray border-b-0 rounded-t-[20px] hover:border-customYellow service-card cursor-pointer transition-all">
                        <div className="w-full bg-bgGray h-6 rounded-t-2xl service-card__color-block transition-all"></div>
                        <Image
                            src={vivoz}
                            className="saturate-0 hover:saturate-100 transition-all service-card__image"
                        />
                        <p className="py-6 w-11/12 text-center mx-auto ">Вывоз товара с территории Таможенного союза</p>
                    </div>
                    <div className="border-2 border-bgGray border-b-0 rounded-t-[20px] hover:border-customYellow service-card cursor-pointer transition-all">
                        <div className="w-full bg-bgGray h-6 rounded-t-2xl service-card__color-block transition-all"></div>
                        <Image
                            src={trucks}
                            className="saturate-0 hover:saturate-100 transition-all service-card__image"
                        />
                        <p className="py-6 w-11/12 text-center mx-auto ">
                            Перемещение иностранного товара от таможенного органа отправления до таможенного органа
                            назначения
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <button
                        className="grid grid-cols-[24px_1fr] gap-11 border-2 border-customPurple rounded-[20px] items-center"
                        onClick={e => {
                            if (e.target.closest("#expandable")) {
                                e.target.closest("#expandable").classList.toggle("hidden");
                            }
                        }}
                    >
                        <div className="h-[calc(100%-25px)] w-6 bg-customPurple/50 rounded-r-[20px]"></div>
                        <div className="">
                            <div className="h-28 flex items-center">
                                <p className="font-bold text-2xl">Импорт 40</p>
                            </div>
                            <div className="hidden" id="expandable">
                                <p className="text-left">
                                    Таможенная процедура выпуска для внутреннего потребления – таможенная процедура,
                                    применяемая в отношении иностранных товаров, в соответствии с которой товары
                                    находятся и используются на таможенной территории Союза без ограничений по владению,
                                    пользованию и (или) распоряжению ими, предусмотренных международными договорами и
                                    актами в сфере таможенного регулирования в отношении иностранных товаров. Товары,
                                    помещенные под таможенную процедуру выпуска для внутреннего потребления, приобретают
                                    статус товаров Союза.
                                </p>
                                <div className="h-28 flex items-center">
                                    <p className="font-bold text-2xl">Стоимость декларирования товара: от 5000 руб.</p>
                                </div>
                            </div>
                        </div>
                    </button>
                    <div className="flex h-28 border-2 border-bgGray rounded-[20px]"></div>
                </div>
            </div>
        </Section>
    );
}
