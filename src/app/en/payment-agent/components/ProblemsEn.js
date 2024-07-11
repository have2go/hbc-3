import Section from "@/components/common/Section";
import Image from "next/image";
import problem1 from "/public/problem-1.jpg";
import problem2 from "/public/problem-2.jpg";
import problem3 from "/public/problem-3.jpg";
import problem4 from "/public/problem-4.jpg";

export default function ProblemsEn() {
    return (
        <Section title={"Problems we solve"}>
            <div className="flex flex-col gap-10 LG:gap-5 MD:hidden">
                <div className="flex gap-10 LG:gap-5 justify-start">
                    <Image
                        src={problem1}
                        alt="Валютные ограничения"
                        className="w-[220px] h-[220px] 2XL:w-44 2XL:h-44"
                    />
                    <div className="flex flex-col gap-5 XL:gap-3 justify-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm">
                            Difficulties with international payments due to strict banking regulations and currency
                            restrictions
                        </p>
                        <p className="text-2xl 2XL:text-base LG:text-sm">
                            We ensure compliance with all necessary regulations and optimise currency operations through
                            our licensed non-resident payment service providers (PSPs) in 20 countries. This allows us
                            to minimise risk and speed up transaction processes, bypassing restrictions and providing
                            more efficient and cost-effective payment methods for our customers.
                        </p>
                    </div>
                </div>
                <div className="flex gap-10 LG:gap-5 justify-end">
                    <div className="flex flex-col text-right gap-5 XL:gap-3 justify-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm">
                            High fees and currency conversion losses between countries
                        </p>
                        <p className="text-2xl 2XL:text-base LG:text-sm">
                            We minimise fees and take advantage of favourable exchange rates to reduce the overall cost
                            of payments.
                        </p>
                    </div>
                    <Image
                        src={problem2}
                        alt="Высокие комиссии"
                        className="w-[220px] h-[220px] 2XL:w-44 2XL:h-44 MD:w-20 MD:h-20"
                    />
                </div>
                <div className="flex gap-10 LG:gap-5 justify-start">
                    <Image
                        src={problem3}
                        alt="Соблюдение законодательства"
                        className="w-[220px] h-[220px] 2XL:w-44 2XL:h-44"
                    />
                    <div className="flex flex-col gap-5 XL:gap-3 justify-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm">
                            The need for strict compliance with international and national laws, creating legal risks
                        </p>
                        <p className="text-2xl 2XL:text-base LG:text-sm">
                            We guarantee full legal support and compliance, preventing legal issues.
                        </p>
                    </div>
                </div>
                <div className="flex gap-10 LG:gap-5 justify-end">
                    <div className="flex flex-col text-right gap-5 XL:gap-3 justify-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm">
                            Delays and restrictions in international transfers, particularly in the context of sanctions
                            and regulatory restrictions
                        </p>
                        <p className="text-2xl 2XL:text-base LG:text-sm">
                            We optimise transfer routes through strategic jurisdictions and ensure fast transaction
                            processing.
                        </p>
                    </div>
                    <Image
                        src={problem4}
                        alt="Задержки платежей"
                        className="w-[220px] h-[220px] 2XL:w-44 2XL:h-44 MD:w-20 MD:h-20"
                    />
                </div>
            </div>
            {/* mobile */}
            <div className="flex flex-col gap-7 SM:gap-5 md:hidden">
                <div className="flex flex-col gap-3 justify-start">
                    <div className="flex gap-3  items-center">
                        <Image src={problem1} alt="Валютные ограничения" className=" w-20 h-20 " />
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                            Difficulties with international payments due to strict banking regulations and currency
                            restrictions
                        </p>
                    </div>
                    <p className="text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                        We ensure compliance with all necessary regulations and optimise currency operations through our
                        licensed non-resident payment service providers (PSPs) in 20 countries. This allows us to
                        minimise risk and speed up transaction processes, bypassing restrictions and providing more
                        efficient and cost-effective payment methods for our customers.
                    </p>
                </div>
                <div className="flex flex-col gap-3 justify-start">
                    <div className="flex gap-3  items-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm SM:text-xs text-right">
                            High fees and currency conversion losses between countries
                        </p>
                        <Image src={problem2} alt="Валютные ограничения" className=" w-20 h-20 " />
                    </div>
                    <p className="text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                        We minimise fees and take advantage of favourable exchange rates to reduce the overall cost of
                        payments.
                    </p>
                </div>
                <div className="flex flex-col gap-3 justify-start">
                    <div className="flex gap-3  items-center">
                        <Image src={problem3} alt="Соблюдение законодательства" className=" w-20 h-20 " />
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                            The need for strict compliance with international and national laws, creating legal risks
                        </p>
                    </div>
                    <p className="text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                        We guarantee full legal support and compliance, preventing legal issues.
                    </p>
                </div>
                <div className="flex flex-col gap-3 justify-start">
                    <div className="flex gap-3  items-center">
                        <p className="font-bold text-2xl 2XL:text-base LG:text-sm SM:text-xs text-right">
                            Delays and restrictions in international transfers, particularly in the context of sanctions
                            and regulatory restrictions
                        </p>
                        <Image src={problem4} alt="Задержки платежей" className=" w-20 h-20 " />
                    </div>
                    <p className="text-2xl 2XL:text-base LG:text-sm SM:text-xs">
                        We optimise transfer routes through strategic jurisdictions and ensure fast transaction
                        processing.
                    </p>
                </div>
            </div>
        </Section>
    );
}
