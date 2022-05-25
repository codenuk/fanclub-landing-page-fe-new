import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

function useTranslation(content: any) {
  const { locale, defaultLocale } = useRouter();
  
  const localeKey = useMemo(
    () => locale || defaultLocale || "en",
    [defaultLocale, locale]
  );

  const translate = useCallback(
    (key: string) => {
      if (!localeKey) return key;
      return content[localeKey]?.[key] || key;
    },
    [content, localeKey]
  );
  return {
    translate,
  };
}

export default useTranslation;
