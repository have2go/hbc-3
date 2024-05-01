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
import { useState } from "react";

export default function SvgMap() {
    const [tooltipData, setTooltipData] = useState({ countryName: "", position: null });
    // let tooltipTimer;

    // const handleMouseOver = (event, countryName) => {
    //   clearTimeout(tooltipTimer);
    //   tooltipTimer = setTimeout(() => {
    //     setTooltipData({ countryName, position: { x: event.clientX, y: event.clientY } });
    //   }, 2); // Задержка в 200 миллисекунд
    // };

    // const handleMouseOut = () => {
    //   clearTimeout(tooltipTimer);
    //   setTooltipData({ countryName: "", position: null });
    // };

    const handleMouseOver = (event, countryName) => {
        setTooltipData({ countryName, position: { x: event.clientX + 10, y: event.clientY + 10 } });
    };

    const handleMouseOut = () => {
        setTooltipData({ countryName: "", position: null });
    };
    return (
        <div className="">
            <svg viewBox="0 0 2480 1468" className="absolute top-0 left-0 h-auto">
                <path
                    className="country"
                    d={russia}
                    data-name="Россия"
                    onMouseOver={event => handleMouseOver(event, "Россия")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={belarussia}
                    data-name="Белоруссия"
                    onMouseOver={event => handleMouseOver(event, "Белоруссия")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={germany}
                    data-name="Германия"
                    onMouseOver={event => handleMouseOver(event, "Германия")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={serbia}
                    data-name="Сербия"
                    onMouseOver={event => handleMouseOver(event, "Сербия")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={morocco}
                    data-name="Марокко"
                    onMouseOver={event => handleMouseOver(event, "Марокко")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={senegal}
                    data-name="Сенегал"
                    onMouseOver={event => handleMouseOver(event, "Сенегал")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={nigeria}
                    data-name="Нигерия"
                    onMouseOver={event => handleMouseOver(event, "Нигерия")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={cameroon}
                    data-name="Камерун"
                    onMouseOver={event => handleMouseOver(event, "Камерун")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={congodr}
                    data-name="ДР Конго"
                    onMouseOver={event => handleMouseOver(event, "ДР Конго")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={turkey}
                    data-name="Турция"
                    onMouseOver={event => handleMouseOver(event, "Турция")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={azerbaijan}
                    data-name="Азербайджан"
                    onMouseOver={event => handleMouseOver(event, "Азербайджан")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={oae}
                    data-name="ОАЭ"
                    onMouseOver={event => handleMouseOver(event, "ОАЭ")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={kazakhstan}
                    data-name="Казахстан"
                    onMouseOver={event => handleMouseOver(event, "Казахстан")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={mongolia}
                    data-name="Монголия"
                    onMouseOver={event => handleMouseOver(event, "Монголия")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={uzbekistan}
                    data-name="Узбекистан"
                    onMouseOver={event => handleMouseOver(event, "Узбекистан")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={kyrgyzstan}
                    data-name="Кыргызстан"
                    onMouseOver={event => handleMouseOver(event, "Кыргызстан")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={china}
                    data-name="Китай"
                    onMouseOver={event => handleMouseOver(event, "Китай")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={india}
                    data-name="Индия"
                    onMouseOver={event => handleMouseOver(event, "Индия")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={shrilanka}
                    data-name="Шри-Ланка"
                    onMouseOver={event => handleMouseOver(event, "Шри-Ланка")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={malaysia}
                    data-name="Малайзия"
                    onMouseOver={event => handleMouseOver(event, "Малайзия")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={papua}
                    data-name="Папуа-Новая Гвинея"
                    onMouseOver={event => handleMouseOver(event, "Папуа-Новая Гвинея")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={indonesia}
                    data-name="Индонезия"
                    onMouseOver={event => handleMouseOver(event, "Индонезия")}
                    onMouseOut={handleMouseOut}
                ></path>
            </svg>
            <Tooltip countryName={tooltipData.countryName} position={tooltipData.position} />
        </div>
    );
}
