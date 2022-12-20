import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light text-center">My Account</div>
            <div className="sidebar-heading border-bottom bg-light text-center">
                <div className="col-12 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-2">
                        <img className="circle" width="150px" src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <span className="fw-bold">Jenny Johnson</span>
                        <span className="text-black-75">jenny@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="list-group list-group-flush">
                <Link to="landlorddash" className="list-group-item list-group-item-action list-group-item-light p-3">Dashboard</Link>
                <Link to="./profile" relative="path" className="list-group-item list-group-item-action list-group-item-light p-3">Profile</Link>
                <Link to="./mytenants" relative="path" className="list-group-item list-group-item-action list-group-item-light p-3">Tenant Information</Link>
                <Link to="./myproperties" relative="path" className="list-group-item list-group-item-action list-group-item-light p-3">My Properties</Link>
                <Link to="./newrequests" relative="path" className="list-group-item list-group-item-action list-group-item-light p-3">Application Summary</Link>
            </div>
        </div>

    );
}

export default Sidebar;