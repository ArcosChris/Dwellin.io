import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light text-center">My Account</div>
            <div className="sidebar-heading border-bottom bg-light text-center">IMG HERE w/USER INFO</div>

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