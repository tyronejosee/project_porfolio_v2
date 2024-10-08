export const OWNER = "Tyrone José"

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API base URL is not defined in .env");
}

export const MENUBAR_ITEMS = [
  { id: 1, href: "#experience", label: "Experience" },
  { id: 2, href: "#projects", label: "Projects" },
  { id: 3, href: "#skills", label: "Skills" },
];
