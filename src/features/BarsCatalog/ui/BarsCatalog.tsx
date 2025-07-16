import BarBriefCard from "@/entities/BarBriefCard/ui/BarBriefCard";
import { getBars, Bar } from "../lib/getBars";
import styles from "./BarsCatalog.module.css";

export interface BarsCatalogProps {
  neighborhoods?: string[];
}

export default async function BarsCatalog({ neighborhoods = [] }: BarsCatalogProps) {
  const bars = await getBars(neighborhoods);
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

export async function getAllNeighborhoods(): Promise<string[]> {
  const bars = await getBars();
  return Array.from(new Set(bars.map(b => b.neighborhood).filter((n): n is string => Boolean(n))));
}
