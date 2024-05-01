import Section from "@/components/common/Section";
import Image from "next/image";
import problem1 from "/public/problem-1.jpg";
import problem2 from "/public/problem-2.jpg";
import problem3 from "/public/problem-3.jpg";
import problem4 from "/public/problem-4.jpg";

export default function Problems() {
    return (
        <Section title={"Проблемы, которые мы решаем"}>
            <div className="flex flex-col gap-10 LG:gap-5 MD:hidden">
                <div className="flex gap-10 LG:gap-5 justify-start">
                    <Image
                        src={problem1}
                        alt="Валютные ограничения"
                        className="w-[220px] h-[220px] 2XL:w-44 2XL:h-44"
                    />
                    <div className="flex flex-col gap-5 XL:gap-3 justify-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm">
                            Сложности с выполнением международных платежей из-за строгих банковских регуляций и валютных
                            ограничений.
                        </p>
                        <p className="text-2xl 2XL:text-base LG:text-sm">
                            Мы обеспечиваем соблюдение всех необходимых регуляций и оптимизацию валютных операций,
                            используя наших лицензированных платежных агентов-нерезидентов (PSP) в 20 странах. Это
                            позволяет нам минимизировать риски и ускорить процесс транзакций, обходя ограничения и
                            предоставляя клиентам более эффективные и экономически выгодные пути для платежей.
                        </p>
                    </div>
                </div>
                <div className="flex gap-10 LG:gap-5 justify-end">
                    <div className="flex flex-col text-right gap-5 XL:gap-3 justify-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm">
                            Высокие комиссии и потери при конвертации валют между странами.
                        </p>
                        <p className="text-2xl 2XL:text-base LG:text-sm">
                            Мы минимизируем комиссии и используем выгодные валютные курсы для снижения общих расходов на
                            платежи
                        </p>
                    </div>
                    <Image
                        src={problem2}
                        alt="Высокие комиссии"
                        className="w-[220px] h-[220px] 2XL:w-44 2XL:h-44 MD:w-20 MD:h-20"
                    />
                </div>
                <div className="flex gap-10 LG:gap-5 justify-start">
                    <Image
                        src={problem3}
                        alt="Соблюдение законодательства"
                        className="w-[220px] h-[220px] 2XL:w-44 2XL:h-44"
                    />
                    <div className="flex flex-col gap-5 XL:gap-3 justify-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm">
                            Необходимость строгого соблюдения международных и национальных законодательств, что создает
                            юридические риски.
                        </p>
                        <p className="text-2xl 2XL:text-base LG:text-sm">
                            Гарантируем полное юридическое сопровождение и комплаенс, предотвращая юридические проблемы.
                        </p>
                    </div>
                </div>
                <div className="flex gap-10 LG:gap-5 justify-end">
                    <div className="flex flex-col text-right gap-5 XL:gap-3 justify-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm">
                            Задержки и ограничения на международные переводы, особенно в условиях санкций и регулятивных
                            ограничений.
                        </p>
                        <p className="text-2xl 2XL:text-base LG:text-sm">
                            Оптимизация путей переводов через стратегические юрисдикции и быстрая обработка транзакций.
                        </p>
                    </div>
                    <Image
                        src={problem4}
                        alt="Задержки платежей"
                        className="w-[220px] h-[220px] 2XL:w-44 2XL:h-44 MD:w-20 MD:h-20"
                    />
                </div>
            </div>
            {/* mobile */}
            <div className="flex flex-col gap-7 SM:gap-5 md:hidden">
                <div className="flex flex-col gap-3 justify-start">
                    <div className="flex gap-3  items-center">
                        <Image src={problem1} alt="Валютные ограничения" className=" w-20 h-20 " />
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                            Сложности с выполнением международных платежей из-за строгих банковских регуляций и валютных
                            ограничений.
                        </p>
                    </div>
                    <p className="text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                        Мы обеспечиваем соблюдение всех необходимых регуляций и оптимизацию валютных операций, используя
                        наших лицензированных платежных агентов-нерезидентов (PSP) в 20 странах. Это позволяет нам
                        минимизировать риски и ускорить процесс транзакций, обходя ограничения и предоставляя клиентам
                        более эффективные и экономически выгодные пути для платежей.
                    </p>
                </div>
                <div className="flex flex-col gap-3 justify-start">
                    <div className="flex gap-3  items-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm SM:text-xs text-right">
                            Высокие комиссии и потери при конвертации валют между странами.
                        </p>
                        <Image src={problem2} alt="Валютные ограничения" className=" w-20 h-20 " />
                    </div>
                    <p className="text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                        Мы минимизируем комиссии и используем выгодные валютные курсы для снижения общих расходов на
                        платежи
                    </p>
                </div>
                <div className="flex flex-col gap-3 justify-start">
                    <div className="flex gap-3  items-center">
                        <Image src={problem3} alt="Соблюдение законодательства" className=" w-20 h-20 " />
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                            Необходимость строгого соблюдения международных и национальных законодательств, что создает
                            юридические риски.
                        </p>
                    </div>
                    <p className="text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                        Гарантируем полное юридическое сопровождение и комплаенс, предотвращая юридические проблемы.
                    </p>
                </div>
                <div className="flex flex-col gap-3 justify-start">
                    <div className="flex gap-3  items-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm SM:text-xs text-right">
                            Задержки и ограничения на международные переводы, особенно в условиях санкций и регулятивных
                            ограничений.
                        </p>
                        <Image src={problem4} alt="Задержки платежей" className=" w-20 h-20 " />
                    </div>
                    <p className="text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                        Оптимизация путей переводов через стратегические юрисдикции и быстрая обработка транзакций.
                    </p>
                </div>
            </div>
        </Section>
    );
}
