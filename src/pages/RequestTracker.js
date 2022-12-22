import React from "react";

const RequestTracker = () => {

    return (
        <div className="requesttracker">
            <h1 className="tracker text-center">Service Request Tracker</h1>

            <div class="row mt-3 mb-2" data-masonry='{"percentPosition": true}'>
                <div class="c1 col-12 col-md-6 mb-2">
                    <div class="card h-100">
                        <div className="card-title">
                            <h2 className="text-center mt-2"> Active Tickets</h2>
                            <p style={{ paddingLeft: "30px", paddingRight: "30px" }}>SR#001 <br />
                                Date: 12/27/22
                                <br />
                                Name: Jenny Johnson
                                <br />
                                Issue: Crack in ceiling due to a water leak.
                                <br />
                                Area Affected: Structural
                                <br />
                                Importance:
                                <h6 className="text-danger">High Priority</h6>
                            </p>
                        </div>
                        <div className="text-center">
                            <h5></h5>
                            <h5></h5>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default RequestTracker;