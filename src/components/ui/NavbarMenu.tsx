import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { MENUBAR_ITEMS } from "@/config/constants";
import { LanguageSwitcher, Logo, ThemeSwitcher } from "@/components";

export const NavbarMenu = () => {
  return (
    <Navbar
      isBordered
      maxWidth="lg"
      shouldHideOnScroll
    >
      <NavbarBrand>
        <Logo size="sm" color="dark" />
        <p className="font-bold text-inherit">ACME</p>
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
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Download CV</Link>
        </NavbarItem> */}
        <LanguageSwitcher />
        <ThemeSwitcher />
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact me
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
