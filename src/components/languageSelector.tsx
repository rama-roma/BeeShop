import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contextApi/theme/ThemeContext";

const languages = [
  {
    code: "ru",
    label: "RUS",
    flag: "https://flagcdn.com/ru.svg",
  },
  {
    code: "tj",
    label: "TJK",
    flag: "https://flagcdn.com/tj.svg",
  },
  {
    code: "en",
    label: "ENG",
    flag: "https://flagcdn.com/gb.svg", 
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || i18n.language || "ru";
    i18n.changeLanguage(savedLang);
    const lang = languages.find((l) => l.code === savedLang) || languages[0];
    setCurrentLang(lang);
  }, [i18n]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    const lang = languages.find((l) => l.code === code);
    if (lang) setCurrentLang(lang);
    setOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
          theme === "dark" ? "bg-[#2b2b2b] text-[#aaa]" : "bg-white text-black"
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <img
          src={currentLang.flag}
          width="23"
          alt={currentLang.label}
          className="border rounded-[5px]"
        />
        <span>{currentLang.label}</span>
      </div>

      {open && (
        <div
          className={`absolute right-0 mt-1 w-24 rounded shadow-lg z-50 ${
            theme === "dark"
              ? "bg-[#2b2b2b] text-[#aaa]"
              : "bg-white text-black"
          }`}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex items-center gap-2 px-3 py-2 hover:bg-yellow-400 hover:text-black cursor-pointer"
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} width="20"  alt={lang.label} />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
