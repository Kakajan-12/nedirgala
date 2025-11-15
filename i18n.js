import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const locales = ["tm", "en", "ru"];
export default getRequestConfig(async ({}) => {
    const cookieStore = await cookies();
    const locale = (await cookieStore.get("lang")?.value) || "tm";

    return {
        locale: locale,
        messages: (await import(`./src/messages/${locale}.json`)).default,
    };
});
