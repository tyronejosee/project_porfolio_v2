// import Link from "next/link";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { LanguageSwitcher, Logo, ThemeSwitcher } from "@/components";

import owner from "@/data/owner.json";

export const NavbarMenu = () => {
  const t = useTranslations("NavbarMenu");

  return (
    <Navbar
      maxWidth="md"
      className="fixed z-50"
    >
      <NavbarBrand>
        <Link
          href="/"
          color="foreground"
          className="inline-flex items-center"
        >
          <Logo
            size="sm"
            color="primary"
          />
          <p className="hidden sm:block ml-4 font-bold text-inherit">{owner.short_name.toUpperCase()}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <NavbarItem>
          <Link
            href="/#footer-section"
          // scroll={false}
          >
            <Button
              color="primary"
              className="font-medium"
            >
              {t("contactBtn")}
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
