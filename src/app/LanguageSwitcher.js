"use client";

/* eslint-disable @next/next/no-img-element */
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLanguageCookie } from "@/app/actions";
import { useLanguageStore } from "../../languageStore";

export default function LanguageSwitcher() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { setLanguage } = useLanguageStore();

    const onFlagClick = (lang) => {
        startTransition(async () => {
            setLanguage(lang); // 1. Update client-side state immediately
            await setLanguageCookie(lang);
            router.refresh();
        });
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => onFlagClick("tm")}
                disabled={isPending}
                className="disabled:opacity-50"
            >
                <img
                    className="w-[35px] h-7 object-cover overflow-hidden rounded-md border border-gray-200 hover:shadow-lg duration-200"
                    src="/assets/img/lang/turkmen.png"
                    alt="Turkmen"
                />
            </button>
            <button
                onClick={() => onFlagClick("en")}
                disabled={isPending}
                className="disabled:opacity-50"
            >
                <img
                    className="w-[35px] h-7 object-cover overflow-hidden rounded-md border border-gray-200 hover:shadow-lg duration-200"
                    src="/assets/img/lang/english.webp"
                    alt="English"
                />
            </button>
            <button
                onClick={() => onFlagClick("ru")}
                disabled={isPending}
                className="disabled:opacity-50"
            >
                <img
                    className="w-[35px] h-7 object-cover overflow-hidden rounded-md border border-gray-200 hover:shadow-lg duration-200"
                    src="/assets/img/lang/russian.webp"
                    alt="Russian"
                />
            </button>
        </div>
    );
}
