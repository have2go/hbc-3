import * as React from "react";
import { Providers } from "./providers";

import { Inter, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "Highbrow Customs",
    description: "Услуги для международной торговли",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={`${montserrat.className}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
