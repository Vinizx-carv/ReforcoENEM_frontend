import {
  LayoutDashboard,
  Settings,
  BookOpen
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface SidebarItemData {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const sidebarItems: SidebarItemData[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Questões",
    path: "/Questoes",
    icon: BookOpen,
  },
  {
    label: "Estudo",
    path: "/Study",
    icon: BookOpen,
  },
  {
    label: "Configurações",
    path: "/",
    icon: Settings,
  },
];