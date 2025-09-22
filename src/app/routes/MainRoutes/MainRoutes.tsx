import { Navigate, Route, Routes } from "react-router";
import NotFound from "../../components/NotFound";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";
import Home from "../../pages/Customer/Home/Home";
import PartyAndStatePage from "../../pages/Customer/PartyAndState/PartyAndState";
import IndependencePage from "../../pages/Customer/Independence/Independence";
import SocialismPage from "../../pages/Customer/Socialism/Socialism";
import UnityPage from "../../pages/Customer/Unity/Unity";
import CulturePage from "../../pages/Customer/Culture/Culture";
import ResistancePage from "../../pages/Customer/Resistance/Resistance";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dang-va-nha-nuoc" element={<PartyAndStatePage />} />
          <Route path="/doc-lap-dan-toc" element={<IndependencePage />} />
          <Route path="/chu-nghia-xa-hoi" element={<SocialismPage />} />
          <Route path="/dai-doan-ket" element={<UnityPage />} />
          <Route path="/van-hoa-con-nguoi" element={<CulturePage />} />
          <Route path="/khang-chien" element={<ResistancePage />} />
        </Route>
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="" element={<AdminLayout />}>
        <Route path="" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;