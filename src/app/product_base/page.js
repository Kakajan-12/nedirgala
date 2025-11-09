/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import FancyboxWrapper from "../components/FancyboxWrapper";

export default function ProductBase() {
    return (
        <div className="container grid gap-4">
            <label className="text-[40px] font-bold">Önümçilik bazasy</label>
            <div className="grid grid-cols-2 gap-8">
                <img
                    className="rounded-2xl"
                    src="../assets/img/product-base/ng1.jpg"
                    alt=""
                />
                <div className="project__decription">
                    <div className="project__details grid content-between">
                        <div className="project__text">
                            <p className="font-bold">Ýerleşýän ýeri:</p>
                            <p>
                                Türkmenistan, Ahal welaýatynyň Ak bugdaý etraby
                            </p>
                        </div>
                        <div className="project__text">
                            <p className="font-bold">Öndürýän önümi:</p>
                            <p></p>
                        </div>
                        <div className="project__text">
                            <p className="font-bold">Tutýan meýdany:</p>
                            <p>2,08 ga</p>
                        </div>
                        <div className="project__goal">
                            <p>
                                “Nedir gala” hususy kärhanasyna, Türkmenistanyň
                                Senagatçylar we telekeçiler birleşmesi bilen
                                “Nedir gala” hususy kärhanasynyň arasynda
                                baglaşylan 2013-nji ýylyň 13-nji noýabryndaky
                                №6/4 belgili Maýa goýum şertnamasyna laýyklykda,
                                Ahal welaýatynyň Ak bugdaý etrabynyň çäginde
                                ýerleşýän senagat zolagyndan umumy meýdany 2,08
                                ga ybarat bolan ýer bölegi resmileşdirilip
                                berildi. Häzirki wagtda bölünip berilen ýer
                                böleginde degişli desgalaryň, ammarlaryň,
                                önümçilik sehleriniň gurluşyk işleri tamamlaýjy
                                tapgyrda alnyp barylýar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project__gallery">
                <div className="grid grid-cols-3 gap-4">
                    <FancyboxWrapper>
                        <a
                            className="project__photo rounded-2xl overflow-hidden"
                            data-fancybox="gallery"
                            href="../assets/img/product-base/ng1.jpg"
                        >
                            <img src="../assets/img/product-base/ng1.jpg" />
                        </a>
                        <a
                            className="project__photo rounded-2xl overflow-hidden"
                            data-fancybox="gallery"
                            href="../assets/img/product-base/ng2.jpg"
                        >
                            <img src="../assets/img/product-base/ng2.jpg" />
                        </a>
                        <a
                            className="project__photo rounded-2xl overflow-hidden"
                            data-fancybox="gallery"
                            href="../assets/img/product-base/ng3.jpg"
                        >
                            <img src="../assets/img/product-base/ng3.jpg" />
                        </a>
                        <a
                            className="project__photo rounded-2xl overflow-hidden"
                            data-fancybox="gallery"
                            href="../assets/img/product-base/ng4.jpg"
                        >
                            <img src="../assets/img/product-base/ng4.jpg" />
                        </a>
                        <a
                            className="project__photo rounded-2xl overflow-hidden"
                            data-fancybox="gallery"
                            href="../assets/img/product-base/ng5.jpg"
                        >
                            <img src="../assets/img/product-base/ng5.jpg" />
                        </a>
                        <a
                            className="project__photo rounded-2xl overflow-hidden"
                            data-fancybox="gallery"
                            href="../assets/img/product-base/ng6.jpg"
                        >
                            <img src="../assets/img/product-base/ng6.jpg" />
                        </a>
                        <a
                            className="project__photo rounded-2xl overflow-hidden"
                            data-fancybox="gallery"
                            href="../assets/img/product-base/ng7.jpg"
                        >
                            <img src="../assets/img/product-base/ng7.jpg" />
                        </a>
                    </FancyboxWrapper>
                </div>
            </div>
        </div>
    );
}
