import Section from "@/components/common/Section";

export default function GoodSides() {
    return (
        <Section title={"Преимущества сотрудничества с нами"}>
            <div className="flex flex-col gap-10 MD:gap-5">
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Широкая география лицензированных агентов
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        <span className="text-customPurple font-bold">Глобальное присутствие: </span>Наша компания гарантирует
                        широкую географию лицензированных платежных агентов-нерезидентов в более чем 20 странах мира.
                        Это обеспечивает нашим клиентам возможность выбора наиболее подходящих и эффективных решений для
                        их международных платежей, обходя региональные финансовые барьеры и оптимизируя трансграничные
                        транзакции.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">Индивидуальный подход</p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        <span className="text-customPurple font-bold">Подход, нацеленный на клиента: </span>
                        Мы ценим уникальные потребности каждого нашего клиента и предлагаем индивидуальные решения,
                        нацеленные на максимизацию эффективности и минимизацию затрат. Наша команда работает напрямую с
                        каждым клиентом для разработки наилучшего плана действий, учитывая их специфические требования и
                        цели.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">Экспертность</p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        <span className="text-customPurple font-bold">Глубокие знания и профессионализм: </span>
                        Наш коллектив состоит из высококвалифицированных специалистов с глубокими знаниями в области
                        международной финансовой деятельности и таможенного регулирования. Благодаря нашему богатому
                        опыту и профессиональной экспертизе, мы способны решать задачи любой степени сложности,
                        обеспечивая клиентам спокойствие и уверенность в легальности и безопасности всех транзакций.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Готовность решать задачи любой степени сложности
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        <span className="text-customPurple font-bold">Решение сложных задач: </span>
                        Мы оснащены необходимыми ресурсами и знаниями для решения самых сложных и нетривиальных задач в
                        сфере международных платежей. Независимо от того, сталкиваетесь ли вы с юридическими
                        препятствиями или финансовыми ограничениями, наша команда готова предложить эффективные и
                        законные способы их преодоления.
                    </p>
                </div>
            </div>
        </Section>
    );
}
