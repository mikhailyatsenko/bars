export interface Bar {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  neighborhood?: string;
}

export async function getBars(neighborhood?: string): Promise<Bar[]> {
  const isServer = typeof window === "undefined";
  const baseUrl = isServer ? process.env.NEXT_PUBLIC_BASE_URL : "";
  const url = new URL(`${baseUrl}/api/bars`, baseUrl || 'http://localhost');
  if (neighborhood) url.searchParams.set('neighborhood', neighborhood);
  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch bars");
  return res.json();
} 