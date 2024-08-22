import Section from "@/components/common/Section";
import Image from "next/image";

import auto from "/public/auto-shipping.jpg";

export default function Auto() {
    return (
        <Section title={"Автомобильные грузоперевозки"}>
            <div className="flex flex-col gap-8 text-xl 2XL:text-base SM:text-sm SM:gap-5">
                <p className="leading-[120%]">
                    Международные автомобильные перевозки грузов – один из наиболее доступных и востребованных способов
                    доставки. Автоперевозки имеют меньше ограничений, чем перевозки морским транспортом, авиаперевозки
                    или железнодорожные. Кроме того, процесс погрузки, перевозки и последующей выгрузки технически
                    намного проще. С помощью автотранспорта можно перевозить практически любые типы грузов: генеральные,
                    сборные, контейнерные, малогабаритные и крупногабаритные, сыпучие материалы и оборудование. Ряд
                    грузов можно перевозить только автотранспортом.
                </p>
                <p className="leading-[120%]">
                    Компания «Хайбро Кастомс» гарантирует быструю подачу автотранспорта под загрузку и максимальное
                    качество перевозки груза, осуществляет доставку грузов из Европы, Турции, ОАЭ , Ирана, Азербайджана,
                    Грузии, Армении и Стран Азии.
                </p>
                <p className="leading-[120%]">
                    На сегодняшний момент набирают востребованность автоперевозки грузов из Китая в РФ, а также в
                    обратном направлении из РФ в Китай.
                </p>
                <p className="leading-[120%]">Компания «Хайбро Кастомс» организовывает автоперевозки грузов:</p>
                <ul className="pl-10 SM:pl-0    ">
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">тентованными фурами,</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">контейнеровозами,</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">автовозами,</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                требующих соблюдения температурного режима, специальных условий хранения
                                (рефрижераторами),
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                негабаритных, тяжеловесных и крупногабаритных грузов.
                            </p>
                        </div>
                    </li>
                </ul>

                <Image src={auto} alt="Auto shipping" className="w-full rounded-3xl" />
            </div>
        </Section>
    );
}
