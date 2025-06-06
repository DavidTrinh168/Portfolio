import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { classNames } from "../libs/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const previousTheme = localStorage.getItem("theme");
        if (previousTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggletheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggletheme} className={classNames("fixed max-sm:hidden top-3 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden")}>
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-200" /> : <Moon className="h-6 w-6 text-grey-900" />}{" "}
        </button>
    );
};
