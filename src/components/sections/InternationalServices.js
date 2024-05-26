import { useDisclosure } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import ModalWithForm from "../common/ModalWithForm";

export default function InternationalServices() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <section className="pt-20 px-10 w-full max-w-[1690px] mx-auto LG:pt-10 MD:px-5 SM:px-3 SM:pt-5">
                <h2 className="text-4xl mb-10 LG:mb-5 LG:text-3xl SM:text-xl">Услуги для международной торговли</h2>
                <div className="flex flex-col text-paleGray text-sm">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                        <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                            Преодоление сложностей международной торговли с Highbrow Customs
                        </p>
                    </div>
                    <p className="mt-3 mb-5">
                        Ведение бизнеса в России связано с многочисленными вызовами, особенно когда речь идет о
                        международной торговле. От проведения платежей до таможенного оформления — каждый этап может
                        стать серьезным препятствием. Highbrow Customs предлагает комплексные решения, специально
                        адаптированные для современных реалий, что позволяет нашим клиентам минимизировать риски и
                        упростить все процессы.
                    </p>
                    <p className="font-bold">Полный спектр услуг для международной торговли</p>
                    <p className="mb-10 SM:mb-5">
                        Наши услуги охватывают все аспекты ВЭД – от таможенного оформления и логистики до юридической
                        поддержки и финансового консалтинга. Мы предлагаем:{<br />}
                        <Link href="/in-development" className="text-customPurple font-bold">
                            Таможенное оформление:
                        </Link>{" "}
                        Быстрое и точное декларирование товаров, что гарантирует соблюдение всех необходимых
                        регуляторных требований.
                        {<br />}
                        <Link href="/in-development" className="text-customPurple font-bold">
                            Логистическое сопровождение:
                        </Link>{" "}
                        Эффективное планирование и выполнение международных перевозок любыми видами транспорта.{<br />}
                        <Link href="/in-development" className="text-customPurple font-bold">
                            Юридическая поддержка:
                        </Link>{" "}
                        Консультации по вопросам международного торгового права, помощь в заключении контрактов и защита
                        прав в торговых спорах.
                        {<br />}
                        <Link href="/in-development" className="text-customPurple font-bold">
                            Финансовые услуги:
                        </Link>{" "}
                        Оптимизация платежей, валютные операции и управление финансовыми рисками, обеспечивающие
                        стабильность и прибыльность ваших международных операций.
                    </p>
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                        <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                            Почему Highbrow Customs?
                        </p>
                    </div>
                    <p className="pb-20 mt-3 SM:pb-10">
                        <span className=" font-bold">Десятилетия опыта:</span> Более 30 лет мы помогаем компаниям
                        успешно вести международную торговлю.{<br />}
                        <span className=" font-bold">Индивидуальный подход:</span> Понимание уникальных потребностей
                        каждого клиента и предоставление персонализированных решений.{<br />}
                        <span className=" font-bold">Конфиденциальность и поддержка:</span> Гарантия сохранения
                        коммерческой тайны и 24/7 поддержка на всех этапах сотрудничества.
                        {<br />}
                        {<br />}
                        Успешное ведение международной торговли требует надежных партнеров. Highbrow Customs готова
                        стать вашим ключевым ресурсом в мире глобальной экономики.{" "}
                        <span className="text-customPurple font-bold cursor-pointer" onClick={onOpen}>
                            Свяжитесь с нами
                        </span>{" "}
                        сегодня, чтобы обсудить, как мы можем помочь вашему бизнесу расти и процветать.
                    </p>
                </div>
            </section>
            <ModalWithForm isOpen={isOpen} onOpenChange={onOpenChange} title={"Получить консультацию"} />
        </>
    );
}
