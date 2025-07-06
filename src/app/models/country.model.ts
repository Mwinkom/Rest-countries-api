export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [langCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string; // 3-letter country code
  region: string;
  subregion: string;
  population: number;
  capital?: string[];
  flags: {
    svg: string;
    png: string;
  };
  borders?: string[];
  tld?: string[];
  currencies?: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [languageCode: string]: string;
  };
}
