import { API_ROUTES } from "@/shared/constants/apiRoutes";

export interface Bar {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  neighborhood?: string;
}

export async function getBars(neighborhoods: string[] = []): Promise<Bar[]> {
  const isServer = typeof window === "undefined";
  const baseUrl = isServer ? process.env.NEXT_PUBLIC_BASE_URL : "";
  const params = new URLSearchParams();
  neighborhoods.forEach(n => params.append("neighborhoods", n));
  const url = isServer
    ? `${baseUrl}${API_ROUTES.BARS_CATALOG}?${params.toString()}`
    : `${API_ROUTES.BARS_CATALOG}?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch bars");
  return res.json();
} 