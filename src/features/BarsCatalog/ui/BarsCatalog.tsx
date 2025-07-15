import BarBriefCard from "@/entities/BarBriefCard/ui/BarBriefCard";
import { getBars, Bar } from "../lib/getBars";
import styles from "./BarsCatalog.module.css";

export default async function BarsCatalog() {
  const bars = await getBars();
  console.log("inisde catalogh");
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
