import Section from "@/components/common/Section";

export default function HowItWorksEn() {
    return (
        <Section title={"How it works"}>
            <div className="flex flex-col gap-10 MD:gap-5">
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Filling out a payment request
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        Start the process by filling out a payment request, which is the first and primary step in the
                        payment procedure.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Contract analysis and preparation
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        We conduct a thorough analysis of your contract to assess the feasibility of the payment,
                        including checking all necessary conditions and details.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">Document support</p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        We prepare and formalize the necessary additional agreements to the contract or changes
                        regarding third-party payment terms.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Selecting the payment country
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        We determine the best country for your payment based on current regulatory and financial
                        conditions. Our company has representatives in various countries that can act as third parties,
                        optimizing payment conditions, minimizing risks, and speeding up transactions.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Signing an agency agreement
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        We enter into an agency agreement between you and our company, regulating all aspects of the
                        payment process.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">Compliance check</p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        We request the necessary documents from your international counterparty, such as a business
                        license, to pass the compliance check before making the payment.
                    </p>
                </div>
            </div>
        </Section>
    );
}
