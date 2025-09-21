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
            <div className="border-t-1 border-t-gray fixed inset-x-0 bottom-0 z-50 bg-white py-4">
                <button className="relative mx-auto flex w-full max-w-sm cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-primary bg-primary px-9 py-3 text-sm font-[450] text-white active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 sm:hidden sm:gap-4 sm:py-14 sm:text-5xl">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    Create your Headshots Now For FREE
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 transition-transform duration-200 ease-in sm:h-12 sm:w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </html>
    );
}
