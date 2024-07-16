import Section from "@/components/common/Section";
import Link from "next/link";
import Image from "next/image";
import vvoz from "/public/vvoz.jpg";
import vivoz from "/public/vivoz.jpg";
import trucks from "/public/trucks.jpg";
import Service from "./Service";
import { services } from "@/constants/services";
import { useEffect, useState } from "react";

export default function Services() {
  const [selectedType, setSelectedType] = useState("vvoz");
  const [arrToRender, setArrToRender] = useState([]);

  useEffect(() => {
    const newArr = services.map((service, i) => {
      return (
        <Service
          isActive={
            service.type === selectedType
              ? true
              : (selectedType === "vvoz" || selectedType === "vivoz") &&
                service.type === "vvozVivoz"
              ? true
              : false
          }
          title={service.title}
          text={service.text}
          key={i}
        />
      );
    });
    setArrToRender(newArr);
  }, [selectedType]);
  return (
    <Section
      title={
        "Определите нужное направление и выберите необходимую таможенную процедуру"
      }
    >
      <div className="flex flex-col">
        <div className="py-16 w-[95%] mx-auto grid grid-cols-[460px_460px_460px] justify-between">
          <div
            className={`border-2 ${
              selectedType === "vvoz" ? "border-customYellow" : "border-bgGray"
            } border-b-0 rounded-t-[20px] hover:border-customYellow service-card cursor-pointer transition-all`}
            onClick={() => {
              setSelectedType("vvoz");
            }}
          >
            <div
              className={`w-full  h-6 rounded-t-2xl service-card__color-block transition-all ${
                selectedType === "vvoz" ? "bg-customYellow" : "bg-bgGray"
              }`}
            ></div>
            <Image
              src={vvoz}
              className={`${
                selectedType === "vvoz" ? "saturate-100" : "saturate-0"
              } hover:saturate-100 transition-all service-card__image`}
              alt="Ввоз"
            />
            <p className="py-6 w-11/12 text-center mx-auto ">
              Ввоз иностранного товара на территорию Таможенного союза
            </p>
          </div>
          <div
            className={`border-2 ${
              selectedType === "vivoz" ? "border-customYellow" : "border-bgGray"
            } border-b-0 rounded-t-[20px] hover:border-customYellow service-card cursor-pointer transition-all`}
            onClick={() => {
              setSelectedType("vivoz");
            }}
          >
            <div
              className={`w-full  h-6 rounded-t-2xl service-card__color-block transition-all ${
                selectedType === "vivoz" ? "bg-customYellow" : "bg-bgGray"
              }`}
            ></div>
            <Image
              src={vivoz}
              className={`${
                selectedType === "vivoz" ? "saturate-100" : "saturate-0"
              } hover:saturate-100 transition-all service-card__image`}
              alt="Вывоз"
            />
            <p className="py-6 w-11/12 text-center mx-auto ">
              Вывоз товара с территории Таможенного союза
            </p>
          </div>
          <div
            className={`border-2 ${
              selectedType === "transit"
                ? "border-customYellow"
                : "border-bgGray"
            } border-b-0 rounded-t-[20px] hover:border-customYellow service-card cursor-pointer transition-all`}
            onClick={() => {
              setSelectedType("transit");
            }}
          >
            <div
              className={`w-full  h-6 rounded-t-2xl service-card__color-block transition-all ${
                selectedType === "transit" ? "bg-customYellow" : "bg-bgGray"
              }`}
            ></div>
            <Image
              src={trucks}
              className={`${
                selectedType === "transit" ? "saturate-100" : "saturate-0"
              } hover:saturate-100 transition-all service-card__image`}
              alt="Транзит"
            />
            <p className="py-6 w-11/12 text-center mx-auto ">
              Перемещение иностранного товара от таможенного органа отправления
              до таможенного органа назначения
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">{arrToRender}</div>
      </div>
    </Section>
  );
}
