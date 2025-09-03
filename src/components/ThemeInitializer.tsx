// components/ThemeInitializer.jsx
"use client";

import { useEffect } from "react";
import { useDarkTheme } from "../contexts/DarkThemeContext";

export default function ThemeInitializer() {
    const { isDarkTheme, setIsDarkTheme } = useDarkTheme();

    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if (
            theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setIsDarkTheme(true);
        } else {
            setIsDarkTheme(false);
        }
    }, []);

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "";
        }
    }, [isDarkTheme]);

    return null;
}