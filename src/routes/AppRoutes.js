import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/homePage";
import UsersPage from "../pages/userPage";

function AppRoutes({ usersPageProps }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage {...usersPageProps} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
