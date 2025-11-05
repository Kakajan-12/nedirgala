import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("Index"); // Type-safety for translations is an advanced topic
    return (
        <div className="">
            <h1>{t("title")}</h1>
        </div>
    );
}
