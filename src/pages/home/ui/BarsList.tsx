import { PrismaClient } from "@/shared/generated/prisma";
import styles from "./BarsList.module.css";

const prisma = new PrismaClient();

export default async function BarsList() {
  const bars = await prisma.barsData.findMany({
    select: { id: true, title: true, description: true }
  });

  return (
    <ul className={styles.list}>
      {bars.map((bar) => (
        <li key={bar.id}><div>
          {bar.title}
          </div>
          <div>{bar.description}</div>
          </li>
      ))}
    </ul>
  );
}
