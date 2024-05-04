import AdvantagesGridEn from "../AdvantagesGridEn";
import Section from "@/components/common/Section";

export default function AboutEn() {
    return (
        <Section title={"About Us"}>
            <div className="flex flex-col gap-3 SM:text-sm">
                <p className="leading-[120%]">
                    HB Custom Group has over 30 years of experience in international trade services. We specialize in
                    comprehensive customs and logistics operations, offering a full range of services including import,
                    export, and customs clearance. We are registered in the Customs Representatives Registry,
                    certificate No. 1632 dated July 13, 2023, and maintain a guarantor agreement with the Federal
                    Customs Service, emphasizing our commitment to quality and reliability.
                </p>
                <p className="leading-[120%] text-2xl font-bold SM:text-lg">Why choose us?</p>
                <ul className="list-disc pl-10 flex flex-col gap-4 SM:text-sm SM:pl-6">
                    <li>
                        <span className=" font-bold">Global Presence: </span>Our operations span strategically important
                        markets, including countries in the Asia-Pacific region, Eastern Europe and Central Asia, the
                        Middle East, North and Sub-Saharan Africa, as well as the Americas and Oceania.
                    </li>
                    <li>
                        <span className=" font-bold">Expertise and Skills: </span>Our team includes specialists with
                        deep knowledge in customs procedures, featuring experts with experience in customs authorities,
                        enabling us to handle tasks of any complexity.
                    </li>
                    <li>
                        <span className=" font-bold">Efficient Declaration: </span>We process over 3,000 declarations
                        monthly, thanks to the high qualifications of our customs specialists.
                    </li>
                    <li>
                        <span className=" font-bold">Transport Organization: </span>We coordinate over 600 transport
                        dispatches monthly, including rail, road, and air freight, covering containerized, bulk,
                        oversized, liquid, and hazardous shipments.
                    </li>
                    <li>
                        <span className=" font-bold">24/7 Support: </span>Our clients can rely on our continuous support
                        and consultancy at any time of the day or night.
                    </li>
                </ul>
                <AdvantagesGridEn />
            </div>
        </Section>
    );
}
