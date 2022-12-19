import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import App from './App';
import LeftSideBarLayout from './layouts/LeftSideBar';
import RootLayout from './layouts/RootLayout';
import LandingPage from './pages/LandingPage';
import LandlordDashBoard from './pages/LandlordDashboard';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>

          {/* Top Nav and Footer */}
          <Route element={<RootLayout />}>
            <Route index element={<LandingPage />} />
          </Route>

          {/* Nav, SideNav, Footer */}
          <Route element={<LeftSideBarLayout />}>
            <Route path='landlorddash' element={<LandlordDashBoard />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
