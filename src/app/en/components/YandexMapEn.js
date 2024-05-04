import { useEffect } from "react";

export default function YandexMapEn() {
    useEffect(() => {
        const script = document.createElement("script");

        script.src =
            "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa4149d6edabb4658819c288e6b5e57d377e4498be49f524d97e7aef202f5876e&amp;width=592&amp;height=500&amp;lang=en_EN&amp;scroll=true";
        script.async = true;

        document.body.querySelector("#map").appendChild(script);

        return () => {
            if (document.body.querySelector("#map")) document.body.querySelector("#map").removeChild(script);
        };
    }, []);

    return (
        <section className="pt-20 w-full max-w-[1690px] mx-auto LG:pt-10 SM:pt-5  md:hidden">
            <h2 className="text-4xl mb-10 ml-5 LG:mb-5 LG:text-3xl SM:text-2xl">Global presence</h2>
            <div className="h-64" id="map"></div>
        </section>
    );
}
