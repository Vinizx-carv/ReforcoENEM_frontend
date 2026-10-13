
import { useState } from "react";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/sidebar/Sidebar";

export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      <div className="min-w-0 md:ml-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-white px-4 md:px-6">
          <button
            type="button"
            aria-label="Abrir menu"
            aria-controls="app-sidebar"
            aria-expanded={isSidebarOpen}
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-md p-2 hover:bg-gray-100 md:hidden"
          >
            <Menu size={22} />
          </button>

          <h1 className="font-semibold text-gray-900">
            Painel administrativo
          </h1>
        </header>

        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
