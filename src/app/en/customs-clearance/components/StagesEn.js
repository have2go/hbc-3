export default function StagesEn() {
    return (
        <section className="mt-20 py-5 w-full bg-[#F6E960]  LG:mt-10 SM:mt-5">
            <div className="max-w-[1690px] px-10 MD:px-5 SM:px-3 mx-auto grid grid-cols-2 LG:grid-cols-1">
                <div className="">
                    <h2 className="text-4xl mb-10 LG:mb-5 1.5XL:text-3xl SM:text-2xl">
                        Stages of customs clearance of goods
                    </h2>
                    <div className="flex flex-col gap-5">
                        <div className=" flex flex-col gap-2 pl-10 SM:pl-3">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Formalization and verification of documents
                                </p>
                            </div>
                            <p className="">
                                All accompanying documents are checked (contract, invoice, packing lists, certificates
                                of origin, shipping documents), the correct HS codes are selected
                            </p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10 SM:pl-3">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Filing and registration of the declaration
                                </p>
                            </div>
                            <p className="">
                                Filing and registration of customs declarations, official provision of information about
                                the goods to the customs authorities. The declaration of goods is submitted by the
                                declarant or the customs representative to the customs authority authorized to register
                                customs declarations.
                            </p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10 SM:pl-3">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Payments and fees
                                </p>
                            </div>
                            <p className="">Payment of all necessary duties, fees and taxes.</p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10 SM:pl-3">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Inspection and inspection of goods
                                </p>
                            </div>
                            <p className="">Carrying out the necessary inspections and inspections of the product.</p>
                        </div>
                        <div className=" flex flex-col gap-2 pl-10 SM:pl-3">
                            <div className="flex gap-[10px] items-center">
                                <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                                <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                                    Release of the declaration
                                </p>
                            </div>
                            <p className="">The final decision of the customs authority on the goods</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
