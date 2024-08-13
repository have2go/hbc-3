import Section from "@/components/common/Section";
import Image from "next/image";

import air from '/public/air-shipping.jpg'

export default function Air() {
    return (
        <Section title={"Авиаперевозки"}>
            <div className="flex flex-col gap-8 text-xl 2XL:text-base SM:text-sm SM:gap-5">
                <p className="leading-[120%]">
                    Компания «Хайбро Кастомс» оказывает услуги грузовых авиаперевозок по всему миру. Принцип работы
                    нашей команды своевременная и надежная доставка грузов. Мы осуществляем полный контроль доставки в
                    любом городе России. Организация авиаперевозки грузов – крайне сложный процесс, который могут
                    организовать профессионалы.
                </p>
                <Image src={air} alt="Air shipping" className="w-full rounded-3xl" />
            </div>
        </Section>
    );
}
