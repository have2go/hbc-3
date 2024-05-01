import Section from "@/components/common/Section";

export default function HowItWorks() {
    return (
        <Section title={"Как это работает?"}>
            <div className="flex flex-col gap-10 MD:gap-5">
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Заполнение заявки на платеж
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        Начните процесс с заполнения заявки, которая является первым и основным шагом в процедуре
                        платежа.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Анализ и подготовка контракта
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        Мы проводим тщательный анализ вашего контракта на предмет возможности осуществления платежа,
                        включая проверку всех необходимых условий и деталей.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Документальное сопровождение
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        Подготавливаем и оформляем необходимые дополнительные соглашения к контракту или изменения,
                        касающиеся условий оплаты третьими лицами.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Выбор страны для платежа
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        Определяем наилучшую страну для проведения вашего платежа, исходя из текущих регуляторных и
                        финансовых условий. Наша компания имеет представительства в следующих странах, которые могут
                        участвовать в процессе как третьи стороны: Папуа - Новая Гвинея, Малайзия, Гонконг, Китай,
                        Шриланка, Монголия, Сербия, Турция, Беларусь, страны Африки (ОАЭ, Марокко, Конго, Камерун,
                        Сенегал, Кот д&apos;Ивуар), Грузия, Южная Корея, Азербайджан, Киргизия. Этот выбор позволяет
                        оптимизировать условия платежа, минимизировать возможные риски и ускорить процесс транзакций.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Подписание агентского соглашения
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        Заключаем агентское соглашение между вами и нашей компанией, которое регулирует все аспекты
                        платежного процесса.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">Комплаенс-проверка</p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        Запрашиваем у вашего зарубежного контрагента необходимые документы, такие как бизнес-лицензия,
                        для прохождения комплаенс-проверки перед осуществлением платежа.
                    </p>
                </div>
            </div>
        </Section>
    );
}
