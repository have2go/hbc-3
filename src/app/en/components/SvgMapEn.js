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
import Tooltip from "@/components/Tooltip";
import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import ModalWithFormMapEn from "./common/ModalWithFormMapEn";

export default function SvgMap() {
    const [tooltipData, setTooltipData] = useState({ countryName: "", position: null });

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [formTitle, setFormTitle] = useState("Contact our representative for transactions via Russia");

    const onOpenModal = country => {
        setFormTitle(`Contact our representative for transactions via ${country}`);
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
            <ModalWithFormMapEn isOpen={isOpen} onOpenChange={onOpenChange} title={formTitle} />
            <svg viewBox="0 0 2480 1468" className="absolute top-0 left-0 h-auto">
                <path
                    className="country"
                    d={russia}
                    data-name="Россия"
                    onMouseOver={event => handleMouseOver(event, "Russia")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Russia")}
                ></path>
                <path
                    className="country"
                    d={belarussia}
                    data-name="Белоруссия"
                    onMouseOver={event => handleMouseOver(event, "Belarussia")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Belarussia")}
                ></path>
                <path
                    className="country"
                    d={germany}
                    data-name="Германия"
                    onMouseOver={event => handleMouseOver(event, "Germany")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Germany")}
                ></path>
                <path
                    className="country"
                    d={serbia}
                    data-name="Сербия"
                    onMouseOver={event => handleMouseOver(event, "Serbia")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Serbia")}
                ></path>
                <path
                    className="country"
                    d={morocco}
                    data-name="Марокко"
                    onMouseOver={event => handleMouseOver(event, "Morocco")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Morocco")}
                ></path>
                <path
                    className="country"
                    d={senegal}
                    data-name="Сенегал"
                    onMouseOver={event => handleMouseOver(event, "Senegal")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Senegal")}
                ></path>
                <path
                    className="country"
                    d={nigeria}
                    data-name="Нигерия"
                    onMouseOver={event => handleMouseOver(event, "Nigeria")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Nigeria")}
                ></path>
                <path
                    className="country"
                    d={cameroon}
                    data-name="Камерун"
                    onMouseOver={event => handleMouseOver(event, "Cameroon")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Cameroon")}
                ></path>
                <path
                    className="country"
                    d={congodr}
                    data-name="ДР Конго"
                    onMouseOver={event => handleMouseOver(event, "Congo DR")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Congo DR")}
                ></path>
                <path
                    className="country"
                    d={turkey}
                    data-name="Турция"
                    onMouseOver={event => handleMouseOver(event, "Turkey")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Turkey")}
                ></path>
                <path
                    className="country"
                    d={azerbaijan}
                    data-name="Азербайджан"
                    onMouseOver={event => handleMouseOver(event, "Azerbaijan")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Azerbaijan")}
                ></path>
                <path
                    className="country"
                    d={oae}
                    data-name="ОАЭ"
                    onMouseOver={event => handleMouseOver(event, "UAE")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("UAE")}
                ></path>
                <path
                    className="country"
                    d={kazakhstan}
                    data-name="Казахстан"
                    onMouseOver={event => handleMouseOver(event, "Kazakhstan")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Kazakhstan")}
                ></path>
                <path
                    className="country"
                    d={mongolia}
                    data-name="Монголия"
                    onMouseOver={event => handleMouseOver(event, "Mongolia")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Mongolia")}
                ></path>
                <path
                    className="country"
                    d={uzbekistan}
                    data-name="Узбекистан"
                    onMouseOver={event => handleMouseOver(event, "Uzbekistan")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Uzbekistan")}
                ></path>
                <path
                    className="country"
                    d={kyrgyzstan}
                    data-name="Кыргызстан"
                    onMouseOver={event => handleMouseOver(event, "Kyrgyzstan")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Kyrgyzstan")}
                ></path>
                <path
                    className="country"
                    d={china}
                    data-name="Китай"
                    onMouseOver={event => handleMouseOver(event, "China")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("China")}
                ></path>
                <path
                    className="country"
                    d={india}
                    data-name="Индия"
                    onMouseOver={event => handleMouseOver(event, "India")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("India")}
                ></path>
                <path
                    className="country"
                    d={shrilanka}
                    data-name="Шри-Ланка"
                    onMouseOver={event => handleMouseOver(event, "Sri Lanka")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Sri Lanka")}
                ></path>
                <path
                    className="country"
                    d={malaysia}
                    data-name="Малайзия"
                    onMouseOver={event => handleMouseOver(event, "Malaysia")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Malaysia")}
                ></path>
                <path
                    className="country"
                    d={papua}
                    data-name="Папуа-Новая Гвинея"
                    onMouseOver={event => handleMouseOver(event, "Papua New Guinea")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Papua New Guinea")}
                ></path>
                <path
                    className="country"
                    d={indonesia}
                    data-name="Индонезия"
                    onMouseOver={event => handleMouseOver(event, "Indonesia")}
                    onMouseOut={handleMouseOut}
                    onClick={() => onOpenModal("Indonesia")}
                ></path>
            </svg>
            <Tooltip countryName={tooltipData.countryName} position={tooltipData.position} />
        </div>
    );
}
