import Section from "@/components/common/Section";
// import ModalWithForm from "@/components/common/ModalWithForm";
// import { useDisclosure } from "@nextui-org/react";

export default function CuustomsSeo() {
    // const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <Section title={"About customs clearance"}>
            <div className="flex flex-col text-paleGray text-sm">
                <p className="mt-3 mb-5 SM:text-xs">
                    Customs clearance is a comprehensive set of procedures aimed at legalizing the import and export of
                    goods across borders. It includes the preparation and submission of documents to customs
                    authorities, obtaining permits and certificates, ensuring compliance with legal requirements, and
                    paying all necessary duties and taxes. This process requires in-depth knowledge of customs
                    legislation and meticulous adherence to all regulatory requirements to avoid delays and penalties.
                </p>

                <div className="flex gap-[10px] items-center">
                    <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                    <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                        Why choose Highbrow Customs for customs clearance services
                    </p>
                </div>
                <p className="mt-3 mb-5 SM:text-xs">
                    Choosing Highbrow Customs for customs clearance services offers a range of benefits that help
                    expedite and simplify the process of importing and exporting goods:
                </p>
                <p className="pb-20 mt-3 SM:pb-10">
                    <span className="font-bold">Certified customs broker:</span> As a certified customs broker, customs
                    clearance is our core specialty. We are equipped with the expertise and experience necessary to
                    handle all customs-related challenges.{<br />}
                    <span className="font-bold">Highly qualified specialists:</span> Our team consists of experts with
                    deep knowledge of customs regulations. We are ready to tackle tasks of any complexity, ensuring
                    compliance with all regulatory requirements and minimizing the risk of delays and penalties.{<br />}
                    <span className="font-bold">Comprehensive approach:</span> We offer a full range of customs
                    clearance services, including document preparation, interaction with customs authorities, compliance
                    control, and much more.{<br />}
                    <span className="font-bold">Individual approach:</span> Each client receives individual attention
                    and solutions tailored to their specific needs and cargo characteristics.{<br />}
                    <span className="font-bold">Reliability and security:</span> We guarantee the reliability and
                    transparency of all operations, supported by our extensive experience and numerous successful
                    projects.
                    {<br />}
                    {<br />}
                    By choosing Highbrow Customs for your customs clearance needs, you gain a trusted partner who
                    ensures that all stages of the process are handled professionally and on time, allowing you to focus
                    on growing your business.
                </p>
            </div>
            {/* <ModalWithForm isOpen={isOpen} onOpenChange={onOpenChange} title={"Оставить заявку"} /> */}
        </Section>
    );
}
