import BarsCatalog, { getAllNeighborhoods } from "@/features/BarsCatalog/ui/BarsCatalog";
import { LanguageSwitcher } from "@/shared/components/LanguageSwitcher";
import { Suspense } from "react";

interface HomePageProps {
  searchParams: { neighborhood?: string };
}

const HomePage = async ({ searchParams }: HomePageProps) => {
  const params = await searchParams;
  const neighborhoods = await getAllNeighborhoods();
  const selectedNeighborhoods = params.neighborhood
    ? params.neighborhood.split(',').filter(Boolean)
    : [];

  return (
    <main>
      <LanguageSwitcher/>
      <form id="neighborhood-form" method="get" style={{ marginBottom: 24, padding: 12, border: '1px solid #eee', borderRadius: 8, maxWidth: 400 }}>
        <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
          <legend style={{ fontWeight: 600, marginBottom: 8 }}>Районы</legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {neighborhoods.map(n => (
              <label key={n} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <input
                  type="checkbox"
                  value={n}
                  defaultChecked={selectedNeighborhoods.includes(n)}
                />
                {n}
              </label>
            ))}
          </div>
        </fieldset>
        <input type="hidden" name="neighborhood" id="neighborhood-hidden" value={selectedNeighborhoods.join(",")} />
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button type="submit">Показать</button>
          <a href="?" style={{ color: '#888', textDecoration: 'underline', fontSize: 13, alignSelf: 'center' }}>Сбросить</a>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('neighborhood-form').addEventListener('submit', function(e) {
                const checked = Array.from(this.querySelectorAll('input[type=checkbox]')).filter(cb => cb.checked).map(cb => cb.value);
                this.querySelector('#neighborhood-hidden').value = checked.join(',');
              });
            `
          }}
        />
      </form>
      <Suspense fallback={<div>Loading bars...</div>}>
        <BarsCatalog neighborhoods={selectedNeighborhoods} />
      </Suspense>
    </main>
  );
};

export default HomePage;
