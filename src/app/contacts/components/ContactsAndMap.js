import Section from "@/components/common/Section";
import Image from "next/image";
import mapMarker from "/public/map-marker.svg";
import calendar from "/public/calendar.svg";
import mail from "/public/mail.svg";
import phone from "/public/phone.svg";

export default function ContactsAndMap() {
    return (
        <Section title={"Контакты"}>
            <div className="grid grid-cols-[570px_1fr] 1.5XL:grid-cols-[365px_1fr] LG:grid-cols-1 gap-8 XSM:px-1">
                <div className="grid grid-cols-1 LG:grid-cols-2 gap-10 MD:grid-cols-1">
                    <div className="flex flex-col gap-5">
                        <h3 className="text-2xl LG:text-xl font-bold SM:text-lg">Адрес центрального офиса</h3>
                        <div className="flex gap-5 items-center">
                            <Image src={mapMarker} alt="" className="w-10 LG:w-8"/>
                            <p className="SM:text-sm">Россия, Санкт-Петербург, Белоостровская ул, д.22, офис 326</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="text-2xl LG:text-xl font-bold SM:text-lg">График работы</h3>
                        <div className="flex gap-5 items-center">
                            <Image src={calendar} alt="" className="w-10 LG:w-8"/>
                            <p className="SM:text-sm">с Пн по ПТ с 10:00 до 18:00 (по МСК)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="text-2xl LG:text-xl font-bold SM:text-lg">Отдел продаж</h3>
                        <div className="flex gap-5 items-center">
                            <Image src={mail} alt="" className="w-10 LG:w-8"/>
                            <p className="SM:text-sm">zayavka@hb-customs.ru</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Image src={phone} alt="" className="w-10 LG:w-8"/>
                            <p className="SM:text-sm">+7(812) 600-48-49 (доб. 209)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="text-2xl LG:text-xl font-bold SM:text-lg">Общие вопросы</h3>
                        <div className="flex gap-5 items-center">
                            <Image src={mail} alt="" className="w-10 LG:w-8"/>
                            <p className="SM:text-sm">info@hb-customs.ru</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Image src={phone} alt="" className="w-10 LG:w-8"/>
                            <p className="SM:text-sm">+7(812) 600-48-49</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="text-2xl LG:text-xl font-bold SM:text-lg">Реквизиты</h3>
                        <p className="SM:text-sm">ООО &quot;ХАЙБРО КАСТОМС&quot;</p>
                        <p className="SM:text-sm">ИНН: 7814545944</p>
                        <p className="SM:text-sm">ОГРН: 1127847443900</p>
                    </div>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad9fe59ad5741f01554ecf8806686f7ff4042367c8268cb1f6647c19e8f4d9d55&amp;source=constructor"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    className="rounded-[20px] border border-customYellow LG:min-h-[500px] LG:max-w-[550px] LG:mx-auto SM:min-h-[350px]"
                ></iframe>
            </div>
        </Section>
    );
}
