import Section from "@/components/common/Section";

export default function GoodSides() {
    return (
        <Section title={"Benefits of working with us"}>
            <div className="flex flex-col gap-10 MD:gap-5">
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Broad geography of licensed agents
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        Our global presence ensures a wide geography of licensed payment agents in over 20 countries,
                        providing our clients with the ability to choose the most suitable and effective solutions for
                        their international payments.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">Individual approach</p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        We value the unique needs of each client and offer tailored solutions aimed at maximizing
                        efficiency and minimizing costs. Our team works directly with each client to develop the best
                        action plan, taking into account their specific requirements and goals.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">Expertise</p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        Our team consists of highly qualified specialists with deep knowledge in international financial
                        activities and customs regulation. Thanks to our extensive experience and professional
                        expertise, we can solve tasks of any complexity, providing clients with peace of mind and
                        confidence in the legality and safety of all transactions.
                    </p>
                </div>
                <div className="flex flex-col gap-5 SM:gap-1">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                        <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                            Readiness to solve complex tasks
                        </p>
                    </div>
                    <p className="text-xl 2XL:text-base SM:text-sm">
                        We are equipped with the necessary resources and knowledge to solve the most complex and
                        non-trivial tasks in the field of international payments. Whether you face legal obstacles or
                        financial restrictions, our team is ready to offer effective and legal ways to overcome them.
                    </p>
                </div>
            </div>
        </Section>
    );
}
