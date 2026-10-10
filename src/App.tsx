import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { AppLayout } from "./layout/AppLayout";

import { Dashboard } from "./pages/Dashboard";
import { Questoes } from "./pages/Questoes";
import { Study } from "./pages/Study";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/Questoes"
            element={<Questoes />}
          />

          <Route
            path="/Study"
            element={<Study />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}