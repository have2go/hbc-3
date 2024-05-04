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
                    onMouseOver={event => handleMouseOver(event, "Russia")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={belarussia}
                    data-name="Белоруссия"
                    onMouseOver={event => handleMouseOver(event, "Belarussia")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={germany}
                    data-name="Германия"
                    onMouseOver={event => handleMouseOver(event, "Germany")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={serbia}
                    data-name="Сербия"
                    onMouseOver={event => handleMouseOver(event, "Serbia")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={morocco}
                    data-name="Марокко"
                    onMouseOver={event => handleMouseOver(event, "Morocco")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={senegal}
                    data-name="Сенегал"
                    onMouseOver={event => handleMouseOver(event, "Senegal")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={nigeria}
                    data-name="Нигерия"
                    onMouseOver={event => handleMouseOver(event, "Nigeria")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={cameroon}
                    data-name="Камерун"
                    onMouseOver={event => handleMouseOver(event, "Cameroon")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={congodr}
                    data-name="ДР Конго"
                    onMouseOver={event => handleMouseOver(event, "Congo DR")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={turkey}
                    data-name="Турция"
                    onMouseOver={event => handleMouseOver(event, "Turkey")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={azerbaijan}
                    data-name="Азербайджан"
                    onMouseOver={event => handleMouseOver(event, "Azerbaijan")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={oae}
                    data-name="ОАЭ"
                    onMouseOver={event => handleMouseOver(event, "UAE")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={kazakhstan}
                    data-name="Казахстан"
                    onMouseOver={event => handleMouseOver(event, "Kazakhstan")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={mongolia}
                    data-name="Монголия"
                    onMouseOver={event => handleMouseOver(event, "Mongolia")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={uzbekistan}
                    data-name="Узбекистан"
                    onMouseOver={event => handleMouseOver(event, "Uzbekistan")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={kyrgyzstan}
                    data-name="Кыргызстан"
                    onMouseOver={event => handleMouseOver(event, "Kyrgyzstan")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={china}
                    data-name="Китай"
                    onMouseOver={event => handleMouseOver(event, "China")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={india}
                    data-name="Индия"
                    onMouseOver={event => handleMouseOver(event, "India")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={shrilanka}
                    data-name="Шри-Ланка"
                    onMouseOver={event => handleMouseOver(event, "Sri Lanka")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={malaysia}
                    data-name="Малайзия"
                    onMouseOver={event => handleMouseOver(event, "Malaysia")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={papua}
                    data-name="Папуа-Новая Гвинея"
                    onMouseOver={event => handleMouseOver(event, "Papua New Guinea")}
                    onMouseOut={handleMouseOut}
                ></path>
                <path
                    className="country"
                    d={indonesia}
                    data-name="Индонезия"
                    onMouseOver={event => handleMouseOver(event, "Indonesia")}
                    onMouseOut={handleMouseOut}
                ></path>
            </svg>
            <Tooltip countryName={tooltipData.countryName} position={tooltipData.position} />
        </div>
    );
}
