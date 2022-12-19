import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/CommonLayoutComponent/Footer.js";
import '../css/Root.css'

import Navbar from '../components/RootLayoutComponents/Navbar.js'

const RootLayout = (props) => {
    return (
        <div className="rootLayout">
            <Navbar />
            <main>
                {props.children ? props.children : <Outlet />}
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
