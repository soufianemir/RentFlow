export type NavItem = {
  href: string;
  label: string;
  icon: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Tableau de bord", icon: "layout-dashboard" },
  { href: "/reservations", label: "Réservations", icon: "calendar-clock" },
  { href: "/proprietes", label: "Propriétés", icon: "building-2" },
  { href: "/finances", label: "Finances", icon: "wallet" },
  { href: "/equipe", label: "Équipe", icon: "users" }
];
