'use client'
import { useState, useEffect, useLayoutEffect } from "react"

export function useTheme() {
    const [isDark, setIsDark] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        setIsMounted(true)
        if (currentTheme === "dark") {
            document.body.classList.add("dark");
            setIsDark(true);
        } else {
            document.body.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "" : "dark";
        localStorage.setItem("theme", newTheme);
        document.body.classList.toggle("dark");
        setIsDark(!isDark);
    };

    return { isDark, toggleTheme ,isMounted};
}

export const getInitialThemeScript = `
  (function () {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme') || '';
      console.log(theme,"theme");
      if (theme === 'dark') {
        document.body.classList.add('dark');
      }
    }
  })();
`;