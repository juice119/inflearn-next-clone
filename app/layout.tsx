import "./globals.css";
import Providers from "./config/providers";
import ReactQueryProvider from "@/app/config/ReactQueryProvider";

// @ts-ignore
export default async function RootLayout({children}) {
    return (
        <ReactQueryProvider>
            <html lang="en">
            <body>
            <Providers>
                {children}
            </Providers>
            </body>
            </html>
        </ReactQueryProvider>

    );
}