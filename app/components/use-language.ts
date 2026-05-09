"use client";

import { useSyncExternalStore } from "react";
import type { Language } from "./site-data";

const storageKey = "lumiere-language";
const eventName = "lumiere-language-change";

function isLanguage(value: string | null): value is Language {
  return value === "pl" || value === "en";
}

function readBrowserLanguage(defaultLanguage: Language): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("lang");
  const fromStorage = window.localStorage.getItem(storageKey);

  if (isLanguage(fromUrl)) {
    return fromUrl;
  }

  if (isLanguage(fromStorage)) {
    return fromStorage;
  }

  return defaultLanguage;
}

function subscribe(callback: () => void) {
  window.addEventListener(eventName, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(eventName, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useLanguage(defaultLanguage: Language = "pl") {
  const language = useSyncExternalStore(
    subscribe,
    () => readBrowserLanguage(defaultLanguage),
    () => defaultLanguage,
  );

  function setLanguage(nextLanguage: Language) {
    window.localStorage.setItem(storageKey, nextLanguage);
    window.dispatchEvent(new Event(eventName));
  }

  function withLanguage(path: string) {
    if (path.startsWith("#")) {
      return path;
    }

    const separator = path.includes("?") ? "&" : "?";
    return `${path}${separator}lang=${language}`;
  }

  return { language, setLanguage, withLanguage };
}
