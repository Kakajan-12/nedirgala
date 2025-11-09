/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./globals.css";

import "@fontsource-variable/manrope";

export const metadata = {
    title: "Nedirgala",
    description: "",
};

export default function RootLayout({ children, params: { locale } }) {
    return (
        <html lang={locale}>
            <body className="max-w-[1400px] mx-auto px-2">
                {/* header */}
                <div className="sticky top-1 z-10 my-2 flex items-center justify-between  bg-slate-100  rounded-2xl px-4">
                    <div className="flex items-center">
                        {/* LOGO */}
                        <Link href="/">
                            <img
                                className="max-w-[200px] w-full"
                                src="../assets/img/logo.png"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <nav className="hidden md:flex">
                        <div className="flex items-center space-x-8">
                            <div className="relative group">
                                <span className="cursor-pointer text-gray-700 duration-200 p-2 hover:bg-gray-200 rounded-md">
                                    Hyzmatlar
                                </span>

                                {/* Dropdown */}
                                <div className="absolute z-10 border border-gray-200 left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                                    <Link
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                        href="/services/lift"
                                    >
                                        Lift
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                        href="/services/greenhouse"
                                    >
                                        Ýyladyşhana
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                        href="/services/tomate"
                                    >
                                        Tomat zawody
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                        href="/services/construction"
                                    >
                                        Gurluşyk
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                        href="/services/technics"
                                    >
                                        Tehnikalar
                                    </Link>
                                </div>
                            </div>
                            <Link
                                className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                href="/products"
                            >
                                Önümler
                            </Link>
                            <Link
                                className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                href="/product_base"
                            >
                                Önümçilik bazasy
                            </Link>
                            <Link
                                className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                href="/about"
                            >
                                Biz barada
                            </Link>
                            <Link
                                className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                href="/contact"
                            >
                                Kontakt
                            </Link>
                        </div>
                    </nav>

                    {/* Lang flags */}
                    <div className="flex items-center gap-2">
                        <button>
                            <img
                                className="w-[35px] h-7 object-cover overflow-hidden rounded-md border border-gray-200 hover:shadow-lg duration-200"
                                src="../assets/img/lang/turkmen.png"
                                alt="lang"
                            />
                        </button>
                        <button>
                            <img
                                className="w-[35px] h-7 object-cover overflow-hidden rounded-md border border-gray-200 hover:shadow-lg duration-200"
                                src="../assets/img/lang/english.webp"
                                alt="lang"
                            />
                        </button>
                        <button>
                            <img
                                className="w-[35px] h-7 object-cover overflow-hidden rounded-md border border-gray-200 hover:shadow-lg duration-200"
                                src="../assets/img/lang/russian.webp"
                                alt="lang"
                            />
                        </button>
                    </div>
                </div>
                {children}

                <div className="mx-auto px-4 text-center py-4 bg-gray-100 rounded-2xl my-4">
                    <h3 className="text-3xl font-bold mb-8">
                        Hyzmatdaşlarymyz
                    </h3>
                    <div className="flex justify-center items-center space-x-12">
                        <div className="">
                            <img
                                className="w-[180px] aspect-square border border-gray-200 rounded-2xl object-contain overflow-hidden bg-white"
                                src="../assets/img/brands/CNPC-logo.webp"
                                alt="logo"
                            />
                        </div>
                        <div className="">
                            <img
                                className="w-[180px] aspect-square border border-gray-200 rounded-2xl object-contain overflow-hidden bg-white"
                                src="../assets/img/brands/schindler.jpg"
                                alt="logo"
                            />
                        </div>
                        <div className="">
                            <img
                                className="w-[180px] aspect-square border border-gray-200 rounded-2xl object-contain overflow-hidden bg-white"
                                src="../assets/img/brands/TSTB.svg"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
                <footer className="bg-gray-800 text-white py-4 overflow-hidden rounded-2xl my-2">
                    <div className="container mx-auto text-center">
                        Nedir Gala <span>{new Date().getFullYear()}</span>
                    </div>
                    {/* <script src="../assets/js/app.js"></script> */}
                </footer>
            </body>
        </html>
    );
}
