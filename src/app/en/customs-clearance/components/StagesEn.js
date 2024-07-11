import FormEn from "./FormEn";

export default function StagesEn() {
    return (
        <section className="mt-20 py-5 w-full bg-[#F6E960]  LG:mt-10  SM:mt-5">
            <div className="max-w-[1690px] px-10 MD:px-5 SM:px-3 mx-auto grid grid-cols-2 gap-10">
                <div className="">
                    <h2 className="text-4xl mb-10 LG:mb-5 1.5XL:text-3xl SM:text-2xl">
                        Steps of customs clearance for non-resident companies
                    </h2>
                    <div className="flex flex-col gap-5">
                        <div className=" flex flex-col gap-2 pl-10">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Document preparation
                                </p>
                            </div>
                            <p className="">
                                We gather and prepare all necessary documents, including invoices, contracts, packing
                                lists, certificates, licenses, technical descriptions of goods, and other specific
                                documents. And check documents for compliance with Russian customs regulations.
                            </p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Submission to customs authorities
                                </p>
                            </div>
                            <p className="">
                                We prepare and submit electronic declarations through specialized systems, speeding up
                                the clearance process. If necessary, we submit physical copies of documents to the
                                relevant customs authorities.
                            </p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Registration and acceptance of declarations
                                </p>
                            </div>
                            <p className="">
                                Customs authorities register the submitted declarations, initiating the customs
                                clearance process. The documents confirming the presence and condition of goods are
                                accepted.
                            </p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Inspection and examination
                                </p>
                            </div>
                            <p className="">
                                Customs authorities verify the accuracy and completeness of the submitted documents. If
                                required, a physical inspection of the goods is conducted to confirm their compliance
                                with the declared characteristics.
                            </p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Payment of duties and taxes
                                </p>
                            </div>
                            <p className="">
                                We calculate and pay all necessary customs duties, taxes, and fees. We ensure timely
                                payment of all fees to avoid delays and penalties.
                            </p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Obtaining permits and certificates
                                </p>
                            </div>
                            <p className="">
                                We obtain all necessary permits for the import/export of goods, including
                                sanitary-epidemiological conclusions, certificates of conformity, and others. We verify
                                that the goods meet the safety and quality requirements established by law.
                            </p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Release of goods
                                </p>
                            </div>
                            <p className="">
                                Customs authorities process the release of goods for domestic consumption or re-export.
                                We organize the handover of goods to the client or further transportation to the final
                                destination.
                            </p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Closure of customs case
                                </p>
                            </div>
                            <p className="">
                                We ensure the completion of all customs formalities and the closure of the customs case
                                and archive all documents and records in accordance with legal requirements.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="my-auto">
                    <FormEn />
                </div>
            </div>
        </section>
    );
}
