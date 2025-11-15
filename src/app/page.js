/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
    const t = useTranslations("home");
    const ts = useTranslations("services");

    return (
        <div>
            <section
                className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center overflow-hidden rounded-2xl max-h-[300px] md:max-h-[800px]"
                style={{ backgroundImage: "url('/assets/img/berkarar.jpg')" }}
            >
                <div className="bg-black/50 text-white bg-opacity-50 w-full h-full rounded-lg flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold">
                        {t("main_title")}
                    </h1>
                    <h6 className="text-xl md:text-2xl mt-2">
                        {t("main_subtitle")}
                    </h6>
                </div>
            </section>

            <section className="py-16 ">
                <div className="grid md:grid-cols-2 gap-8 content-start">
                    <div>
                        <img
                            src="/assets/img/berkarar.jpg"
                            alt="nedir gala"
                            className="rounded-2xl overflow-hidden w-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-4">
                            {t("about_section_title")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed line-clamp-6 ">
                            {t("about_section_description")}
                        </p>
                        <Link
                            href="/about"
                            className="mt-4 inline-block text-blue-600 hover:underline"
                        >
                            {t("about_section_more")}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-8">
                        {t("services_section_title")}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceItem
                            href="/greenhouse"
                            imgUrl={"/assets/img/lift/lift1.png"}
                            name={ts("lift")}
                        />
                        <ServiceItem
                            href="/greenhouse"
                            imgUrl="/assets/img/greenhouse/teplisa1.JPG"
                            name={ts("greenhouse")}
                        />
                        <ServiceItem
                            href="/products"
                            imgUrl="/assets/img/products/ketchup_main.jpg"
                            name={ts("products")}
                        />
                        <ServiceItem
                            href="/tomate"
                            imgUrl="/assets/img/tomato_plant/tomato2.jpg"
                            name={ts("tomate")}
                        />
                        <ServiceItem
                            href="/construction"
                            imgUrl="/assets/img/construction/construction6.png"
                            name={ts("constructions")}
                        />
                        <ServiceItem
                            href="/technics"
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
        <a href={href} className="group block">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                    src={imgUrl}
                    alt={name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 text-slate-600 p-4 text-lg font-semibold">
                    {name}
                </p>
            </div>
        </a>
    );
}
