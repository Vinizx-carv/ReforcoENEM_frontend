import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StudyPage } from "./pages/StudyPage";
import { SubjectPage } from "./pages/SubjectPage";

import { AppLayout } from "./layout/AppLayout";

import { Dashboard } from "./pages/Dashboard";
import { Questoes } from "./pages/Questoes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/Questoes" element={<Questoes />} />

          <Route path="/estudar" element={<StudyPage />} />
          <Route path="/estudar/:subjectId" element={<SubjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
