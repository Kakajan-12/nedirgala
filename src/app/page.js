/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
    const translation = useTranslations("home");
    const ts = useTranslations("services");

    return (
        <div className="mt-[-188px]">
            <div
                className="relative flex items-center justify-center text-white text-center bg-cover bg-center overflow-hidden h-[50vh] md:h-screen"
                style={{ backgroundImage: "url('/assets/img/berkarar.jpg')" }}
            >
                <div className="bg-black/41 text-white bg-opacity-50 w-full h-full rounded-lg flex flex-col items-center justify-center">
                    <h1 className="text-[40px] md:text-[96px] font-medium uppercase">
                        Nedir gala
                    </h1>
                    <h6 className="text-xl md:text-2xl mt-2">
                        {translation("main_subtitle")}
                    </h6>
                </div>
            </div>

            <section className="md:py-16 py-4 px-4 md:px-[55px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 ">
                    <div className="bg-white rounded-[15px] p-4 grid gap-[25px]">
                        <p className="text-gray-600 leading-relaxed text-[16px] line-clamp-17 mt-5 md:mt-[52px]">
                            {translation("about_section_description")}
                        </p>
                        <Link
                            href="/about"
                            className="md:mt-4 w-max h-max inline-block hover:opacity-80 duration-200 bg-green-700 text-white border-[#969595]  md:text-[25px] rounded-lg p-2.5"
                        >
                            {translation("about_section_more")}
                        </Link>
                    </div>
                    <img
                        src="/assets/img/berkarar.jpg"
                        alt="nedir gala"
                        className="w-full h-full object-cover hidden lg:block"
                    />
                </div>
            </section>

            <section className="py-4 md:py-16">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-8 text-[30px] md:text-[50px]">
                        {translation("services_section_title")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-[55px]">
                        <ServiceItem
                            href="/services/lift"
                            imgUrl={"/assets/img/lift/lift1.png"}
                            name={ts("lift")}
                        />
                        <ServiceItem
                            href="/services/greenhouse"
                            imgUrl="/assets/img/greenhouse/teplisa1.JPG"
                            name={ts("greenhouse")}
                        />
                        <ServiceItem
                            href="/products"
                            imgUrl="/assets/img/products/ketchup_main.jpg"
                            name={ts("products")}
                        />
                        <ServiceItem
                            href="/services/tomate"
                            imgUrl="/assets/img/tomato_plant/tomato2.jpg"
                            name={ts("tomate")}
                        />
                        <ServiceItem
                            href="/services/constructions"
                            imgUrl="/assets/img/construction/construction6.png"
                            name={ts("constructions")}
                        />
                        <ServiceItem
                            href="/services/technics"
                            imgUrl="/assets/img/technics/tehnika20.JPG"
                            name={ts("technics")}
                        />
                    </div>
                </div>
            </section>

            {/* partners */}
            <div className="mx-auto px-4 text-center pt-4 my-4 bg-white py-4">
                <h3 className=" text-2xl lg:text-3xl font-bold mb-8">
                    {translation("partners_section_title")}
                </h3>
                <div className="flex justify-center items-center gap-4">
                    <img
                        className="w-[180px] aspect-square border border-gray-200 p-4 rounded-2xl object-contain overflow-hidden "
                        src="/assets/img/brands/CNPC-logo.webp"
                        alt="logo"
                    />
                    <img
                        className="w-[180px] aspect-square border border-gray-200 p-4 rounded-2xl object-contain overflow-hidden bg-white"
                        src="/assets/img/brands/schindler.jpg"
                        alt="logo"
                    />
                    <img
                        className="w-[180px] aspect-square border border-gray-200 p-4 rounded-2xl object-contain overflow-hidden bg-white"
                        src="/assets/img/brands/TSTB.svg"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
}

function ServiceItem({ name, imgUrl, href }) {
    return (
        <Link href={href} className="group block ">
            <div className="overflow-hidden aspect-square rounded-[15px] grid grid-rows-[70%_30%] bg-white">
                <img
                    src={imgUrl}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 duration-300"
                />
                <label className="text-slate-600 font-semibold align-middle items-center text-[40px] md:text-[35px] h-max m-auto">
                    {name}
                </label>
            </div>
        </Link>
    );
}
