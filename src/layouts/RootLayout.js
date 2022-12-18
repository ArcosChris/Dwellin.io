import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.js";

import Navbar from '../components/Navbar.js'

const RootLayout = () => {
    return (
        <div className="rootLayout">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
