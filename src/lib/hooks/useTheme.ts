import { useEffect, useState, useCallback } from "react";

const THEME_KEY = "theme-preference"; // localStorage key
const THEME_VALUES = { LIGHT: "light", DARK: "dark", SYSTEM: "system" };

function getSystemPrefersDark() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // initial state derived from localStorage (no DOM ops)
    try {
      const stored = localStorage.getItem(THEME_KEY);
      return stored || THEME_VALUES.SYSTEM;
    } catch {
      return THEME_VALUES.SYSTEM;
    }
  });

  // Apply theme to document.documentElement
  const applyTheme = useCallback((value: string) => {
    if (value === THEME_VALUES.DARK) {
      document.documentElement.classList.add("dark");
    } else if (value === THEME_VALUES.LIGHT) {
      document.documentElement.classList.remove("dark");
    } else {
      // system -> follow OS preference
      const prefersDark = getSystemPrefersDark();
      if (prefersDark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);

    // If system chosen, watch for changes to prefers-color-scheme
    let mql: MediaQueryList;
    function onSystemChange() {
      if (theme === THEME_VALUES.SYSTEM) {
        applyTheme(THEME_VALUES.SYSTEM); // re-evaluate
      }
    }

    if (window.matchMedia) {
      mql = window.matchMedia("(prefers-color-scheme: dark)");
      if (mql.addEventListener) mql.addEventListener("change", onSystemChange);
      else mql.addListener(onSystemChange);
    }

    return () => {
      if (!mql) return;
      if (mql.removeEventListener)
        mql.removeEventListener("change", onSystemChange);
      else mql.removeListener(onSystemChange);
    };
  }, [theme, applyTheme]);

  // call to change theme
  const set = useCallback(
    (value: string) => {
      try {
        localStorage.setItem(THEME_KEY, value);
      } catch (e) {
        console.error(e);
      }
      setTheme(value);
      applyTheme(value);
    },
    [applyTheme],
  );

  return {
    theme,
    setTheme: set,
  };
}
