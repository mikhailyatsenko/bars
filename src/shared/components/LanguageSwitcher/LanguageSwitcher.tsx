"use client";

import { useParams, usePathname, useRouter } from 'next/navigation';
import { languages, fallbackLng, cookieName } from '@/shared/configs/i18n/settings';
import { getPath } from '@/shared/lib/getPath';

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentLng = typeof params?.lng === 'string' ? params.lng : fallbackLng;

  const handleChange = (lng: string) => {
    if (lng === fallbackLng) {
      // Удаляем куку языка при переходе на default
      document.cookie = `${cookieName}=; Max-Age=0; path=/`;
    }
    router.push(getPath(lng, pathname || ''));
  };

  return (
    <div>
      {languages.map((lng) =>
        lng === currentLng ? (
          <span key={lng} style={{ fontWeight: 'bold', marginRight: 8 }}>{lng.toUpperCase()}</span>
        ) : (
          <button
            key={lng}
            onClick={() => handleChange(lng)}
            style={{ marginRight: 8 }}
            type="button"
          >
            {lng.toUpperCase()}
          </button>
        )
      )}
    </div>
  );
} 