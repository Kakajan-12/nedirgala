"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Menu } from "lucide";
import { MenuIcon } from "lucide-react";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

export default function Header() {
    const translation = useTranslations("home");
    const serviceTranlation = useTranslations("services");
    const contactTranslation = useTranslations("contact");
    const [burgerIsOpen, setBurgerOpen] = useState(false);

    return (
        <div className="py-4 md:py-[55px] pt-2 md:pt-[30px] sticky top-0 z-10">
            <BurgerMenu
                open={burgerIsOpen}
                onClose={() => {
                    setBurgerOpen(false);
                }}
            ></BurgerMenu>
            <div
                className="max-w-[1330px] h-[70px] md:h-[103px] text-[14px] lg:text-[20px] mx-auto 
                                flex items-center justify-between  bg-white  rounded-2xl px-1 md:px-[15px] py-[25px]"
            >
                {/* LOGO */}
                <Link href="/">
                    <img
                        className=" w-[150px] md:w-[110px] lg:w-[180px] xl:w-[200px]"
                        src="/assets/img/logo.png"
                        alt="logo"
                    />
                </Link>
                {/* links */}
                <div className="hidden md:block w-full px-1">
                    <div className="flex justify-center w-full gap-3 md:gap-3.5  xl:gap-[30px]">
                        <div className="relative group ">
                            <span className="cursor-pointer  text-gray-600 duration-200  hover:bg-gray-200 rounded-md">
                                {translation("services")}
                            </span>
                            {/* Dropdown */}
                            <div
                                className="absolute z-10 border border-gray-200 left-0 mt-2 w-48 bg-white 
                            rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible"
                            >
                                <Link
                                    className="block px-3 py-2  text-gray-700 hover:bg-gray-200 duration-200"
                                    href="/services/lift"
                                >
                                    {serviceTranlation("lift")}
                                </Link>
                                <Link
                                    className="block px-3 py-2  text-gray-700 hover:bg-gray-200 duration-200"
                                    href="/services/greenhouse"
                                >
                                    {serviceTranlation("greenhouse")}
                                </Link>
                                <Link
                                    className="block px-3 py-2  text-gray-700 hover:bg-gray-200 duration-200"
                                    href="/services/tomate"
                                >
                                    {serviceTranlation("tomate")}
                                </Link>
                                <Link
                                    className="block px-3 py-2  text-gray-700 hover:bg-gray-200 duration-200"
                                    href="/services/constructions"
                                >
                                    {serviceTranlation("constructions")}
                                </Link>
                                <Link
                                    className="block px-4 py-2  text-gray-700 hover:bg-gray-200 duration-200"
                                    href="/services/technics"
                                >
                                    {serviceTranlation("technics")}
                                </Link>
                            </div>
                        </div>
                        <Link
                            className="text-gray-600 duration-200 hover:bg-gray-200 rounded-md"
                            href="/products"
                        >
                            {translation("products")}
                        </Link>
                        <Link
                            className="text-gray-600 duration-200 hover:bg-gray-200 rounded-md"
                            href="/product_base"
                        >
                            {translation("production_base")}
                        </Link>
                        <Link
                            className="text-gray-600 duration-200 hover:bg-gray-200 rounded-md"
                            href="/about"
                        >
                            {translation("about_us")}
                        </Link>
                        <Link
                            className="text-gray-600 duration-200 hover:bg-gray-200 rounded-md"
                            href="/contact"
                        >
                            {translation("contact")}
                        </Link>
                    </div>
                </div>

                {/* flags */}

                <div className="hidden md:block">
                    <LanguageSwitcher />
                </div>
                <button
                    onClick={() => {
                        setBurgerOpen(!burgerIsOpen);
                    }}
                    className="hover:bg-gray-100 rounded-2xl px-2 py-2 md:hidden"
                >
                    <MenuIcon size={35}></MenuIcon>
                </button>
            </div>
        </div>
    );
}
