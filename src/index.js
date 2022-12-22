import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./css/index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

<<<<<<< Updated upstream
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
=======
// component
import App from "./App";
import LeftSideBarLayout from "./layouts/LeftSideBar";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/LandingPage";
import LandlordDashBoard from "./pages/LandlordDashboard";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LandLord from "./components/LandLordModal";
import ManintenanceModal from "./components/MaintenanceModal";

import UserProfile from "./pages/UserProfile";
import TenantDashboard from "./pages/TenantDashboard";

import Footer from "./components/CommonLayoutComponent/Footer";
import ServiceRequest from "./pages/ServiceRequest";
import RequestTracker from "./pages/RequestTracker";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

<<<<<<< Updated upstream
=======
          <Route element={<RootLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="contactteam" element={<ContactPage />} />
          </Route>

          {/* Nav, SideNav, Footer */}

          <Route element={<LeftSideBarLayout />}>
            <Route path="landlorddash" element={<LandlordDashBoard />} />
            <Route path="landlorddash/profile" element={<UserProfile />} />
            <Route path="tenantdash" element={<TenantDashboard />} />
            <Route path="servicedash" element={<ServiceRequest />} />
            <Route path="landlordmod" element={<LandLord />} />
            <Route path="maintenance" element={<ManintenanceModal />} />
            <Route path="tracker" element={<RequestTracker />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
>>>>>>> Stashed changes
);
