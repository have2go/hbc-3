import Section from "@/components/common/Section";
import CardGrid from "@/components/CardGrid";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import ServicesSlider from "../ServicesSlider";

export default function Services() {
    const { height, width } = useWindowDimensions();

    return (
        <Section title={"Услуги"}>
            {width > 1280 ? <CardGrid /> : <ServicesSlider />}
        </Section>
    );
}
