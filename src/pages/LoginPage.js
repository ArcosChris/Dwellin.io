import { React, useState } from 'react';
import '../css/LoginPage.css';
import Logo from '../assets/NavbarLogo.png'
import { Link } from 'react-router-dom';




const initialFormState = {
  username: '', password: ''
};


function LoginPage({ userLogin }) {

  const [login, setLogin] = useState(initialFormState);

  const onChange = (e) => {
    e.persist();
    setLogin(() => ({ ...login, [e.target.name]: e.target.value }));
  }

  return (
    <section className="mt-2" style={{ backgroundColor: "#eee" }} >
      <div className="container mt-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center align-items-center">

                  <div className="col-md-9 col-lg-5 col-xl-5 d-flex align-items-center order-1 justify-content-center">
                    <img src={Logo}
                      className="img-fluid" alt="dwellinn logo" />
                  </div>

                  <div className="col-md-9 col-lg-5 col-xl-5 order-2 order-lg-1 mx-auto">

                    <form className="mx-1 mx-md-4" onSubmit={e => userLogin(e, login)}>


                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw mt-4"></i>
                        <div className="form flex-fill mb-0">
                          <label className="form-label mx-auto">Email</label>
                          <input name="username" onChange={onChange} type="email" className="form-control" />
                        </div>
                      </div>



                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-key fa-lg me-3 fa-fw mt-4"></i>
                        <div className="form flex-fill mb-0">
                          <label className="form-label mx-auto">Password</label>
                          <input name="password" onChange={onChange} type="password" className="form-control" />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-2">
                        <Link to="#">Forgot password?</Link>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-outline-secondary">Submit</button>
                      </div>

                      <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-0">
                        <p className="mb-0">Don't have an account?</p>
                        <Link to="/register" className='mx-2 text-muted block'>Register</Link>
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

export default LoginPage;
