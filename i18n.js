import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const locales = ["tm", "en", "ru"];
export default getRequestConfig(async ({}) => {
    let locale = "tm";
    const cookieStore = await cookies();

    if (cookieStore.get("lang")) {
        locale = cookieStore.get("lang");
        if (!locales.includes(locale)) {
            locale = "tm";
        }
    }

    return {
        locale: locale,
        messages: (await import(`./src/messages/${locale}.json`)).default,
    };
});
