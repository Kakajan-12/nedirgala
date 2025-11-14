"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
    // const translation = useTranslations("Index");

    return (
        <div>
            <section
                className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center overflow-hidden rounded-2xl max-h-[300px] md:max-h-[800px]"
                style={{ backgroundImage: "url('/assets/img/berkarar.jpg')" }}
            >
                <div className="bg-black/50 text-white bg-opacity-50 w-full h-full rounded-lg flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold">
                        Nedir Gala
                    </h1>
                    <h6 className="text-xl md:text-2xl mt-2">hususy kärhana</h6>
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
                        <p className="text-gray-600 leading-relaxed ">
                            “Nedir Gala” Hususy Kärhanasy 2011-nji ýylyň 7-nji
                            martynda döredildi. “Nedir Gala” Hususy Kärhanasy
                            Türkmenistanyň Ykdysadyýet we ösüş ministrliginiň
                            Edara görnüşindäki taraplary we maýa goýum
                            taslamalaryny döwlet tarapyndan hasaba almak
                            müdirligi tarapyndan 24.02.2017-nji ýylda berlen
                            23675020 belgili ýeke-täk döwlet sanawyna girizmek
                            baradaky şahadatnamasy we Hususy Kärhananyň
                            Tertipnamasy esasynda telekeçilik işini amala
                            aşyrýar.“Nedir Gala” Hususy kärhanasy köp ýyllaryň
                            dowamynda telekeçilik işleriniň görnüşleri bilen
                            meşgullanyp, bu ugurda netijeli görkezijileri
                            gazanyp gelýär. Kärhana özüne berilen degişli
                            ygtyýarnamalary laýyklykda, birnäçe desgalaryň
                            gurluşyk işlerini ýerine ýetirdi. Olardan
                            2011-2012-nji ýyllarda “Türkmenistanda ýerleşen
                            HHR-nyň CNPC kompaniýasynyň ýanyndaky jogapkärçiligi
                            çäklendirilen Çuansin buraw inžener kompaniýasynyň”
                            buýurmagynda Mary welaýatynyň Ýolöten etrabynda
                            “UPPK2”,”UPPK3” we “4 sany potstansiýa binasy”
                            hem-de “Bug gazan binasynyň binýady” uly göwrümli
                            binalarynyň gurluşyk-gurnama işlerini ýerine
                            ýetirdi. Mundan başga-da 2018-nji ýylda baglaşylan
                            şertnama laýyklykda, “Türkmenistanyň “Bagtyýarlyk”
                            ylalaşylan meýdançasynda Demirýolunyň aşagyndan
                            turba geçirmek boýunça gurluşyk işleri” desgasy...
                        </p>
                        <Link
                            href="/about"
                            className="mt-4 inline-block text-blue-600 hover:underline"
                        >
                            Giňişleýin
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-8">Hyzmatlarymyz</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceItem
                            href="/greenhouse"
                            imgUrl={"/assets/img/lift/lift1.png"}
                            name={"Lift"}
                        ></ServiceItem>

                        <ServiceItem
                            href="/greenhouse"
                            imgUrl="/assets/img/greenhouse/teplisa1.JPG"
                            name="Teplisa"
                        />
                        <ServiceItem
                            href="/products"
                            imgUrl="/assets/img/products/ketchup_main.jpg"
                            name="Önümler"
                        />
                        <ServiceItem
                            href="/tomate"
                            imgUrl="/assets/img/tomato_plant/tomato2.jpg"
                            name="Tomat zawody"
                        />
                        <ServiceItem
                            href="/construction"
                            imgUrl="/assets/img/construction/construction6.png"
                            name="Gurluşyk"
                        />
                        <ServiceItem
                            href="/technics"
                            imgUrl="/assets/img/technics/tehnika20.JPG"
                            name="Tehnikalar"
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
