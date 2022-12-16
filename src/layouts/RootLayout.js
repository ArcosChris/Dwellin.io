import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from '../components/Navbar.js'

const RootLayout = () => {
    return (
        <div className="rootLayout">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
