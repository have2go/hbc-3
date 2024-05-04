import containers from "/public/containers.svg";
import handshake from "/public/handshake.svg";
import docs from "/public/docs.svg";
import people from "/public/people.svg";

export const advantagesEn = [
    {
        img: containers,
        number: 600,
        text: (
            <p className="text-center MD:text-xs font-bold">
                transport{<br />}dispatches per{<br />}month
            </p>
        ),
    },
    {
        img: handshake,
        number: 1000,
        text: <p className="text-center MD:text-xs font-bold">clients and partners{<br />}use our services</p>,
    },
    {
        img: docs,
        number: 3000,
        text: (
            <p className="text-center MD:text-xs font-bold">
                declarations{<br />}processed{<br />}monthly
            </p>
        ),
    },
    {
        img: people,
        number: 100,
        text: (
            <p className="text-center MD:text-xs font-bold">
                specialists in{<br />}customs and{<br />}logistics
            </p>
        ),
    },
];
