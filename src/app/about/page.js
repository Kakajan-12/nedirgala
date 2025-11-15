import { useTranslations } from "next-intl";

/* eslint-disable @next/next/no-img-element */
export default function About() {
    const translation = useTranslations("about");
    return (
        <div className="container">
            <div className="about-page__body">
                <div className="about-page__content">
                    <img
                        className="rounded-2xl mx-auto my-8"
                        src="/assets/img/berkarar.jpg"
                        alt="nedir gala"
                    />
                </div>
                <div className="about-page__content">
                    <p className="my-6">{translation("description")}</p>
                </div>
            </div>
        </div>
    );
}
