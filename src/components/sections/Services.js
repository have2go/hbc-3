import Section from "@/components/common/Section";
import CardGrid from "@/components/CardGrid";
import ServicesSlider from "../ServicesSlider";
export default function Services() {
    return (
        <Section title={"Услуги"}>
            <>
                <CardGrid />
                <ServicesSlider />
            </>
        </Section>
    );
}
