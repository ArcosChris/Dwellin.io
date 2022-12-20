import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import App from "./App";
import LeftSideBarLayout from "./layouts/LeftSideBar";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/LandingPage";
import LandlordDashBoard from "./pages/LandlordDashboard";
import AboutPage from "./pages/AboutPage";
<<<<<<< Updated upstream
import ContactPage from "./pages/ContactPage";

import UserProfile from "./pages/UserProfile";
=======
import TenantDashboard from "./pages/TenantDashboard";

import Footer from "./components/CommonLayoutComponent/Footer";
import ServiceRequest from "./pages/ServiceRequest";

>>>>>>> Stashed changes

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Top Nav and Footer */}
          <Route element={<RootLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="contactteam" element={<ContactPage />} />
          </Route>

          {/* Nav, SideNav, Footer */}
          <Route element={<LeftSideBarLayout />}>
            <Route path="landlorddash" element={<LandlordDashBoard />} />
<<<<<<< Updated upstream
            <Route path="landlorddash/profile" element={<UserProfile />} />
=======
            <Route path="tenantdash" element={<TenantDashboard />} />
            <Route path="servicedash" element={<ServiceRequest />} />

>>>>>>> Stashed changes
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
