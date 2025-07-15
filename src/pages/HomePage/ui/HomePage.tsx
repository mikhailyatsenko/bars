import BarsCatalog, { getAllNeighborhoods } from "@/features/BarsCatalog/ui/BarsCatalog";
import { Suspense } from "react";

interface HomePageProps {
  searchParams: { neighborhood?: string };
}

export const HomePage = async ({ searchParams }: HomePageProps) => {
  const neighborhoods = await getAllNeighborhoods();
  const selectedNeighborhood = searchParams.neighborhood || "";

  return (
    <main>
      <form method="get">
        <label>
          Neighborhood:
          <select name="neighborhood" defaultValue={selectedNeighborhood}>
            <option value="">All neighborhoods</option>
            {neighborhoods.map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <button type="submit">Filter</button>
      </form>
      <Suspense fallback={<div>Loading bars...</div>}>
        <BarsCatalog neighborhood={selectedNeighborhood} />
      </Suspense>
    </main>
  );
}
