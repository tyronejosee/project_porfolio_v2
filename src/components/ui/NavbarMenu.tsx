import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { MENUBAR_ITEMS } from "@/config/constants";
import { LanguageSwitcher, Logo, ThemeSwitcher } from "@/components";

import owner from "@/data/owner.json";

export const NavbarMenu = () => {
  const t = useTranslations("NavbarMenu");

  return (
    <Navbar
      isBordered
      maxWidth="lg"
      shouldHideOnScroll
      className="fixed z-50"
    >
      <NavbarBrand>
        <Link color="foreground" href="/">
          <Logo
            size="sm"
            color="dark"
          />
          <p className="ml-4 font-bold text-inherit">{owner.name}</p>
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
