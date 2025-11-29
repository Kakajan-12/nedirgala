"use client";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import BurgerLanguageSwitcher from "./BurgerLanguageSwitcher";

export default function BurgerMenu({ open = false, onClose = () => {} }) {
    const translation = useTranslations("home");
    const serviceTranlation = useTranslations("services");
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();

    let activeServiceIndex = "";
    if (pathname.includes("lift")) {
        activeServiceIndex = 0;
    }
    if (pathname.includes("greenhouse")) {
        activeServiceIndex = 1;
    }
    if (pathname.includes("tomate")) {
        activeServiceIndex = 2;
    }
    if (pathname.includes("constructions")) {
        activeServiceIndex = 3;
    }
    if (pathname.includes("technics")) {
        activeServiceIndex = 4;
    }

    const onLinkClick = () => {
        onClose();
        setServicesOpen(false);
    };

    return (
        <div
            className={`bg-white shadow-lg duration-200 overflow-hidden grid absolute right-0 top-0  md:hidden h-screen  ${
                open ? "w-[60vw] p-4" : "w-0 px-0"
            } `}
        >
            <div className="grid h-max">
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            onClose?.();
                        }}
                        className="rounded-full p-2 hover:bg-gray-100 duration-200"
                    >
                        <X></X>
                    </button>
                </div>
                <div className="grid h-max items-center gap-6">
                    <div className="grid">
                        <div
                            onClick={() => {
                                setServicesOpen(!servicesOpen);
                            }}
                            className="cursor-pointer text-gray-700 duration-200 p-2 hover:bg-gray-200 rounded-md"
                        >
                            {translation("services")}
                        </div>
                        {/* Dropdown */}
                        <div
                            onClick={onLinkClick}
                            className={`bg-gray-100   rounded-lg ml-8 duration-200 ${
                                servicesOpen ? "max-h-96 p-2" : "max-h-0"
                            }  overflow-hidden`}
                        >
                            <Link
                                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg duration-200 ${
                                    activeServiceIndex === 0 && "bg-gray-200"
                                } `}
                                href="/services/lift"
                            >
                                {serviceTranlation("lift")}
                            </Link>
                            <Link
                                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg duration-200  ${
                                    activeServiceIndex === 1 && "bg-gray-200"
                                } `}
                                href="/services/greenhouse"
                            >
                                {serviceTranlation("greenhouse")}
                            </Link>
                            <Link
                                className={` ${
                                    activeServiceIndex === 2 && "bg-gray-200"
                                } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg duration-200`}
                                href="/services/tomate"
                            >
                                {serviceTranlation("tomate")}
                            </Link>
                            <Link
                                className={`${
                                    activeServiceIndex === 3 && "bg-gray-200"
                                } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg duration-200`}
                                href="/services/constructions"
                            >
                                {serviceTranlation("constructions")}
                            </Link>
                            <Link
                                className={`${
                                    activeServiceIndex === 4 && "bg-gray-200"
                                } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg duration-200`}
                                href="/services/technics"
                            >
                                {serviceTranlation("technics")}
                            </Link>
                        </div>
                    </div>
                    <Link
                        onClick={onLinkClick}
                        className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                        href="/products"
                    >
                        {translation("products")}
                    </Link>
                    <Link
                        onClick={onLinkClick}
                        className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                        href="/product_base"
                    >
                        {translation("production_base")}
                    </Link>
                    <Link
                        onClick={onLinkClick}
                        className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                        href="/about"
                    >
                        {translation("about_us")}
                    </Link>
                    <Link
                        onClick={onLinkClick}
                        className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                        href="/contact"
                    >
                        {translation("contact")}
                    </Link>
                </div>
                <div
                    onClick={onLinkClick}
                    className="flex justify-items-center mx-auto my-4"
                >
                    <BurgerLanguageSwitcher></BurgerLanguageSwitcher>
                </div>
            </div>
        </div>
    );
}
