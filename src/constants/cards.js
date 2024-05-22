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
        linkTo: "/payment-agent",
    },
    {
        img: imp,
        title: "Импорт",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                Обеспечиваем ввоз товаров с полным таможенным оформлением и государственным контролем, гарантируя их
                свободную реализацию в рамках соблюдения всех регуляторных требований.
            </p>
        ),
        linkTo: "/in-development",
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
        linkTo: "/in-development",
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
        linkTo: "/in-development",
    },
    {
        img: acise,
        title: "Акцизные товары",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                Полное таможенное оформление, включая алкоголь и табачные изделия, с гарантией соблюдения всех акцизных
                и законодательных требований. Обеспечиваем точное выполнение процедур для законной реализации товаров на
                территории ЕАЭС.
            </p>
        ),
        linkTo: "/in-development",
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
        linkTo: "/in-development",
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
        linkTo: "/in-development",
    },
];
