import {
    russia,
    belarussia,
    germany,
    serbia,
    morocco,
    senegal,
    nigeria,
    cameroon,
    congodr,
    turkey,
    azerbaijan,
    oae,
    kazakhstan,
    mongolia,
    uzbekistan,
    kyrgyzstan,
    china,
    india,
    shrilanka,
    malaysia,
    papua,
    indonesia,
} from "@/constants/svgPaths";
import Tooltip from "./Tooltip";
import ModalWithFormMap from "./common/ModalWithFormMap";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";

export default function SvgMap() {
    const [tooltipData, setTooltipData] = useState({ countryName: "", position: null });

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [formTitle, setFormTitle] = useState("Связаться с представительством в России");
    const [country, setCountry] = useState("Россия");

    const onOpenModal = country => {
        setFormTitle(`Связаться с представительством в ${country}`);
        onOpen();
    };

    const handleMouseOver = (event, countryName) => {
        setTooltipData({ countryName, position: { x: event.clientX + 10, y: event.clientY + 10 } });
    };

    const handleMouseOut = () => {
        setTooltipData({ countryName: "", position: null });
    };
    return (
        <div className="">
            <ModalWithFormMap isOpen={isOpen} onOpenChange={onOpenChange} title={formTitle} country={country} />
            <svg viewBox="0 0 2480 1468" className="absolute top-0 left-0 h-auto">
                <path
                    className="country"
                    d={russia}
                    data-name="Россия"
                    onMouseOver={event => handleMouseOver(event, "Россия")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("России");
                        setCountry("Россия");
                    }}
                ></path>
                <path
                    className="country"
                    d={belarussia}
                    data-name="Белоруссия"
                    onMouseOver={event => handleMouseOver(event, "Белоруссия")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Белоруссии");
                        setCountry("Белоруссия");
                    }}
                ></path>
                <path
                    className="country"
                    d={germany}
                    data-name="Германия"
                    onMouseOver={event => handleMouseOver(event, "Германия")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Германии");
                        setCountry("Германия");
                    }}
                ></path>
                <path
                    className="country"
                    d={serbia}
                    data-name="Сербия"
                    onMouseOver={event => handleMouseOver(event, "Сербия")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Сербии");
                        setCountry("Сербия");
                    }}
                ></path>
                <path
                    className="country"
                    d={morocco}
                    data-name="Марокко"
                    onMouseOver={event => handleMouseOver(event, "Марокко")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Марокко");
                        setCountry("Марокко");
                    }}
                ></path>
                <path
                    className="country"
                    d={senegal}
                    data-name="Сенегал"
                    onMouseOver={event => handleMouseOver(event, "Сенегал")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Сенегале");
                        setCountry("Сенегал");
                    }}
                ></path>
                <path
                    className="country"
                    d={nigeria}
                    data-name="Нигерия"
                    onMouseOver={event => handleMouseOver(event, "Нигерия")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Нигерии");
                        setCountry("Нигерия");
                    }}
                ></path>
                <path
                    className="country"
                    d={cameroon}
                    data-name="Камерун"
                    onMouseOver={event => handleMouseOver(event, "Камерун")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Камеруне");
                        setCountry("Камерун");
                    }}
                ></path>
                <path
                    className="country"
                    d={congodr}
                    data-name="ДР Конго"
                    onMouseOver={event => handleMouseOver(event, "ДР Конго")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("ДР Конго");
                        setCountry("ДР Конго");
                    }}
                ></path>
                <path
                    className="country"
                    d={turkey}
                    data-name="Турция"
                    onMouseOver={event => handleMouseOver(event, "Турция")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Турции");
                        setCountry("Турция");
                    }}
                ></path>
                <path
                    className="country"
                    d={azerbaijan}
                    data-name="Азербайджан"
                    onMouseOver={event => handleMouseOver(event, "Азербайджан")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Азербайджане");
                        setCountry("Азербайджан");
                    }}
                ></path>
                <path
                    className="country"
                    d={oae}
                    data-name="ОАЭ"
                    onMouseOver={event => handleMouseOver(event, "ОАЭ")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("ОАЭ");
                        setCountry("ОАЭ");
                    }}
                ></path>
                <path
                    className="country"
                    d={kazakhstan}
                    data-name="Казахстан"
                    onMouseOver={event => handleMouseOver(event, "Казахстан")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Казахстане");
                        setCountry("Казахстан");
                    }}
                ></path>
                <path
                    className="country"
                    d={mongolia}
                    data-name="Монголия"
                    onMouseOver={event => handleMouseOver(event, "Монголия")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Монголии");
                        setCountry("Монголия");
                    }}
                ></path>
                <path
                    className="country"
                    d={uzbekistan}
                    data-name="Узбекистан"
                    onMouseOver={event => handleMouseOver(event, "Узбекистан")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Узбекистане");
                        setCountry("Узбекистан");
                    }}
                ></path>
                <path
                    className="country"
                    d={kyrgyzstan}
                    data-name="Кыргызстан"
                    onMouseOver={event => handleMouseOver(event, "Кыргызстан")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Кыргызстане");
                        setCountry("Кыргызстан");
                    }}
                ></path>
                <path
                    className="country"
                    d={china}
                    data-name="Китай"
                    onMouseOver={event => handleMouseOver(event, "Китай")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Китае");
                        setCountry("Китай");
                    }}
                ></path>
                <path
                    className="country"
                    d={india}
                    data-name="Индия"
                    onMouseOver={event => handleMouseOver(event, "Индия")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Индии");
                        setCountry("Индия");
                    }}
                ></path>
                <path
                    className="country"
                    d={shrilanka}
                    data-name="Шри-Ланка"
                    onMouseOver={event => handleMouseOver(event, "Шри-Ланка")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Шри-Ланке");
                        setCountry("Шри-Ланка");
                    }}
                ></path>
                <path
                    className="country"
                    d={malaysia}
                    data-name="Малайзия"
                    onMouseOver={event => handleMouseOver(event, "Малайзия")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Малайзии");
                        setCountry("Малайзия");
                    }}
                ></path>
                <path
                    className="country"
                    d={papua}
                    data-name="Папуа-Новая Гвинея"
                    onMouseOver={event => handleMouseOver(event, "Папуа-Новая Гвинея")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Папуа-Новой Гвинее");
                        setCountry("Папуа-Новая Гвинея");
                    }}
                ></path>
                <path
                    className="country"
                    d={indonesia}
                    data-name="Индонезия"
                    onMouseOver={event => handleMouseOver(event, "Индонезия")}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                        onOpenModal("Индонезии");
                        setCountry("Индонезия");
                    }}
                ></path>
            </svg>
            <Tooltip countryName={tooltipData.countryName} position={tooltipData.position} />
        </div>
    );
}
