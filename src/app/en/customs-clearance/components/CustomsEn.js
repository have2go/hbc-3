import Section from "@/components/common/Section";

export default function CustomsEn() {
    return (
        <Section title={"Customs clearance"}>
            <div className="flex flex-col gap-8 text-xl 2XL:text-base SM:text-sm SM:gap-5">
                <p className="leading-[120%]">
                    There are three directions of movement of goods in foreign economic activity:
                </p>
                <ul className="pl-10 SM:pl-0    ">
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                import of foreign goods into the territory of the Customs Union;
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                export of goods from the territory of the Customs Union;
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                movement of foreign goods from the customs authority of departure to the customs
                                authority appointments.
                            </p>
                        </div>
                    </li>
                </ul>
                <p className="leading-[120%]">
                    Customs operations in respect of goods are provided for each direction, the result of which is,
                    among other things, the placement (application) of goods under the customs procedure (in the old
                    Customs Code of the Russian Federation, the concept of customs regime was used).  Placing the
                    product under the customs procedure is most often accompanied by the filing of a declaration for
                    goods in electronic form via an information resource for interaction with the Federal Customs
                    Service of Russia.
                </p>
                <p className="leading-[120%]">
                    It is important not to confuse the customs territory of the EAEU and the territory of the Russian
                    Federation (RF), they are different concepts! The Russian Federation is one of the member states of
                    the EEC. Now there are five of these states: the Republic Armenia, the Republic of Belarus, the
                    Republic of Kazakhstan, the Kyrgyz Republic and the Russian Federation. Together, these countries
                    form the customs territory of the EAEU, but not separately. This point is important if Your product
                    is being moved to/from the territory of one of these countries, as this affects the package
                    documents required for customs control, for customs declaration goods, the amount of customs duties
                    to be paid, and the conditions of use of the goods.
                </p>
            </div>
        </Section>
    );
}
