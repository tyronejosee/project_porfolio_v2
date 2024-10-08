import Link from "next/link";
import { useTranslations } from "next-intl";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { MENUBAR_ITEMS } from "@/config/constants";
import { LanguageSwitcher, Logo, ThemeSwitcher } from "@/components";

import owner from "@/data/owner.json";

export const NavbarMenu = () => {
  const t = useTranslations("NavbarMenu");

  return (
    <Navbar
      isBordered
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
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {MENUBAR_ITEMS.map((item) => (
          <NavbarItem key={item.id}>
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/contact-me"
            className="font-medium"
          >
            {t("contactBtn")}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
