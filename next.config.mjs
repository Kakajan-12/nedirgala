// next.config.mjs

// 1. Используйте 'import' вместо 'require'
import createNextIntlPlugin from "next-intl/plugin";

// Укажите путь к вашему i18n-файлу (скорректируйте при необходимости)
const withNextIntl = createNextIntlPlugin("./i18n.js");

/** @type {import('next').NextConfig} */
const nextConfig = {};

// 2. Используйте 'export default' вместо 'module.exports'
export default withNextIntl(nextConfig);
