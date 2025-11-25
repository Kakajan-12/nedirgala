import { useTranslations } from "next-intl";

/* eslint-disable @next/next/no-img-element */
export default function About() {
    const translation = useTranslations("about");
    return (
        <div className="">
            <div className="">
                <div className="w-full relative overflow-hidden h-[80vh]">
                    <img
                        className="w-full h-full object-cover"
                        src="/assets/img/berkarar.jpg"
                        alt="nedir gala"
                    />
                    <div className="absolute bg-black/40 top-0 w-full h-full grid content-end">
                        <label className="text-[65px] text-white px-[55px] py-[85px]">
                            {translation("about")}
                        </label>
                    </div>
                </div>
                <div className="m-[55px] p-[65px] bg-white rounded-2xl">
                    <p className="my-6">{translation("description")}</p>
                </div>
            </div>
        </div>
    );
}
