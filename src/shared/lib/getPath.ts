import { fallbackLng, languages } from "../configs/i18n/settings";

export    const getPath = (lng: string, currentPath: string) => {
        let path = currentPath || '';
        const regex = new RegExp(`^/(${languages.join('|')})`);
        path = path.replace(regex, '');
        return lng === fallbackLng ? path || '/' : `/${lng}${path}`;
      };