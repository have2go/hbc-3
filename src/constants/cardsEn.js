import paymentsAgent from "/public/payments-agent.jpg";
// import tamojennoeOformlenie from "/public/tamojennoe-oformlenie.jpg";
import imp from "/public/imp.jpg";
import exp from "/public/exp.jpg";
import transit from "/public/transit.jpg";
import acise from "/public/acise.jpg";
import guarantees from "/public/guarantees.jpg";
import logistics from "/public/logistics.jpg";

export const cardsEn = [
    {
        img: paymentsAgent,
        title: "Payment agent",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                Our Agency Scheme, using non-resident accounts in the UAE and Turkey, facilitates your international
                transactions legally and efficiently. We guarantee the security, speed and legal integrity of all
                transactions, ensuring that your funds are handled with the utmost care and compliance.
            </p>
        ),
    },
    {
        img: imp,
        title: "Import",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                We handle your entire import process into Russia, managing customs clearance, compliance, and
                documentation. Our team works directly with Russian customs to expedite market entry and navigate
                regulatory challenges efficiently.
            </p>
        ),
    },
    {
        img: exp,
        title: "Export",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                We facilitate your export processes from Russia, ensuring smooth customs clearance and compliance with
                all export regulations. Our team directly coordinates with Russian authorities to streamline
                documentation and resolve any procedural hurdles quickly.
            </p>
        ),
    },
    {
        img: transit,
        title: "Transit",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                We streamline transit operations across Russia, handling all customs formalities and ensuring compliance
                with transit regulations. Our team coordinates efficiently with authorities to guarantee quick and
                smooth passage for your goods.
            </p>
        ),
    },
    {
        img: acise,
        title: "Excise goods",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                For products like alcohol, tobacco, or other excisable goods, we provide specialized customs clearance
                to streamline their entry into the market. Our services include handling documentation, calculating
                duties, and coordinating with customs to ensure compliance with Russian regulations.
            </p>
        ),
    },
    {
        img: guarantees,
        title: "Customs guarantees",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                We offer guarantees that facilitate the smooth clearance of your goods. This reduces financial risk and
                streamlines your market entry process. Our Customs Bonding Service provides robust support to foreign
                companies, ensuring that all duties and taxes are secured and regulatory compliance is met.
            </p>
        ),
    },
    {
        img: logistics,
        title: "Logistics",
        text: (
            <p className="mt-5 mb-5 text-[15px] leading-[120%] 2XL:mt-3 SM:mt-2 SM:text-sm">
                Complete management of logistics for import and export of goods. We organize shipments using all modes
                of transport, including multimodal transportations, as well as optimize routes, insure cargoes, and
                ensure their security at all stages of transportation.
            </p>
        ),
    },
];
