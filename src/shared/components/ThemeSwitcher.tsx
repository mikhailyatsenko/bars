"use client";
import { useThemeMode } from "@/shared/components/ThemeProviderWithContext";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export function ThemeSwitcher() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <IconButton onClick={toggleTheme} color="inherit" aria-label="Переключить тему">
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
} 