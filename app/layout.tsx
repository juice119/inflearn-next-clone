import "./globals.css";
import Providers from "./config/providers";

// @ts-ignore
export default async function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}