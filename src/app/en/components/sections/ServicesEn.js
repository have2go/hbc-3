import Section from "@/components/common/Section";
import CardGridEn from "../CardGridEn";
import ServicesSliderEn from "../ServicesSliderEn";
export default function Services() {
    return (
        <Section title={"Services"}>
            <>
                <CardGridEn />
                <ServicesSliderEn />
            </>
        </Section>
    );
}
