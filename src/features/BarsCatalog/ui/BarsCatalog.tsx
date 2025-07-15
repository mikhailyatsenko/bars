import BarBriefCard from "@/entities/BarBriefCard/ui/BarBriefCard";
import { getBars, Bar } from "../lib/getBars";
import styles from "./BarsCatalog.module.css";

interface BarsCatalogProps {
  neighborhood?: string;
}

export default async function BarsCatalog({ neighborhood }: BarsCatalogProps) {
  const bars = await getBars(neighborhood);
  return (
    <ul className={styles.BarsCatalog}>
      {bars.map((bar: Bar) => (
        <li key={bar.id}>
          <BarBriefCard
            title={bar.title}
            description={bar.description}
            imageUrl={bar.imageUrl}
          />
        </li>
      ))}
    </ul>
  );
}

// Helper to get all neighborhoods for filter options
export async function getAllNeighborhoods(): Promise<string[]> {
  const bars = await getBars();
  return Array.from(new Set(bars.map(b => b.neighborhood).filter((n): n is string => Boolean(n))));
}
