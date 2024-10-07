"use client";

import React from "react";
import { useRouter, useParams } from 'next/navigation';
import { Select, SelectItem } from "@nextui-org/react";

export const LANGS = [
  { key: "en", label: "EN" },
  { key: "es", label: "ES" },
];

export const LanguageSwitcher = () => {
  const router = useRouter();
  const params = useParams();

  const initialLocale = (params?.locale as string) || "en";

  const [selectedLang, setSelectedLang] = React.useState<string>(initialLocale);

  const handleLangChange = (value: string) => {
    setSelectedLang(value);
    router.push(`/${value}`);
  };

  return (
    <Select
      size="sm"
      selectedKeys={new Set([selectedLang])}
      className="w-16"
      onSelectionChange={(keys) => {
        const selectedValue = Array.from(keys)[0] as string;
        handleLangChange(selectedValue);
      }}
    >
      {LANGS.map((lang) => (
        <SelectItem
          key={lang.key}
          value={lang.key}
        >
          {lang.label}
        </SelectItem>
      ))}
    </Select>
  );
};
