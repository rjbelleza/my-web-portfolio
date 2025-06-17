import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Erro('useDarkMode must be used within a DarkModeProvider');
    }

    return context;
}

export const DarkModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {

        if (typeof window === 'undefined') return false;

        const saved = localStorage.getItem('theme');
        if (saved) {
            return saved === 'dark';
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleDarkMode = () => {
        setIsDark(prev => !prev);
    }

    const value = {
        isDark,
        toggleDarkMode,
        setDarkMode: setIsDark
    };

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    );
};
