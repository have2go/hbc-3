import Section from "@/components/common/Section";
import Image from "next/image";

import rail from "/public/rail-shipping.jpg";

export default function Rail() {
    return (
        <Section title={"Железнодорожные перевозки"}>
            <div className="flex flex-col gap-8 text-xl 2XL:text-base SM:text-sm SM:gap-5">
                <p className="leading-[120%]">
                    Международные железнодорожные перевозки являются сегодня одним из самых удобных способов перевозки
                    грузов. К тому же контейнеры обладают стандартными размерами и легко перевозятся любыми видами
                    транспорта, в том числе, железной дорогой. Компания Хайбро Кастомс тесно взаимодействует с
                    крупнейшими коммерческими перевозчиками на договорных и партнёрских условиях, что позволяет нам
                    успешно решать практически любые транспортные задачи. предоставляет следующие услуги по перевозке
                    грузов ж/д:
                </p>
                <ul className="pl-10 SM:pl-0    ">
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                международные железнодорожные грузовые контейнерные перевозки;
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                грузовые ж/д перевозки по России и миру вагонами;
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[10px] items-center">
                            <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
                            <p className=" text-xl 2XL:text-base SM:text-sm">
                                железнодорожные перевозки тяжеловесных грузов.
                            </p>
                        </div>
                    </li>
                </ul>
                <p className="leading-[120%]">
                    Сотрудники нашей компании постоянно осуществляют контроль за движением и местонахождением груза. По
                    вашей заявке мы подадим контейнер непосредственно к складу загрузки, проконтролируем погрузку, в
                    случае необходимости застрахуем перевозку и отправим груз в заданном направлении.
                </p>

                <Image src={rail} alt="Air shipping" className="w-full rounded-3xl" />
            </div>
        </Section>
    );
}
