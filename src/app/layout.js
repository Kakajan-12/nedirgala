/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

import "@fontsource-variable/manrope";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
    title: "Nedirgala",
    description: "",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    const messages = useMessages();
    return (
        <html>
            <body>
                <div className="bg-[#F6F5F0]">
                    <NextIntlClientProvider messages={messages}>
                        <Header></Header>
                        {children}
                        <Footer></Footer>
                    </NextIntlClientProvider>
                </div>
            </body>
        </html>
    );
}
