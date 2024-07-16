export default function Stages() {
  return (
    <section className="mt-20 py-5 w-full bg-[#F6E960]  LG:mt-10  SM:mt-5">
      <div className="max-w-[1690px] px-10 MD:px-5 SM:px-3 mx-auto grid grid-cols-2">
        <div className="">
          <h2 className="text-4xl mb-10 LG:mb-5 1.5XL:text-3xl SM:text-2xl">
            Этапы таможенного оформления грузов
          </h2>
          <div className="flex flex-col gap-5">
            <div className=" flex flex-col gap-2 pl-10">
              <div className="flex gap-[10px] items-center">
                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                  Формализация и проверка документов
                </p>
              </div>
              <p className="">
                Проверяются все сопроводительные документы (контракт, инвойс,
                упаковочные листы, сертификаты происхождения, транспортные
                документы), подбираются верные коды ТН ВЭД
              </p>
            </div>
            <div className=" flex flex-col gap-2 pl-10">
              <div className="flex gap-[10px] items-center">
                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                  Подача и регистрация декларации
                </p>
              </div>
              <p className="">
                Подача и регистрация таможенных деклараций, официальное
                предоставление данных о товаре таможенным органам. Декларация на
                товары подается декларантом или таможенным представителем
                таможенному органу, правомочному регистрировать таможенные
                декларации.
              </p>
            </div>
            <div className=" flex flex-col gap-2 pl-10">
              <div className="flex gap-[10px] items-center">
                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                  Платежи и сборы
                </p>
              </div>
              <p className="">
                Оплата всех необходимых пошлин, сборов и налогов.
              </p>
            </div>
            <div className=" flex flex-col gap-2 pl-10">
              <div className="flex gap-[10px] items-center">
                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                  Осмотр и досмотр товаров
                </p>
              </div>
              <p className="">
                Проведение необходимых инспекций и досмотров по товару.
              </p>
            </div>
            <div className=" flex flex-col gap-2 pl-10">
              <div className="flex gap-[10px] items-center">
                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                  Выпуск декларации
                </p>
              </div>
              <p className="">
                Окончательное решение таможенного органа по товару
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
