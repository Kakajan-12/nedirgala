import "./globals.css";

export const metadata = {
    title: "Nedirgala",
    description: "",
};

export default function RootLayout({ children, params: { locale } }) {
    return (
        <html lang={locale}>
            <body className={``}>{children}</body>
        </html>
    );
}
