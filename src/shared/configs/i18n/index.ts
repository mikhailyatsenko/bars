import i18next from './i18next'
import { headerName, fallbackLng } from './settings'
import { headers } from 'next/headers'

type GetTOptions = { keyPrefix?: string };

export async function getT(ns: string | string[], options?: GetTOptions) {
  const headerList = await headers()
  const lng = headerList.get(headerName)
  if (lng && i18next.resolvedLanguage !== lng) {
    await i18next.changeLanguage(lng)
  }
  if (ns && !i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns)
  }
  return {
    t: i18next.getFixedT(lng ?? i18next.resolvedLanguage ?? fallbackLng, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18next
  }
}