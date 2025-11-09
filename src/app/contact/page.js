/* eslint-disable @next/next/no-img-element */

"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start  ">
            <div className="grid gap-4">
                <label className="text-[50px] font-bold">
                    Biziň bilen habarlaşyň
                </label>
                <div className="flex items-center gap-6">
                    <MapPin color="green" size={40} />

                    <div>
                        <label className="font-bold">
                            Biziň ýerleşýän ýerimiz
                        </label>
                        <p>
                            Türkmenistan, ş.Aşgabat, Köpetdag etraby, 1972
                            (Atatürk) köçe, j-82, 6 gat, F1
                        </p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <Phone color="green" size={40} />
                    <div className="contact__info-text">
                        <label className="font-bold">
                            Telefon belgilerimiz
                        </label>
                        <p>+993(12)468160</p>
                        <p>+993(12)468161</p>
                        <p>+993(12)468162</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Mail color="green" size={40} />
                    <div className="contact__info-text">
                        <h4>Email adreslarymyz</h4>
                        <p>info@nedir-gala.com</p>
                    </div>
                </div>
            </div>
            <div id="yandex-map" className="h-[532px] w-full">
                <iframe
                    className="w-full h-full rounded-2xl overflow-hidden"
                    src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3Aa03926bc18c46afca9eb0fdd86e2a8c9e885cd820760e9dfefc31589211230c7"
                ></iframe>
            </div>
        </div>
    );
}
