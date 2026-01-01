import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check localStorage first
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;

        // Check system preference
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
            root.setAttribute("data-theme", "dark");
        } else {
            root.classList.remove("dark");
            root.setAttribute("data-theme", "light");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e) => {
            const savedTheme = localStorage.getItem("theme");
            if (!savedTheme) {
                setTheme(e.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const value = {
        theme,
        setTheme,
        toggleTheme,
        isDark: theme === "dark",
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeProvider;
