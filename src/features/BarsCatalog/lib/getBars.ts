export interface Bar {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export async function getBars(): Promise<Bar[]> {
  const isServer = typeof window === "undefined";
  const baseUrl = isServer ? process.env.NEXT_PUBLIC_BASE_URL : "";
  const res = await fetch(`${baseUrl}/api/bars`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch bars");
  return res.json();
} 