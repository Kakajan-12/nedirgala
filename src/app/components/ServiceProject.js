/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import FancyboxWrapper from "../components/FancyboxWrapper";

export default function ProductBase({
    title,
    text,
    location,
    products,
    area,
    mainImageUrl,
    imageUrlList,
    client,
    building_type,
    year,
}) {
    return (
        <div className="grid gap-4">
            <label className="text-[40px] font-bold">{title}</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img className="rounded-2xl" src={mainImageUrl} alt="" />
                <div className="grid gap-2 content-start">
                    <div className="grid gap-4 content-between">
                        {client && (
                            <div className="project__text">
                                <p className="font-bold">Müşderi:</p>
                                <p>{client}</p>
                            </div>
                        )}
                        {building_type && (
                            <div className="project__text">
                                <p className="font-bold">Binaň görnüşi:</p>
                                <p>{building_type}</p>
                            </div>
                        )}
                        {location && (
                            <div className="project__text">
                                <p className="font-bold">Ýerleşýän ýeri:</p>
                                <p>{location}</p>
                            </div>
                        )}
                        {products && (
                            <div className="project__text">
                                <p className="font-bold">Öndürýän önümi:</p>
                                <p>{products}</p>
                            </div>
                        )}
                        {area && (
                            <div className="project__text">
                                <p className="font-bold">Tutýan meýdany:</p>
                                <p>{area}</p>
                            </div>
                        )}
                        {year && (
                            <div className="project__text">
                                <p className="font-bold">
                                    Ýerine ýetirilen wagty:
                                </p>
                                <p>{year}</p>
                            </div>
                        )}
                    </div>
                    {text && (
                        <div className="">
                            <p>{text}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="project__gallery">
                <div className="grid grid-cols-3 gap-4">
                    <FancyboxWrapper>
                        {imageUrlList.map((item, index) => {
                            return (
                                <a
                                    key={index}
                                    className="rounded-2xl overflow-hidden aspect-square border border-gray-200"
                                    data-fancybox="gallery"
                                    data-src={item}
                                >
                                    <img
                                        className="object-cover aspect-square w-full h-full"
                                        src={item}
                                    />
                                </a>
                            );
                        })}
                    </FancyboxWrapper>
                </div>
            </div>
        </div>
    );
}
