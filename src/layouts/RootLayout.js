import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/CommonLayoutComponent/Footer.js";

import Navbar from '../components/RootLayoutComponents/Navbar.js'

const RootLayout = ({ isLoggedIn, handleSignOut }, props) => {

    return (
        <div className="rootLayout">
            <Navbar isLoggedIn={isLoggedIn} signOut={handleSignOut} />
            <main>
                {props.children ? props.children : <Outlet />}
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
