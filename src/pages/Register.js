import React from 'react';
import '../css/LoginPage.css';
import Logo from '../assets/NavbarLogo.png'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="container-fluid my-5 gradient-form">

            <div className='row justify-content-center'>


                <div className="col-12 col-md-6 mb-5">
                    <div className="d-flex flex-column  justify-content-center custom-bg h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4">We are more than just a company</h4>
                            <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-5">
                    <div className="d-flex flex-column">
                        <div className="text-center">
                            <img src={Logo}
                                style={{ width: '50%' }} alt="logo" />
                        </div>

                        <div className="container row mx-auto">
                            <p>Register for an account</p>
                            <input class="form-control form-control-md mb-1 col-12" type="text" placeholder="Email" />
                            <input class="form-control form-control-md mb-1" type="text" placeholder="First Name" />
                            <input class="form-control form-control-md mb-1" type="text" placeholder=".form-control-sm" />
                            <input class="form-control form-control-md mb-1" type="text" placeholder=".form-control-sm" />
                            <input class="form-control form-control-md mb-1" type="text" placeholder=".form-control-sm" />
                            <input class="form-control form-control-md mb-1" type="text" placeholder=".form-control-sm" />

                        </div>

                        <div className="text-center pt-1 mb-0 pb-1">
                            <button className="btn btn-outline mb-1 w-75 custom-bg">Register</button>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-0">
                            <p className="mb-0">Already have an account? </p>
                            <Link to="/login" exact className='mx-2 text-muted block'>Login</Link>
                        </div>

                    </div>

                </div>



            </div>
        </div >
    );
}

export default Register;
