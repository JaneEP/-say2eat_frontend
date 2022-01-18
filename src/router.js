import { Routes, Route } from "react-router";
import LoginContainer from "./apps/auth/containers/LoginContainer";
import DashboardContainer from "./apps/dashboard/containers/DashboardContainer"

export const DefaultRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginContainer />} />
      <Route path="/auth/login" element={<DashboardContainer />} />
    </Routes>
  );
};
