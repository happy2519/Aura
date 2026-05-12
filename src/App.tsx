import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Splash from "@/pages/Splash";
import Onboarding from "@/pages/Onboarding";
import Dashboard from "@/pages/Dashboard";
import Chat from "@/pages/Chat";
import FocusMode from "@/pages/FocusMode";
import Notifications from "@/pages/Notifications";
import Insights from "@/pages/Insights";
import Privacy from "@/pages/Privacy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/focus" element={<FocusMode />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
