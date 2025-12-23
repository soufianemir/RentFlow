export type NavItem = {
  href: string;
  label: string;
  icon: string;
};

export const navItems: NavItem[] = [
  { href: "/tableau-de-bord", label: "Tableau de bord", icon: "layout-dashboard" },
  { href: "/baux", label: "Baux", icon: "file-digit" },
  { href: "/factures", label: "Factures", icon: "receipt-euro" },
  { href: "/quittances", label: "Quittances", icon: "receipt" },
  { href: "/documents", label: "Documents", icon: "folder" },
  { href: "/parametres", label: "Paramètres", icon: "settings" },
  { href: "/aide", label: "Aide", icon: "life-buoy" }
];
