import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    //Once navbar is built <-- GO HERE!
    return (
        <div className="rootLayout">
            {/* NAVBAR HERE */}
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
