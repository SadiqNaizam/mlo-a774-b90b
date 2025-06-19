import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner"; // Renamed to avoid conflict
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFound from "./pages/NotFound";

// New Dashboard components
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import AnalyticsPage from "./pages/AnalyticsPage"; // Placeholder
import SettingsPage from "./pages/SettingsPage";   // Placeholder

const queryClient = new QueryClient();

// Auth pages layout (optional, if you want to group them under a common non-dashboard layout element)
// For now, they are standalone as they use MinimalHeader/Footer directly.

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <SonnerToaster /> {/* Use the renamed import */}
      <BrowserRouter>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
          <Route path="/registration" element={<RegistrationPage />} />

          {/* Dashboard Routes (Protected conceptually) */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
            <Route path="/dashboard/settings" element={<SettingsPage />} />
            {/* Add other dashboard-related routes here */}
          </Route>
          
          {/* Catch-all Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;