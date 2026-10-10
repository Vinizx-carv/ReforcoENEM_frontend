import { NavLink } from "react-router-dom";
import type { SidebarItemData } from "./sidebar.config";

interface SidebarItemProps {
  item: SidebarItemData;
  onNavigate?: () => void;
}

export function SidebarItem({
  item,
  onNavigate,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-lg px-3 py-2.5",
          "text-sm font-medium transition-colors",
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900",
        ].join(" ")
      }
    >
      <Icon size={20} aria-hidden="true" />

      <span>{item.label}</span>
    </NavLink>
  );
}