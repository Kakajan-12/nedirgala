/* eslint-disable @next/next/no-img-element */

"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("contact");
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start px-5 md:px-[55px] ">
            <div className="grid gap-4">
                <label className="md:text-[50px] text-[30px] font-bold">
                    {t("title")}
                </label>
                <div className="grid grid-cols-[60px_auto]">
                    <MapPin color="green" size={40} />

                    <div>
                        <label className="font-bold">
                            {t("location_title")}
                        </label>
                        <p>{t("location_address")}</p>
                    </div>
                </div>

                <div className="grid grid-cols-[60px_auto]">
                    <Phone color="green" size={40} />
                    <div className="contact__info-text">
                        <label className="font-bold">{t("phone_title")}</label>
                        <p>+993(12)468160</p>
                        <p>+993(12)468161</p>
                        <p>+993(12)468162</p>
                    </div>
                </div>
                <div className="grid grid-cols-[60px_auto]">
                    <Mail color="green" size={40} />
                    <div className="contact__info-text">
                        <h4 className="font-bold">{t("email_title")}</h4>
                        <p>info@nedir-gala.com</p>
                    </div>
                </div>
            </div>
            <div id="yandex-map" className="md:h-[532px] aspect-square w-full">
                {/* <iframe
                    className="w-full h-full rounded-2xl overflow-hidden"
                    src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3Aa03926bc18c46afca9eb0fdd86e2a8c9e885cd820760e9dfefc31589211230c7"
                ></iframe> */}

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.305259839124!2d58.36917412166613!3d37.89339143783868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f700281a6707c9d%3A0x98296aa2668c013c!2z0KLQvtGA0LPQvtCy0L4t0YDQsNC30LLQu9C10LrQsNGC0LXQu9GM0L3Ri9C5INGG0LXQvdGC0YAgItCR0LXRgNC60LDRgNCw0YAi!5e1!3m2!1sru!2sth!4v1764615187251!5m2!1sru!2sth"
                    className="w-full h-full rounded-2xl overflow-hidden"
                ></iframe>
            </div>
        </div>
    );
}
