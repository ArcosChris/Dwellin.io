import React from "react";
import "../css/TenantDashboard.css";
import { Link } from "react-router-dom";

const TenantDashboard = () => {


    return (
        <div className="dashboard">
            <h1 className="welcome text-center">Welcome back Tenant!</h1>

<<<<<<< Updated upstream
            <div className="row mt-5 mb-2" data-masonry='{"percentPosition": true }'>
                <div className="col-12 col-md-6 mb-2">
                    <div className="card h-100">
=======
            <div class="row mt-3 mb-2" data-masonry='{"percentPosition": true}'>
                <div class="c1 col-12 col-md-6 mb-2">
                    <div class="card h-100">
>>>>>>> Stashed changes
                        <div className="card-title">
                            <h1 className="text-center mt-2">Service Request</h1>
                        </div>
                        <div className="text-center">
                            <Link className="text-dark" to="/tracker"><h5>View Active</h5></Link>
                            <Link className="text-dark" to="/servicedash"><h5>Submit New Ticket</h5></Link>
                        </div>
                    </div>
                </div>

<<<<<<< Updated upstream

                <div className="col-12 col-md-6 mb-2">
                    <div className="card h-100">
=======
                <div class="c1 col-12 col-md-6 mb-2">
                    <div class="card h-100">
>>>>>>> Stashed changes
                        <div className="card-title">
                            <h1 className="text-center mt-2">Rent Info</h1>
                        </div>
                        <div className="text-center">
                            <h5 className="text-success">Rent Status: Payment Received</h5>
                        </div>
                    </div>
                </div>

<<<<<<< Updated upstream
                <div className="col-12 col-md-6">
                    <div className="card h-100">
=======
                <div class="c1 col-12 col-md-6 mb-2">
                    <div class="card h-100">
>>>>>>> Stashed changes
                        <div className="card-title">
                            <h1 className="text-center mt-2">Lease Information</h1>
                        </div>
                        <div className="text-center">
                            <h5>Lease Term: 1 year</h5>
                            <h5>Lease Start: 1/1/2022</h5>
                            <h5>Lease End: 1/1/2023</h5>
                        </div>
                    </div>
                </div>

<<<<<<< Updated upstream

                <div className="col-12 col-md-6">
                    <div className="card h-100">
=======
                <div class="c1 col-12 col-md-6 mb-2">
                    <div class="card h-100">
>>>>>>> Stashed changes
                        <div className="card-title">
                            <h1 className="text-center mt-2">Rent Payment</h1>
                        </div>
                        <div className="text-center">
                            <h5>Rent Due: 1/1/2023</h5>
                            <h5>Amount Due: $1600.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TenantDashboard;