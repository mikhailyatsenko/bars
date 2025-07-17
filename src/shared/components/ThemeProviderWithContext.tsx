"use client";
import { createContext, useContext, useMemo, useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/shared/theme";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

interface ThemeModeContextProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextProps>({
  mode: 'light',
  toggleTheme: () => {},
});

export function useThemeMode() {
  return useContext(ThemeModeContext);
}

export function ThemeProviderWithContext({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    }
  }, []);

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          {children}
        </AppRouterCacheProvider>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
} 