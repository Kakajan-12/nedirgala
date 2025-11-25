/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./globals.css";
import {
    NextIntlClientProvider,
    useMessages,
    useTranslations,
} from "next-intl";

import "@fontsource-variable/manrope";
import LanguageSwitcher from "./LanguageSwitcher";

export const metadata = {
    title: "Nedirgala",
    description: "",
};

export default function RootLayout({ children }) {
    const messages = useMessages();
    const translation = useTranslations("home");
    const serviceTranlation = useTranslations("services");
    const contactTranslation = useTranslations("contact");
    const footerTranslation = useTranslations("footer");

    return (
        <html>
            <body>
                <div className="bg-[#F6F5F0]">
                    <NextIntlClientProvider messages={messages}>
                        {/* header */}
                        <div className="py-4 md:py-[55px] pt-2 md:pt-[30px] sticky top-0 z-10">
                            <div className="max-w-[1330px] h-[70px] md:h-[103px] text-[16px] lg:text-[20px] mx-auto  flex items-center justify-between  bg-white  rounded-2xl px-[15px] py-[25px]">
                                <div className="flex items-center">
                                    {/* LOGO */}
                                    <Link href="/">
                                        <img
                                            className=" max-w-[150px] md:max-w-[197px] w-full"
                                            src="/assets/img/logo.png"
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                                <nav className="hidden md:flex">
                                    <div className="flex items-center space-x-8">
                                        <div className="relative group">
                                            <span className="cursor-pointer text-gray-700 duration-200 p-2 hover:bg-gray-200 rounded-md">
                                                {translation("services")}
                                            </span>
                                            {/* Dropdown */}
                                            <div className="absolute z-10 border border-gray-200 left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                                                <Link
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                                    href="/services/lift"
                                                >
                                                    {serviceTranlation("lift")}
                                                </Link>
                                                <Link
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                                    href="/services/greenhouse"
                                                >
                                                    {serviceTranlation(
                                                        "greenhouse"
                                                    )}
                                                </Link>
                                                <Link
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                                    href="/services/tomate"
                                                >
                                                    {serviceTranlation(
                                                        "tomate"
                                                    )}
                                                </Link>
                                                <Link
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                                    href="/services/constructions"
                                                >
                                                    {serviceTranlation(
                                                        "constructions"
                                                    )}
                                                </Link>
                                                <Link
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                                    href="/services/technics"
                                                >
                                                    {serviceTranlation(
                                                        "technics"
                                                    )}
                                                </Link>
                                            </div>
                                        </div>
                                        <Link
                                            className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                            href="/products"
                                        >
                                            {translation("products")}
                                        </Link>
                                        <Link
                                            className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                            href="/product_base"
                                        >
                                            {translation("production_base")}
                                        </Link>
                                        <Link
                                            className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                            href="/about"
                                        >
                                            {translation("about_us")}
                                        </Link>
                                        <Link
                                            className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                            href="/contact"
                                        >
                                            {translation("contact")}
                                        </Link>
                                    </div>
                                </nav>
                                {/* Lang flags */}
                                <LanguageSwitcher />
                            </div>
                        </div>
                        {children}

                        <footer className=" text-[#272727] py-4 bg-white text-[18px]">
                            <div className=" flex items-center px-4 md:px-8">
                                <img
                                    className="md:h-10 h-[30px]"
                                    alt=""
                                    src={"/assets/img/footer-logo.png"}
                                ></img>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 py-10 md:px-8 px-4 bg-white border-b-gray-200 border-b gap-4">
                                <div className="grid content-start gap-1 md:gap-8">
                                    <label className="text-[25px] font-semibold">
                                        {contactTranslation("location_title")}
                                    </label>
                                    <span className="text-[12px] max-w-[180px]">
                                        {contactTranslation("location_address")}
                                    </span>
                                </div>
                                <div className="grid md:gap-8 gap-1">
                                    <label className="text-[25px] font-semibold">
                                        {footerTranslation("navigation")}
                                    </label>
                                    <div className="grid">
                                        <Link
                                            className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                            href="#"
                                        >
                                            {translation("services")}
                                        </Link>
                                        <Link
                                            className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                            href="/services/lift"
                                        >
                                            {serviceTranlation("lift")}
                                        </Link>
                                        <Link
                                            className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                            href="/services/greenhouse"
                                        >
                                            {serviceTranlation("greenhouse")}
                                        </Link>
                                        <Link
                                            className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                            href="/about"
                                        >
                                            {translation("about_us")}
                                        </Link>
                                        <Link
                                            className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                            href="/contact"
                                        >
                                            {translation("contact")}
                                        </Link>
                                    </div>
                                </div>
                                <div className="grid gap-1 md:gap-8">
                                    <label className="text-[25px] font-semibold">
                                        {footerTranslation("navigation")}
                                    </label>
                                    <div className="grid">
                                        <Link
                                            className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                            href="/product_base"
                                        >
                                            {translation("production_base")}
                                        </Link>
                                        <Link
                                            className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                            href="/products"
                                        >
                                            {translation("products")}
                                        </Link>
                                        <Link
                                            className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                            href="/services/tomate"
                                        >
                                            {serviceTranlation("tomate")}
                                        </Link>
                                        <Link
                                            className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                            href="/services/constructions"
                                        >
                                            {serviceTranlation("constructions")}
                                        </Link>
                                        <Link
                                            className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                            href="/technics"
                                        >
                                            {serviceTranlation("technics")}
                                        </Link>
                                    </div>
                                </div>
                                <div className="grid content-start gap-1.5">
                                    <label className="text-[25px] font-semibold mb-8">
                                        {contactTranslation("title")}
                                    </label>
                                    <label className="font-semibold">
                                        {contactTranslation("phone_title")}
                                    </label>
                                    <Link
                                        className="hover:bg-gray-100 duration-100 w-max rounded-md"
                                        href={"tel:+993(12)468160"}
                                    >
                                        +993(12)468160
                                    </Link>
                                    <Link
                                        className="hover:bg-gray-100 duration-100 w-max rounded-md"
                                        href={"tel:+993(12)468161"}
                                    >
                                        +993(12)468161
                                    </Link>
                                    <Link
                                        className="hover:bg-gray-100 duration-100 w-max rounded-md"
                                        href={"tel:+993(12)468162"}
                                    >
                                        +993(12)468162
                                    </Link>
                                    <Link
                                        className="hover:bg-gray-100 duration-100 w-max rounded-md"
                                        href={"mail:info@nedir-gala.com"}
                                    >
                                        Email: info@nedir-gala.com
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center lg:text-[35px] font-semibold">
                                Nedir Gala{" "}
                                <span>{new Date().getFullYear()}</span>
                            </div>
                        </footer>
                    </NextIntlClientProvider>
                </div>
            </body>
        </html>
    );
}
