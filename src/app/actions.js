"use server";

import { cookies } from "next/headers";

export async function setLanguageCookie(lang) {
    const cookieStore = await cookies();
    cookieStore.set("lang", lang);
}
