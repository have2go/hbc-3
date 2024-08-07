import Section from "@/components/common/Section";

export default function Goods() {
    return (
        <Section title={""}>
            <div className="flex flex-col gap-8 text-xl 2XL:text-base SM:text-sm SM:gap-5">
                <p className="leading-[120%]">
                    С учетом опыта в импорте/экспорте по организации экспедирования груза, сопровождения в таможенном
                    оформлении и декларировании товаров без нарушения таможенного законодательства, мы накопили практику
                    в оформлении различной номенклатуры товаров, в том числе подакцизных товаров, в частности легковых
                    автомобилей.
                </p>
                <p className="leading-[120%]">
                    Простыми словами акциз — надбавка к стоимости товара, который можно назвать излишеством, а не
                    предметом первой необходимости. Акциз — косвенный налог, наряду с НДС. Власти страны решают, какие
                    товары будут подакцизными, — обычно это популярные высокомаржинальные товары. Актуальный перечень
                    товаров зафиксирован в статье 181 Налогового кодекса.
                </p>
                <p className="leading-[120%]">
                    Таможенное оформление производится в отношении любых товаров, пересекающих границу Российской
                    Федерации. Но подакцизные товары оформляются в особом порядке. Главные особенности – таможенное
                    декларирование товаров на специализированных таможенных постах, уплата акцизного сбора и маркировка
                    продукции акцизными марками (касается отдельных номенклатур товара).
                </p>
            </div>
        </Section>
    );
}
