import Form from "./Form";

export default function Docs() {
    return (
        <>
            <section className="pt-20 px-10 w-full max-w-[1690px] mx-auto LG:pt-10 MD:px-5 SM:px-3 SM:pt-5">
                <h2 className="text-4xl mb-10 LG:mb-5 1.5XL:text-3xl SM:text-2xl">Необходимые документы</h2>
                <div className="grid grid-cols-2 gap-28 XL:gap-10">
                    <ol className="text-xl font-bold flex flex-col gap-5 pl-10">
                        <li className="">1. Внешнеторговый контракт</li>
                        <li className="">2. Инвойс</li>
                        <li className="">3. Упаковочный лист</li>
                        <li className="">4. Техническое описание товара</li>
                        <li className="">5. Сертификаты и лицензии</li>
                        <li className="">6. Другие специфические документы в зависимости от типа товара</li>
                    </ol>
                    <div className="-mt-[550px] 2XL:-mt-[580px]">
                        <Form />
                    </div>
                </div>
            </section>
        </>
    );
}
