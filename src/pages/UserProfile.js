import React from "react";
import '../css/UserProfile.css';

const UserProfile = () => {
    return (
        <>
            <div className="container-fluid mx-auto userHeader">
                <div className="row pt-2 pb-2">

                    <span><h3 className="text-white">My Profile</h3></span>
                    <div className="col-12">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-2">
                            <img className="circle" width="300px" src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                            <span className="fw-bold">Jenny Johnson</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">


            </div>
        </>
    );
}

export default UserProfile;