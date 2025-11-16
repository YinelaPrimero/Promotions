// Translation service using Google Translate API (free tier)
const GOOGLE_TRANSLATE_URL = 'https://translate.googleapis.com/translate_a/single';

interface TranslationCache {
  [key: string]: string;
}

// Cache translations to avoid repeated API calls
const translationCache: TranslationCache = {};

export const translateText = async (
  text: string,
  targetLang: string,
  sourceLang: string = 'auto'
): Promise<string> => {
  if (!text || text.trim() === '') return text;

  // If source and target are the same, return original
  if (sourceLang === targetLang) return text;

  // Check cache first
  const cacheKey = `${sourceLang}_${targetLang}_${text}`;
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }

  try {
    const params = new URLSearchParams({
      client: 'gtx',
      sl: sourceLang,
      tl: targetLang,
      dt: 't',
      q: text
    });

    const response = await fetch(`${GOOGLE_TRANSLATE_URL}?${params}`);

    if (!response.ok) {
      throw new Error('Translation failed');
    }

    const data = await response.json();

    // Google Translate API returns nested arrays
    // Extract the translated text from the response
    let translatedText = '';
    if (data && data[0]) {
      for (const item of data[0]) {
        if (item[0]) {
          translatedText += item[0];
        }
      }
    }

    // Cache the result
    if (translatedText) {
      translationCache[cacheKey] = translatedText;
    }

    return translatedText || text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text on error
  }
};

export const translateObject = async <T extends object>(
  obj: T,
  targetLang: string,
  fieldsToTranslate: string[],
  sourceLang: string = 'es'
): Promise<T> => {
  const translated = { ...obj } as Record<string, unknown>;

  for (const field of fieldsToTranslate) {
    if (field in translated && typeof translated[field] === 'string') {
      translated[field] = await translateText(
        translated[field] as string,
        targetLang,
        sourceLang
      );
    }
  }

  return translated as T;
};

export const translateArray = async <T extends object>(
  items: T[],
  targetLang: string,
  fieldsToTranslate: string[],
  sourceLang: string = 'es'
): Promise<T[]> => {
  const translatedItems = await Promise.all(
    items.map((item) => translateObject(item, targetLang, fieldsToTranslate, sourceLang))
  );
  return translatedItems;
};

// Batch translate multiple texts at once (more efficient)
export const translateBatch = async (
  texts: string[],
  targetLang: string,
  sourceLang: string = 'es'
): Promise<string[]> => {
  const results: string[] = [];

  for (const text of texts) {
    const translated = await translateText(text, targetLang, sourceLang);
    results.push(translated);
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  return results;
};
