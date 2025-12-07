import { useTranslations } from "next-intl";

/* eslint-disable @next/next/no-img-element */
export default function About() {
    const translation = useTranslations("about");
    return (
        <div className="grid">
            <div className="w-full relative overflow-hidden md:h-[80vh] h-[30vh] mt-[-188px] ">
                <img
                    className="w-full h-full object-cover"
                    src="/assets/img/berkarar.webp"
                    alt="nedir gala"
                />
                <div className="absolute bg-black/40 top-0 w-full h-full grid content-end">
                    <label className="md:text-[65px] text-[35px]  text-white px-4 md:px-[55px] md:py-[85px] py-[25px]">
                        {translation("about")}
                    </label>
                </div>
            </div>
            <div className="md:m-[55px] m-5 p-4 md:p-[65px] bg-white rounded-2xl">
                <p className="my-6">{translation("description")}</p>
            </div>
        </div>
    );
}
