import { React, useState } from 'react';
import Logo from '../../assets/NavbarLogo.png';
import { Link } from 'react-router-dom';

const ConfirmRegister = ({ confirmRegistration }) => {
    const [authCode, setAuthCode] = useState('');
    const onChange = (e) => {
        e.persist();
        setAuthCode(() => (e.target.value));
    }

    return (
        <section className="mt-2" style={{ backgroundColor: "#eee" }} >
            <div className="container mt-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center align-items-center">

                                    <div className="col-md-9 col-lg-5 col-xl-5 d-flex align-items-center order-1">
                                        <img src={Logo}
                                            className="img-fluid" alt="dwellinn logo" />
                                    </div>

                                    <div className="col-md-9 col-lg-5 col-xl-5 order-2 order-lg-1 mx-auto">
                                        <p className="text-center h5 fw-bold mb-2 mx-1 mx-md-4 mt-4">Please check your email you should have received an authorization code.</p>

                                        <form className="mx-1 mx-md-4" onSubmit={e => confirmRegistration(e, authCode)}>
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-key fa-lg me-3 fa-fw mt-4"></i>
                                                <div className="form flex-fill mb-0">
                                                    <label className="form-label mx-auto">Authorization Code</label>
                                                    <input name="authCode" onChange={onChange} type="text" className="form-control" />
                                                </div>
                                            </div>


                                            <div className="form-check d-flex justify-content-center mb-2">
                                                <Link to="#">Didn't receive a code?</Link>
                                                <label className="form-check-label">
                                                </label>
                                            </div>


                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-outline-secondary">Submit</button>
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
    )

}

export default ConfirmRegister;