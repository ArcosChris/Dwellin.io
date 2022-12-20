import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../css/ProfileOffcanvas.css';

const ProfileOffcanvas = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        addressLine1: '',
        addressLine2: '',
        zipCode: '',
        state: '',
        email: '',
        country: '',
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="offCanvas-main">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='fw-bold'>Profile Settings</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="container rounded bg-white mt-2 mb-2">
                        <div className="row">
                            <div className="col-md-4 border-right">
                                <div className="d-flex flex-column align-items-center text-center p-3 py-2">
                                    <img className="circle mt-5" width="150px" src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                    <span className="fw-bold">Jenny Johnson</span>
                                    <span className="text-black-75">jenny@gmail.com</span>
                                </div>
                            </div>
                            <div className="col-md-8 border-right">
                                <form className="p-3 py-2">
                                    <div className="row mt-2">
                                        <div className="col-md-6"><label className="fw-bold">First Name</label>
                                            <input type="text" className="form-control" placeholder="First name" />
                                        </div>
                                        <div className="col-md-6"><label className="fw-bold">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Last Name" />

                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label className="fw-bold">Mobile Number</label>
                                            <input type="text" className="form-control" placeholder="Mobile Number" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="fw-bold">Email</label>
                                            <input type="text" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label className="fw-bold">Address Line 1</label>
                                            <input type="text" className="form-control" placeholder="Address line 1" />
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <label className="fw-bold">Address Line 2</label>
                                            <input type="text" className="form-control" placeholder="Address line 2" />
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <label className="fw-bold">ZIP/postal code</label>
                                            <input type="text" className="form-control" placeholder="Address line 2" />
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <label className="fw-bold">State</label>
                                            <input type="text" className="form-control" placeholder="Address line 2" />
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <label className="fw-bold">Country</label>
                                            <input type="text" className="form-control" placeholder="Country" />
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button className="btn btn-primary w-75" type="button">Save Profile</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body >
            </Offcanvas >
        </>
    );
}
export default ProfileOffcanvas;