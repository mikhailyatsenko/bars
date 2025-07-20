import BarsCatalog from "@/features/BarsCatalog/ui/BarsCatalog";
import { FilterNeighborhoods } from "@/features/FilterNeighborhoods";
// import FilterNeighborhoods from "@/features/BarsCatalog/ui/FilterNeighborhoods";
import { LanguageSwitcher } from "@/shared/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/shared/components/ThemeSwitcher";
import { getAllNeighborhoods } from "../api/getAllNeighborhoods";

interface HomePageProps {
  searchParams: Promise<{ neighborhoods?: string }>;
}

export const HomePage = async ({ searchParams }: HomePageProps) => {
  const params = await searchParams;
  const selectedNeighborhoods = params.neighborhoods
    ? params.neighborhoods.split(",").filter(Boolean)
    : [];

  const neighborhoods = await getAllNeighborhoods();

  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <FilterNeighborhoods
        allNeighborhoods={neighborhoods}
        searchParams={params}
      />

      <BarsCatalog neighborhoods={selectedNeighborhoods} />
    </main>
  );
};

