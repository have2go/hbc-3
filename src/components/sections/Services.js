import Section from "@/components/common/Section";
import CardGrid from "@/components/CardGrid";
import ServicesSlider from "../ServicesSlider";
import { useState, useEffect } from "react";

export default function Services() {
    const [isXL, setIsXL] = useState(false);

    useEffect(() => {
        setIsXL(window.innerWidth > 1280);
    }, []);

    return <Section title={"Услуги"}>{isXL ? <CardGrid /> : <ServicesSlider />}</Section>;
}
