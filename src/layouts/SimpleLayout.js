import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from '../components/RootLayoutComponents/Navbar.js'

const SimpleLayout = (props) => {
    return (
        <div className="rootLayout">
            <Navbar />
            <main>
                {props.children ? props.children : <Outlet />}
            </main>
        </div>
    );
}

export default SimpleLayout;
