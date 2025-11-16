import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { translateArray } from '../services/translationService';

interface UseAutoTranslateOptions<T> {
  data: T[];
  fieldsToTranslate: string[];
  sourceLang?: string;
  enabled?: boolean;
}

export function useAutoTranslate<T extends object>({
  data,
  fieldsToTranslate,
  sourceLang = 'es',
  enabled = true
}: UseAutoTranslateOptions<T>) {
  const { i18n } = useTranslation();
  const [translatedData, setTranslatedData] = useState<T[]>(data);
  const [isTranslating, setIsTranslating] = useState(false);
  const prevLangRef = useRef(i18n.language);
  const prevDataRef = useRef(data);

  useEffect(() => {
    const currentLang = i18n.language.startsWith('en') ? 'en' : 'es';

    // Check if translation is needed
    const langChanged = prevLangRef.current !== i18n.language;
    const dataChanged = prevDataRef.current !== data;

    if (!enabled || (!langChanged && !dataChanged)) {
      if (dataChanged) {
        setTranslatedData(data);
        prevDataRef.current = data;
      }
      return;
    }

    // If language is Spanish (source language), use original data
    if (currentLang === sourceLang) {
      setTranslatedData(data);
      prevLangRef.current = i18n.language;
      prevDataRef.current = data;
      return;
    }

    // Translate to target language
    const performTranslation = async () => {
      setIsTranslating(true);
      try {
        const translated = await translateArray(data, currentLang, fieldsToTranslate, sourceLang);
        setTranslatedData(translated);
      } catch (error) {
        console.error('Auto-translation failed:', error);
        setTranslatedData(data); // Fallback to original
      } finally {
        setIsTranslating(false);
        prevLangRef.current = i18n.language;
        prevDataRef.current = data;
      }
    };

    performTranslation();
  }, [i18n.language, data, fieldsToTranslate, sourceLang, enabled]);

  return { translatedData, isTranslating };
}
