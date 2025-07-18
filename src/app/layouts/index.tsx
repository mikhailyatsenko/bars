import { ThemeProvider } from '@mui/material/styles';
import theme from '@/shared/theme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Suspense } from "react";
import type { Metadata } from "next";
import "@fontsource/source-sans-pro";

import { fallbackLng, languages } from "@/shared/configs/i18n/settings";
import CssBaseline from '@mui/material/CssBaseline';

export const metadata: Metadata = {
  title: "Berlin Bars",
  description: "",
};

export async function generateStaticParams() {
  return languages.filter((lng) => lng !== fallbackLng).map((lng) => ({ lng }));
}

export function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitColorSchemeScript attribute="data" />
      </head>
      <body className="relative antialiased">
        <ThemeProvider theme={theme} defaultMode="system">
        <CssBaseline />
          <AppRouterCacheProvider options={{ key: "css" }}>
            <Suspense
              fallback={
                <div style={{ padding: 32, textAlign: "center" }}>
                  Loading page...
                </div>
              }
            >
              {children}
            </Suspense>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
