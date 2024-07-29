import Section from "@/components/common/Section";
// import ModalWithForm from "@/components/common/ModalWithForm";
// import { useDisclosure } from "@nextui-org/react";

export default function CustomsSeoEn() {
    // const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <Section title={"Customs operations with goods: comprehensive service with Highbrow Customs"}>
            <div className="flex flex-col text-paleGray text-sm">
                <p className="mt-3  SM:text-xs">
                    In the world of international trade, it is important to understand and distinguish the key terms
                    such as customs operations, customs declaration, customs procedure, customs control.
                </p>
                <ul className="list-disc pl-5 mt-3 SM:text-xs">
                    <li>
                        Customs operations — actions performed by persons and customs bodies in accordance with
                        international treaties and acts in the field of customs regulation and (or) legislation Member
                        States on customs regulation.
                    </li>
                    <li>
                        Customs declaration — an application to the customs authority with using the customs declaration
                        of information about goods, about the chosen customs procedure and (or) other information
                        required for the release of goods.
                    </li>
                    <li>
                        The customs procedure is a set of rules defining for the purposes of customs regulation
                        conditions and procedure for the use of goods in the customs territory of the Union or beyond
                        its borders
                    </li>
                    <li>
                        Customs control is a set of actions performed by customs authorities actions aimed at verifying
                        and (or) ensuring compliance international treaties and acts in the field of customs regulation
                        and the legislation of the Member States on customs regulation.
                    </li>
                </ul>
                <p className="mt-3 SM:text-xs">
                    It should be noted that, of the listed terms, customs The control is divided into two stages: before
                    the release of goods and after the release goods.
                </p>
                <p className="mt-3 SM:text-xs">
                    In the realities of modern information technologies used by customs authorities during customs
                    control prior to release Such control is aimed at reducing the time of release of goods by
                    categorizing the participants of foreign economic activity, analyzing the information of the customs
                    statistics of the declaration of goods.
                </p>
                <p className="mt-3 SM:text-xs">
                    Post control is based on the analysis of large amounts of information, not only submitted during the
                    declaration, as well as in comparison with information obtained from other sources. According to the
                    results The customs authorities have the right to add additional charges and collect customs
                    payments upon detection of incompleteness or unreliability submitted documents and information when
                    declaring the goods.
                </p>
                <p className="mt-3 SM:text-xs">
                    We are ready to help you at every stage of interaction with customs organs.
                </p>
                <p className="mt-3 SM:text-xs">
                    Highbrow Customs offers a full range of customs services declaration of goods and carrying out
                    customs operations taking into account features of customs procedures.
                </p>
                <p className="mt-3 SM:text-xs">
                    We will help you to form a package of necessary documents for the customs control, taking into
                    account the analytical work carried out on identifying the risks of your transaction.
                </p>
                <p className="mt-3 SM:text-xs">
                    We will carry out high-quality filling of the customs declaration and its submission to the
                    electronic resources of the customs authorities.
                </p>
                <p className="mt-3 SM:text-xs">
                    We guarantee our presence and support during the various forms of customs control, including
                    inspections, inspections, as well as during inspections of phytosanitary control. We will ensure
                    that the control measures carried out comply with the requirements legislation.
                </p>
                <div className="flex gap-[10px] mt-5 items-center">
                    <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                    <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">Why choose us?</p>
                </div>
                <p className="pb-20 mt-3 SM:pb-10">
                    <span className="font-bold">Experience and expertise:</span> More than 30 years successful work in
                    the field of foreign economic activity.{<br />}
                    <span className="font-bold">Individual approach:</span> Personalized solutions for each client.
                    {<br />}
                    <span className="font-bold">Transparency and reliability:</span> Full compliance with legal
                    requirements and risk minimization.{<br />}
                    <span className="font-bold">An integrated approach:</span> The full range customs declaration,
                    logistics and financial services escorts.
                    {<br />}
                    {<br />}
                    Contact us for advice and detailed information on issues related to the declaration of goods to the
                    customs authority.
                    {<br />}
                    {<br />}
                    Highbrow Customs is your reliable partner in the world of international trade.
                </p>
            </div>
            {/* <ModalWithForm isOpen={isOpen} onOpenChange={onOpenChange} title={"Оставить заявку"} /> */}
        </Section>
    );
}
