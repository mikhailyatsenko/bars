"use client";
import { useColorScheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export function ThemeSwitcher() {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <IconButton onClick={toggleTheme} color="inherit" aria-label="Переключить тему">
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
} 