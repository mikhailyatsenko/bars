import { Suspense } from "react";

export default async function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div style={{ padding: 32, textAlign: "center" }}>Loading page...</div>
      }
    >
      {children}
    </Suspense>
  );
}
