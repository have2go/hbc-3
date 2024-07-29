import Form from "./FormEn";

export default function DocsEn() {
    return (
        <>
            <section className="pt-20 px-10 w-full max-w-[1690px] mx-auto LG:pt-10 MD:px-5 SM:px-3 SM:pt-5">
                <h2 className="text-4xl mb-10 LG:mb-5 1.5XL:text-3xl SM:text-2xl">Required documents</h2>
                <div className="grid grid-cols-2 gap-28 XL:gap-10 LG:grid-cols-1">
                    <ol className="text-xl font-bold flex flex-col gap-5 pl-10 SM:pl-3">
                        <li className="">1. Foreign trade contract</li>
                        <li className="">2. Invoice</li>
                        <li className="">3. Packing list</li>
                        <li className="">4. Technical description of the product</li>
                        <li className="">5. Certificates and licenses</li>
                        <li className="">6. Other specific documents depending on the type of product</li>
                    </ol>
                    <div className="-mt-[550px] 2XL:-mt-[580px] LG:mt-0">
                        <Form />
                    </div>
                </div>
            </section>
        </>
    );
}
