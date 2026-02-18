import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, MapPin, ChevronDown } from "lucide-react";
import { languages } from "@/i18n";

const flagCodeMap: Record<string, string> = {
  "pt-BR": "br", "pt-PT": "pt", en: "us", es: "es", fr: "fr",
  it: "it", ar: "sa", nl: "nl", zh: "cn", ko: "kr", ja: "jp", de: "de", ru: "ru",
};

const FlagImg = ({ code, className = "" }: { code: string; className?: string }) => (
  <img
    src={`https://flagcdn.com/24x18/${flagCodeMap[code] || "un"}.png`}
    srcSet={`https://flagcdn.com/48x36/${flagCodeMap[code] || "un"}.png 2x`}
    alt=""
    className={`inline-block rounded-sm ${className}`}
    width={24}
    height={18}
  />
);
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const detectLanguageByLocation = async (): Promise<string | null> => {
  try {
    const resp = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(5000) });
    const data = await resp.json();
    const countryCode = data.country_code?.toUpperCase();

    const countryToLang: Record<string, string> = {
      BR: "pt-BR", PT: "pt-PT", AO: "pt-PT", MZ: "pt-PT",
      US: "en", GB: "en", AU: "en", CA: "en", NZ: "en", IE: "en", IN: "en",
      ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es",
      FR: "fr", BE: "fr", CH: "fr",
      IT: "it",
      SA: "ar", AE: "ar", EG: "ar", MA: "ar", DZ: "ar", IQ: "ar", JO: "ar", KW: "ar", QA: "ar",
      NL: "nl",
      CN: "zh", TW: "zh", HK: "zh", SG: "zh",
      KR: "ko",
      JP: "ja",
      DE: "de", AT: "de",
      RU: "ru", BY: "ru", KZ: "ru",
    };

    return countryToLang[countryCode] || null;
  } catch {
    return null;
  }
};

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [detecting, setDetecting] = useState(false);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  const handleDetectLocation = async () => {
    setDetecting(true);
    const lang = await detectLanguageByLocation();
    if (lang) {
      i18n.changeLanguage(lang);
      setOpen(false);
    }
    setDetecting(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground">
          <Globe className="h-3.5 w-3.5" />
          <FlagImg code={currentLang.code} />
          <ChevronDown className="h-3 w-3" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <Globe className="h-5 w-5 text-primary" />
            {t("language.title")}
          </DialogTitle>
        </DialogHeader>

        <button
          onClick={handleDetectLocation}
          disabled={detecting}
          className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10 disabled:opacity-50"
        >
          <MapPin className="h-4 w-4" />
          {detecting ? "..." : t("language.detect_location")}
        </button>

        <div className="grid grid-cols-1 gap-1.5">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                i18n.language === lang.code
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/80 hover:bg-card/80"
              }`}
            >
              <FlagImg code={lang.code} />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageSelector;
