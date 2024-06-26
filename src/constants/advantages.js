import containers from "/public/containers.svg";
import handshake from "/public/handshake.svg";
import docs from "/public/docs.svg";
import people from "/public/people.svg";

export const advantages = [
    {
        img: containers,
        number: 600,
        text: (
            <p className="text-center MD:text-xs font-bold">
                контейнеров{<br />}перевозится{<br />}нами в{<br />}месяц
            </p>
        ),
    },
    {
        img: handshake,
        number: 1000,
        text: (
            <p className="text-center MD:text-xs font-bold">
                клиентов и{<br />}партнеров{<br />}пользуются нашими{<br />}услугами
            </p>
        ),
    },
    {
        img: docs,
        number: 3000,
        text: (
            <p className="text-center MD:text-xs font-bold">
                деклараций{<br />}оформляем{<br />}ежемесячно
            </p>
        ),
    },
    {
        img: people,
        number: 100,
        text: (
            <p className="text-center MD:text-xs font-bold">
                специалистов в{<br />}таможенно-{<br />}логистической{<br />}сфере
            </p>
        ),
    },
];
