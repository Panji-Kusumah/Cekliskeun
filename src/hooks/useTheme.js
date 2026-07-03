import { useEffect, useState } from "react";

const STORAGE_KEY = "Cekliskeun_theme";

export default function useTheme() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem(STORAGE_KEY) === "true";
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, isDarkMode);

        document.body.classList.toggle("dark-mode", isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return {
        isDarkMode,
        toggleTheme,
    };
}