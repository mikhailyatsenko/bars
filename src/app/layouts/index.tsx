import type { Metadata } from "next";
import "@fontsource/source-sans-pro";
import "@/shared/theme/index.css";
import { Suspense } from "react";
import { fallbackLng, languages } from "@/shared/configs/i18n/settings";
import { ThemeProviderWithContext } from "@/shared/components/ThemeProviderWithContext";

export const metadata: Metadata = {
  title: "Berlin Bars",
  description: "",
};

export async function generateStaticParams() {
  return languages.filter((lng) => lng !== fallbackLng).map((lng) => ({ lng }));
}

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative antialiased">
        <ThemeProviderWithContext>
          <Suspense
            fallback={
              <div style={{ padding: 32, textAlign: "center" }}>
                Loading page...
              </div>
            }
          >
            {children}
          </Suspense>
        </ThemeProviderWithContext>
      </body>
    </html>
  );
}
