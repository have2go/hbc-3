import Section from "@/components/common/Section";
import Link from "next/link";
import Image from "next/image";
import vvoz from "/public/vvoz.jpg";
import vivoz from "/public/vivoz.jpg";
import trucks from "/public/trucks.jpg";
import { services } from "@/constants/customsClearance";
import Service from "./Service";

export default function Services() {
  return (
    <Section
      title={
        "Определите нужное направление и выберите необходимую таможенную процедуру"
      }
    >
      <div className="flex flex-col">
        <div className="py-16 w-[95%] mx-auto grid grid-cols-[460px_460px_460px] justify-between">
          <div className="border-2 border-bgGray border-b-0 rounded-t-[20px] hover:border-customYellow service-card cursor-pointer transition-all">
            <div className="w-full bg-bgGray h-6 rounded-t-2xl service-card__color-block transition-all"></div>
            <Image
              src={vvoz}
              className="saturate-0 hover:saturate-100 transition-all service-card__image"
              alt="Ввоз"
            />
            <p className="py-6 w-11/12 text-center mx-auto ">
              Ввоз иностранного товара на территорию Таможенного союза
            </p>
          </div>
          <div className="border-2 border-bgGray border-b-0 rounded-t-[20px] hover:border-customYellow service-card cursor-pointer transition-all">
            <div className="w-full bg-bgGray h-6 rounded-t-2xl service-card__color-block transition-all"></div>
            <Image
              src={vivoz}
              className="saturate-0 hover:saturate-100 transition-all service-card__image"
              alt="Вывоз"
            />
            <p className="py-6 w-11/12 text-center mx-auto ">
              Вывоз товара с территории Таможенного союза
            </p>
          </div>
          <div className="border-2 border-bgGray border-b-0 rounded-t-[20px] hover:border-customYellow service-card cursor-pointer transition-all">
            <div className="w-full bg-bgGray h-6 rounded-t-2xl service-card__color-block transition-all"></div>
            <Image
              src={trucks}
              className="saturate-0 hover:saturate-100 transition-all service-card__image"
              alt="Транзит"
            />
            <p className="py-6 w-11/12 text-center mx-auto ">
              Перемещение иностранного товара от таможенного органа отправления
              до таможенного органа назначения
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Service />
          <div className="flex h-28 border-2 border-bgGray rounded-[20px]"></div>
        </div>
      </div>
    </Section>
  );
}
