import Section from "@/components/common/Section";
// import ModalWithForm from "@/components/common/ModalWithForm";
import { useDisclosure } from "@nextui-org/react";

export default function PaymentAgentSeo() {
    // const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <Section title={"Payment agent services"}>
            <div className="flex flex-col text-paleGray text-sm">
                <div className="flex gap-[10px] items-center">
                    <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                    <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                        What is a payment agent?
                    </p>
                </div>
                <p className="leading-[120%]">
                    <span className="font-bold">Reducing transaction costs</span>Our clients achieve significant savings
                    by lowering fees and optimizing cross-border payments.
                </p>
                <p className="leading-[120%]">
                    <span className="font-bold">Accelerating payment processes</span>Our schemes and expertise allow us
                    to significantly speed up the process of executing international payments, ensuring the timeliness
                    and accuracy of each transaction.
                </p>
                <p className="leading-[120%]">
                    <span className="font-bold">Legal security</span>We guarantee full compliance of all operations with
                    international and national laws, minimizing legal risks for your business.
                </p>
                <p className="leading-[120%]">
                    <span className="font-bold">Currency control</span>Our specialists effectively manage currency
                    risks, ensuring the stability and predictability of your international financial operations.
                </p>
                <div className="flex gap-[10px] items-center">
                    <span className="h-[10px] w-[10px] bg-customPurple rounded-full shrink-0" />
                    <p className="text-xl font-medium text-customGray MD:text-lg SM:text-base">
                        Why choose Highbrow Customs?
                    </p>
                </div>
                <p className="pb-20 mt-3 SM:pb-10">
                    Many businesses face challenges when making international payments due to banking regulations,
                    currency restrictions, and legal instability, which complicate operations and increase costs. Our
                    payment agent service is designed to address these issues, guaranteeing fast and secure payments,
                    minimizing associated risks, and ensuring compliance with all necessary regulatory requirements.
                </p>
            </div>
            {/* <ModalWithForm isOpen={isOpen} onOpenChange={onOpenChange} title={"Оставить заявку"} /> */}
        </Section>
    );
}
