import { React, useEffect, useState, useRef } from 'react';

// component
import LeftSideBarLayout from "./layouts/LeftSideBar";
import SimpleLayout from "./layouts/SimpleLayout"
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/LandingPage";
import LandlordDashBoard from "./pages/LandlordDashboard";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/UserManagement/Register";
import ConfirmRegister from './pages/UserManagement/ConfirmRegister';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import UserProfile from "./pages/UserProfile";
import TenantDashboard from "./pages/TenantDashboard";
import ServiceRequest from "./pages/ServiceRequest";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandLord from './components/LandLordModal';
import ManintenanceModal from './components/MaintenanceModal';
import RequestTracker from './pages/RequestTracker'

// amplify 
import { Auth, Hub } from 'aws-amplify';

const initialFormState = {
  given_name: '', family_name: '', username: '', password: '', authCode: '', formType: 'signUp'
};

function App() {
  let navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, updateUser] = useState(null);
  const [userProcess, setUserProcess] = useState(initialFormState);

  async function assessLoggedInState() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setLoggedIn(true);
      updateUser(user);
    }
    catch (err) {
      updateUser(null);
    }
  }

  useEffect(() => {
    assessLoggedInState();
  }, []);

  async function signUp(e, newUserData) {
    e.preventDefault();
    setUserProcess(newUserData);

    const { given_name, family_name, username, password } = newUserData;

    try {
      await Auth.signUp({ username, password, attributes: { given_name, family_name } });
      navigate("/register/confirm");
    }
    catch (err) {
      console.log(err);
    }
  }

  async function confirmSignUp(e, authCode) {
    e.preventDefault();
    const { username } = userProcess;

    try {
      await Auth.confirmSignUp(username, authCode);
      navigate("login")
    }
    catch (err) {
      console.log(err)
    }
  }

  async function signIn(e, login) {
    e.preventDefault();

    const { username, password } = login;

    try {
      await Auth.signIn(username, password);
      setLoggedIn(true);
      navigate('/');
    }
    catch (err) {
      console.log(err)
    }
  }

  async function signOut() {
    try {
      await Auth.signOut();
      setLoggedIn(false);
      navigate('/');
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <Routes>
      <Route element={<RootLayout isLoggedIn={loggedIn} handleSignOut={signOut} />}>
        <Route index element={<LandingPage />} />
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

      {/* Nav Only */}
      <Route element={<SimpleLayout isLoggedIn={loggedIn} handleSignOut={signOut} />}>
        <Route path="login" element={<LoginPage userLogin={signIn} />} />
        <Route path="register" element={<Register userSignUp={signUp} />} />
        <Route path="register/confirm" element={<ConfirmRegister confirmRegistration={confirmSignUp} />} />
      </Route>
    </Routes>
  )
}

export default App;