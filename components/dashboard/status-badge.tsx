import { Badge } from "@/components/ui/badge";

export function StatusBadge({ status }: { status: "open" | "resolved" | "escalated" }) {
  if (status === "resolved") {
    return <Badge variant="success">Resolved</Badge>;
  }
  if (status === "escalated") {
    return <Badge variant="danger">Escalated</Badge>;
  }
  return <Badge variant="warning">Open</Badge>;
}
