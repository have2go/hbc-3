import containers from "/public/containers.svg";
import handshake from "/public/handshake.svg";
import docs from "/public/docs.svg";
import people from "/public/people.svg";

export const advantages = [
    {
        img: containers,
        number: 600,
        text: (
            <p className="text-center MD:text-xs">
                контейнеров{<br />}перевозится{<br />}нами в{<br />}месяц
            </p>
        ),
    },
    {
        img: handshake,
        number: 1000,
        text: (
            <p className="text-center MD:text-xs">
                клиентов и{<br />}партнеров{<br />}пользуются нашими{<br />}услугами
            </p>
        ),
    },
    {
        img: docs,
        number: 600,
        text: (
            <p className="text-center MD:text-xs">
                деклараций{<br />}оформляем{<br />}ежемесячно
            </p>
        ),
    },
    {
        img: people,
        number: 100,
        text: (
            <p className="text-center MD:text-xs">
                специалистов в{<br />}таможенно-{<br />}логистической{<br />}сфере
            </p>
        ),
    },
];
