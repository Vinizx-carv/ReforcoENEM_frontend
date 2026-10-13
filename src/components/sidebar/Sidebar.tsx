import { X, LayoutDashboard } from "lucide-react";

import { sidebarItems } from "./sidebar.config";
import { SidebarItem } from "./SidebarItem";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Fundo escuro no mobile */}
      {isOpen && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <aside
        id="app-sidebar"
        aria-label="Navegação principal"
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col",
          "border-r border-gray-200 bg-white",
          "transition-transform duration-200",
          "md:z-40 md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Cabeçalho */}
        <div className="flex h-16 items-center justify-between border-b px-5">
          <div className="flex items-center gap-2">
            <LayoutDashboard size={24} className="text-blue-600" />

            <span className="font-semibold text-gray-900">Meu Sistema</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="rounded-md p-2 hover:bg-gray-100 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navegação */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.path} item={item} onNavigate={onClose} />
          ))}
        </nav>

        {/* Rodapé */}
        <div className="border-t p-4">
          <p className="text-xs text-gray-500">Meu Sistema · v1.0</p>
        </div>
      </aside>
    </>
  );
}
