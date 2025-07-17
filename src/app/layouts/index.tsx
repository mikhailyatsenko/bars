import type { Metadata } from "next";
import "@fontsource/source-sans-pro";
import "@/shared/theme/index.css";
import { Suspense } from "react";
import { fallbackLng, languages } from "@/shared/configs/i18n/settings";
import theme from "@/shared/theme";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export const metadata: Metadata = {
  title: "Berlin Bars",
  description: "",
};

export async function generateStaticParams() {
  return languages.filter((lng) => lng !== fallbackLng).map((lng) => ({ lng }));
}

export async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative antialiased">
        <ThemeProvider theme={theme}>
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
