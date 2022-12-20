import React from "react";
import CardCarousel from "../components/CardCarousel";

const LandlordDashboard = () => {
    // DUMMY DATA
    const rentalImages = [
        { id: 1, img: "/rentals/rental1.avif" },
        { id: 2, img: "/rentals/rental2.avif" },
        { id: 3, img: "/rentals/rental3.avif" },
        { id: 4, img: "/rentals/rental4.avif" },
        { id: 5, img: "/rentals/rental5.avif" },
        { id: 6, img: "/rentals/rental6.avif" },
    ]



    return (
        <div className="container">
            <h1 className="text-center">Welcome back Christopher!</h1>

            <div class="row mt-5 mb-2" data-masonry='{"percentPosition": true }'>

                <div class="col-12 col-md-6 mb-2">

                    <div class="card">
                        <div class="card-body">
                            <h3 className="text-center">List New Property</h3>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div class="card-body">
                            <h3 className="text-center">Tenant Details</h3>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div class="card-body">
                            <h3 className="text-center">Tenant Details</h3>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="card h-100">
                        <div className="card-title">
                            <h1 className="text-center mt-2">Rental Information</h1>
                        </div>
                        <div className="text-center">
                            <h5>A BUNCH OF RENTAL STUFF</h5>
                            <h5>A BUNCH OF RENTAL STUFF</h5>
                            <h5>A BUNCH OF RENTAL STUFF</h5>
                            <h5>A BUNCH OF RENTAL STUFF</h5>
                            <h5>A BUNCH OF RENTAL STUFF</h5>
                        </div>

                    </div>

                </div>
            </div>

            <div className="row">
                <div class="col-12">
                    <div class="card h-100 p-3">
                        <div className="row">

                            <div className="col-12 col-md-6 col-xl-3 my-2">

                                <div class="card">
                                    <div class="card-body">
                                        <h3 className="text-center">Current Applications</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-xl-3 my-2">

                                <div class="card">
                                    <div class="card-body">
                                        <h3 className="text-center">Active Listings</h3>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-md-6 col-xl-3 my-2">

                                <div class="card">
                                    <div class="card-body">
                                        <h3 className="text-center">Current Lease</h3>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-md-6 col-xl-3 my-2">

                                <div class="card">
                                    <div class="card-body">
                                        <h3 className="text-center">Tenant Details</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container-fluid my-4 py-4">
                <CardCarousel rentalImages={rentalImages} />
            </div>
        </div >
    );
}

export default LandlordDashboard;