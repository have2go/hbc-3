import Section from "@/components/common/Section";

export default function Shipping() {
    return (
        <Section title={""}>
            <div className="flex flex-col gap-8 text-xl 2XL:text-base SM:text-sm SM:gap-5">
                <p className="leading-[120%]">
                    Международные грузоперевозки (экспедирование грузов) – один из важнейших этапов в сфере
                    внешнеэкономической деятельности (ВЭД). Такие грузоперевозки требуют знаний международного
                    законодательства и решения важных организационных вопросов. Компания «Хайбро Кастомс» предлагает
                    помощь в решении любых задач, связанных с международными перевозками грузов любого типа.
                </p>
                <ul className="pl-10 SM:pl-0    ">
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                выбор оптимального маршрута, вида транспорта и непосредственного перевозчика (линии);
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                эффективный контроль всех этапов перевозки и промежуточных перевалок при мультимодальных
                                перевозках;
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                оформление таможенных деклараций на импортируемые и экспортируемые грузы и товары;
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                контроль оформления всех товаросопроводительных и товарораспорядительных документов,
                                сопровождающих перевозку.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </Section>
    );
}
