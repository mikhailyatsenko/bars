import BarBriefCard from "@/entities/BarBriefCard/ui/BarBriefCard";
import { getBars, Bar } from "../api/getBars";
import styles from "./BarsCatalog.module.css";

export interface BarsCatalogProps {
  neighborhoods?: string[];
}

export default async function BarsCatalog({ neighborhoods }: BarsCatalogProps) {
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


