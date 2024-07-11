import Section from "@/components/common/Section";
import Link from "next/link";
import { servicesEn } from "@/constants/customsClearance";

export default function ServicesEn() {
    return (
        <Section title={"Our customs clearance services for non-resident companies"}>
            <div className="grid gap-x-24 gap-y-10 grid-cols-2">
                {servicesEn.map(service => {
                    return (
                        <Link
                            href={service.link}
                            className="w-full h-full border-2 rounded-[20px] border-bgGray flex gap-5 py-5 pr-5 cursor-pointer service-card transition-all hover:border-customYellow"
                            key={service.title}
                        >
                            <div className="min-w-16 min-h-36 h-full bg-bgGray rounded-r-[20px] transition-all service-card__color-block"></div>
                            <div className="flex flex-col gap-5">
                                <h5 className="text-2xl text-customGray font-bold">{service.title}</h5>
                                <p className="text-[15px]">{service.text}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </Section>
    );
}
