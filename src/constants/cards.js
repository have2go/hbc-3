import paymentsAgent from "/public/payments-agent.jpg";
// import tamojennoeOformlenie from "/public/tamojennoe-oformlenie.jpg";
import imp from "/public/imp.jpg";
import exp from "/public/exp.jpg";
import transit from "/public/transit.jpg";
import acise from "/public/acise.jpg";
import guarantees from "/public/guarantees.jpg";
import logistics from "/public/logistics.jpg";

export const cardsS = [
    {
        img: paymentsAgent,
        title: "Платёжный агент",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                Международные платежи легально и эффективно через нашу агентскую схему с использованием нерезидентских
                счетов в ОАЭ и Турции.
                {<br />}Гарантия безопасности, скорости и юридической чистоты всех транзакций.
            </p>
        ),
    },
    {
        img: imp,
        title: "Импорт",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                Обеспечиваем ввоз товаров с полным таможенным оформлением и государственным контролем, гарантируя их
                свободную реализацию в рамках
                {<br />}Обеспечиваем соблюдение всех регуляторных требований.
            </p>
        ),
    },
    {
        img: exp,
        title: "Экспорт",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                Обеспечиваем вывоз товаров с полным таможенным оформлением и соблюдением всех необходимых экспортных
                процедур, гарантируя их законную реализацию за пределами ЕАЭС. Поддерживаем соблюдение международных
                стандартов и требований.
            </p>
        ),
    },
    {
        img: transit,
        title: "Транзит",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                Обеспечиваем законное перемещение через территорию ЕАЭС с полным таможенным сопровождением. Упрощаем
                процедуры и соблюдаем все регуляторные требования для эффективного и надёжного транзита вашей продукции.
            </p>
        ),
    },
    {
        img: acise,
        title: "Акцизные товары",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                If your products include alcohol, tobacco, or other excisable goods, we offer specialized customs
                clearance services to facilitate their market entry. We handle all necessary documentation, ensure
                accurate duty calculations, and coordinate with customs authorities to meet all regulatory requirements.
            </p>
        ),
    },
    {
        img: guarantees,
        title: "Поручительство",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                Обеспечиваем гарантии выполнения таможенных обязательств по оплате пошлин и налогов, предоставляя
                поручительства для упрощения процесса таможенного оформления. Помогаем клиентам ускорить выпуск их
                товаров, снизив при этом финансовые риски.
            </p>
        ),
    },
    {
        img: logistics,
        title: "Логистика",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                Полное управление логистикой при импорте и экспорте товаров. Организация поставок всеми видами
                транспорта, включая мультимодальные перевозки, а также оптимизация маршрутов, страхование грузов и
                обеспечение их безопасности на всех этапах транспортировки.
            </p>
        ),
    },
];