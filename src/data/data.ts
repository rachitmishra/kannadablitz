import type { SupportedLanguage } from "./types";

export const supportedLanguages: {
  id: SupportedLanguage;
  name: string;
  short: string;
  data_file: string;
}[] = [
  { id: "english", name: "English", short: "En", data_file: "../data_en.ts" },
  { id: "hindi", name: "हिंदी", short: "हिं", data_file: "../data_hi.ts" },
];
