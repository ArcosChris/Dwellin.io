import { Outlet } from "react-router";
import Footer from "../components/CommonLayoutComponent/Footer";
import Sidebar from "../css/Sidebar";
import TopNav from "../components/LeftSideLayoutComponents/TopNav";
import '../css/LeftSideBar.css';
import { useState } from "react";

const LeftSideBarLayout = (props) => {

    return (
        <>
            <div class="d-flex" id="wrapper">
                <Sidebar />
                <div id="page-content-wrapper">
                    <TopNav />
                    <main className="container-fluid pt-2">
                        {props.children ? props.children : <Outlet />}
                    </main>
                </div>
            </div >
            <Footer />
        </>

    );
}

export default LeftSideBarLayout;