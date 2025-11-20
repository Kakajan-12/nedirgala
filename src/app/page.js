/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
    const t = useTranslations("home");
    const ts = useTranslations("services");

    return (
        <div>
            <div
                className="relative flex items-center justify-center text-white text-center bg-cover bg-center overflow-hidden h-[100vh]"
                style={{ backgroundImage: "url('/assets/img/berkarar.jpg')" }}
            >
                <div className="bg-black/41 text-white bg-opacity-50 w-full h-full rounded-lg flex flex-col items-center justify-center">
                    <h1 className="text-[96px] font-medium uppercase">
                        Nedir gala
                    </h1>
                    <h6 className="text-xl md:text-2xl mt-2">
                        {t("main_subtitle")}
                    </h6>
                </div>
            </div>

            <section className="py-16 px-[55px]">
                <div className="grid md:grid-cols-2 gap-2.5">
                    <div className="bg-white rounded-[15px] p-4 grid gap-[25px]">
                        <p className="text-gray-600 leading-relaxed text-[16px] line-clamp-17 mt-[52px]">
                            {t("about_section_description")}
                        </p>
                        <Link
                            href="/about"
                            className="mt-4 w-max h-max inline-block text-[#969494] border border-[#969595] text-[25px] rounded-lg p-2.5"
                        >
                            {t("about_section_more")}
                        </Link>
                    </div>
                    <div>
                        <img
                            src="/assets/img/berkarar.jpg"
                            alt="nedir gala"
                            className="h-full"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-8 text-[50px]">
                        {t("services_section_title")}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[55px]">
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
                <label className="text-slate-600 font-semibold align-middle items-center text-[35px] h-max m-auto">
                    {name}
                </label>
            </div>
        </Link>
    );
}
