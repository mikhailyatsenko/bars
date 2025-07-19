import { API_ROUTES } from "@/shared/constants/apiRoutes";

export async function getAllNeighborhoods(): Promise<string[]> {
  const isServer = typeof window === "undefined";
  const baseUrl = isServer
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "";
  const url = isServer
    ? `${baseUrl}${API_ROUTES.NEIGHBORHOODS}`
    : "/api/neighborhoods";

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch bars");
  return res.json();
} 