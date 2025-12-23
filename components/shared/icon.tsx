"use client";

import * as LucideIcons from "lucide-react";
import { ComponentProps } from "react";

export type IconName = keyof typeof LucideIcons;

type IconProps = ComponentProps<typeof LucideIcons.Activity> & {
  name: string;
};

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = (LucideIcons as Record<string, React.ComponentType<any>>)[name] ?? LucideIcons.Circle;
  return <LucideIcon strokeWidth={1.5} {...props} />;
}
