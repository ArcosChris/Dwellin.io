import { React, useState } from 'react';
// import '../css/LoginPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/NavbarLogo.png'

const initialFormState = {
    given_name: '', family_name: '', username: '', password: '', authCode: '', formType: 'signUp'
};

function Register({ userSignUp }) {
    const [formState, updateFormState] = useState(initialFormState);

    const onChange = (e) => {
        e.persist();
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
    }

    return (
        <section className="mt-2" style={{ backgroundColor: "#eee" }} >
            <div className="container mt-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">

                                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 justify-content-center">
                                        <img src={Logo}
                                            className="img-fluid" alt="dwellinn logo" />
                                    </div>

                                    <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4" onSubmit={e => userSignUp(e, formState)}>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-user fa-lg me-3 fa-fw mt-4"></i>
                                                <div className="form flex-fill mb-0">
                                                    <label className="form-label">Your Name</label>
                                                    <input name="givenName" onChange={onChange} type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-user fa-lg me-3 fa-fw mt-4"></i>
                                                <div className="flex-fill mb-0">
                                                    <label className="form-label">Your Last Name</label>
                                                    <input name="familyName" onChange={onChange} type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw mt-4"></i>
                                                <div className="flex-fill mb-0">
                                                    <label className="form-label">Your Email</label>
                                                    <input name="username" onChange={onChange} type="email" className="form-control" aria-describedby="emailHelp" />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw mt-4"></i>
                                                <div className="flex-fill mb-0">
                                                    <label className="form-label">Password</label>
                                                    <input name="password" onChange={onChange} type="password" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-key fa-lg me-3 fa-fw mt-4"></i>
                                                <div className="flex-fill mb-0">
                                                    <label className="form-label">Repeat your password</label>
                                                    <input name="passwordConfirmation" onChange={onChange} type="password" className="form-control" />
                                                </div>
                                            </div>


                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-house fa-lg me-3 fa-fw justify-self-end mt-4"></i>
                                                <div className="flex-fill mb-0">
                                                    <label className="form-label">I am:</label>
                                                    <select name="typeOfUser" onChange={onChange} className="form-select" aria-label="select options">
                                                        <option value="tenant">Someone looking for a home</option>
                                                        <option value="owner">A property owner</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-2">
                                                Already have an account ? <Link to="/login">Login</Link>
                                                <label className="form-check-label">
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-outline-secondary">Register</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Register;
