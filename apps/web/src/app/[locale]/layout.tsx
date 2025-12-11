import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useLocale } from "next-intl";

const ubuntu = Ubuntu({
    variable: "--font-ubuntu",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"]
});

const ubuntuMono = Ubuntu_Mono({
    variable: "--font-ubuntu-mono",
    subsets: ["latin"],
    weight: ["400", "700"]
});

export const metadata: Metadata = {
    title: "OpenTSB",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {
    const locale = useLocale();
    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased`}
            >
                <NextIntlClientProvider>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
