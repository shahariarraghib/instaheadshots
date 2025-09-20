"use client";

import React, { useState, useEffect, createContext } from "react";
import { ThemeProvider } from "next-themes";

export const RouteContext = createContext<any>(null);

export function Providers({ children }: { children?: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState("");
    const [initialDarkMode, setInitialDarkMode] = useState<boolean | null>(null);

    useEffect(() => {
        // Check if running on the client side
        const isClient = typeof window !== "undefined";

        if (isClient) {
            const storedDarkMode = localStorage.getItem("theme");
            const systemDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            const darkMode = storedDarkMode ? storedDarkMode === "dark" : systemDarkMode;
            setInitialDarkMode(darkMode);
        }
    }, []);

    if (initialDarkMode === null) {
        // Render nothing or a loading spinner until we know the theme mode
        return null;
    }

    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme={initialDarkMode ? "dark" : "light"}>
            <RouteContext.Provider value={{ activeSection, setActiveSection }}>{children}</RouteContext.Provider>
        </ThemeProvider>
    );
}
