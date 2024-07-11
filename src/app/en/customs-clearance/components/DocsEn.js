import FormEn from "./FormEn";

export default function Docs() {
    return (
        <>
            <section className="pt-20 px-10 w-full max-w-[1690px] mx-auto LG:pt-10 MD:px-5 SM:px-3 SM:pt-5">
                <h2 className="text-4xl mb-10 LG:mb-5 1.5XL:text-3xl SM:text-2xl">
                    Required documents for customs clearance
                </h2>
                <ol className="text-xl font-bold flex flex-col gap-5 pl-10">
                    <li className="">1. Commercial invoice</li>
                    <li className="">2. Packing list</li>
                    <li className="">3. Bill of lading or air waybill</li>
                    <li className="">4. Certificate of origin</li>
                    <li className="">
                        5. Import/Export licences for certain types of goods (e.g. pharmaceuticals, chemicals, military
                        equipment, certain food products).
                    </li>
                    <li className="">6. Insurance сertificate</li>
                    <li className="">7. Power of attoney (POA)</li>
                    <li className="">8. Health certificates for food products or goods of animal origin</li>
                    <li className="">9. Technical descriptions and test results for technical or industrial goods</li>
                    <li className="">10. Entry summary declaration (ENS)</li>
                </ol>
            </section>
        </>
    );
}
