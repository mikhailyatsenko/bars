'use client'

import i18next from './i18next'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function useT(ns: string | string[], options?: object) {
  const lng = useParams()?.lng;
  if (typeof lng !== 'string') throw new Error('useT is only available inside /app/[lng]');

  const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage);

  useEffect(() => {
    if (typeof window === 'undefined' && i18next.resolvedLanguage !== lng) {
      i18next.changeLanguage(lng);
    }
  }, [lng]);

  useEffect(() => {
    if (activeLng === i18next.resolvedLanguage) return;
    setActiveLng(i18next.resolvedLanguage);
  }, [activeLng]);

  useEffect(() => {
    if (!lng || i18next.resolvedLanguage === lng) return;
    i18next.changeLanguage(lng);
  }, [lng]);

  return useTranslation(ns, options);
}