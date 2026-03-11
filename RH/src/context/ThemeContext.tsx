import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('Token'));

    const [theme, setThemeState] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        const hasToken = !!localStorage.getItem('Token');
        // If not logged in, default to light regardless of saved preference
        return hasToken ? (savedTheme || 'light') : 'light';
    });

    // Listen for login/logout (simple way using storage events or interval)
    useEffect(() => {
        const checkLogin = () => {
            const hasToken = !!localStorage.getItem('Token');
            setIsLoggedIn(hasToken);
            if (!hasToken) {
                setThemeState('light');
            }
        };

        window.addEventListener('storage', checkLogin);
        // Periodically check or check on focus as well for better reactivity
        const interval = setInterval(checkLogin, 1000);

        return () => {
            window.removeEventListener('storage', checkLogin);
            clearInterval(interval);
        };
    }, []);

    const setTheme = (newTheme: Theme) => {
        // Only allow changing theme if logged in
        if (localStorage.getItem('Token')) {
            setThemeState(newTheme);
            localStorage.setItem('theme', newTheme);
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark' && isLoggedIn) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme, isLoggedIn]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
