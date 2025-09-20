import "../styles/index.css";
import Header from "@/components/commonComponents/Header/Header";
import { Providers } from "./providers";
import Footer from "@/components/commonComponents/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@/utility/analytics/analyticsScript";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
            <head>
                <Analytics />
            </head>
            <body className="bg-white text-black dark:bg-dark dark:text-white">
                <Providers>
                    <Header />
                    <main className="min-h-[82.5vh]">{children}</main>
                    <Footer />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </Providers>
            </body>
        </html>
    );
}
