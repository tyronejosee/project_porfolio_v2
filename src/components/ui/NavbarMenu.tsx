import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { ThemeSwitcher } from "@/components/ui";
import { Logo } from "@/components/icons";

import owner from "@/data/owner.json";
import messages from "@/data/messages.json";

export default function NavbarMenu() {
  return (
    <Navbar maxWidth="md" className="fixed z-50">
      <NavbarBrand>
        <Link href="/" color="foreground" className="inline-flex items-center">
          <Logo size="sm" color="primary" />
          <p className="hidden sm:block ml-4 font-bold text-inherit">
            {owner.short_name.toUpperCase()}
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <ThemeSwitcher />
        <NavbarItem>
          <Link
            href="/#footer-section"
            // scroll={false}
          >
            <Button color="primary" className="font-medium">
              {messages.contactBtn}
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
