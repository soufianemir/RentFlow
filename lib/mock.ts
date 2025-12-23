export type UserRole = "Owner" | "Tenant";

export const demoUsers = [
  { email: "owner@demo.com", password: "demo1234", role: "Owner" as UserRole },
  { email: "tenant@demo.com", password: "demo1234", role: "Tenant" as UserRole },
];

export const kpiData = [
  { label: "Total Owed", value: "$128,400", trend: "+12.4% MoM", accent: "sky", description: "Active invoices across portfolio" },
  { label: "Total Paid", value: "$94,250", trend: "+8.1% MoM", accent: "emerald", description: "Cleared payments this cycle" },
  { label: "Late Payments", value: "12", trend: "-3 vs last month", accent: "amber", description: "Open delinquencies being handled" },
];

export type Alert = {
  id: string;
  title: string;
  property: string;
  amount: string;
  status: "open" | "resolved" | "escalated";
  due: string;
};

export const alerts: Alert[] = [
  { id: "AL-9812", title: "Lease renewal pending", property: "Hudson Yards 12F", amount: "$3,850", status: "open", due: "Due in 3 days" },
  { id: "AL-9774", title: "Late rent - reminder sent", property: "Pier 7, Apt 204", amount: "$2,210", status: "escalated", due: "5 days overdue" },
  { id: "AL-9631", title: "ACH pending confirmation", property: "Willow Creek 3B", amount: "$1,960", status: "resolved", due: "Cleared" },
  { id: "AL-9522", title: "Inspection scheduled", property: "Lakeside Villa", amount: "$5,200", status: "open", due: "Next Tuesday" },
];

export type NavItem = {
  label: string;
  href: string;
  icon: string;
  comingSoon?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/app/dashboard", icon: "layout" },
  { label: "Leases", href: "/app/leases", icon: "file" },
  { label: "Periods", href: "/app/periods", icon: "calendar" },
  { label: "Processes", href: "/app/processes", icon: "workflow" },
  { label: "Settings", href: "/app/settings", icon: "settings" },
];

export type MockSession = {
  email: string;
  role: UserRole;
};

const SESSION_KEY = "rentflow_session";

export function setMockSession(session: MockSession) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  document.cookie = `${SESSION_KEY}=${encodeURIComponent(session.email)}; path=/;`;
}

export function clearMockSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
  document.cookie = `${SESSION_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

export function getMockSession(): MockSession | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as MockSession;
  } catch (error) {
    console.error("Failed to parse session", error);
    return null;
  }
}
