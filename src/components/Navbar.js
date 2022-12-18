import React, { useState } from "react";
import '../css/Navbar.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="white">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          {/* <img
            src={Logo}
            alt="Logo Image"
            style={{ width: "150px", height: "150px" }}
          /> */}
          <h2 className="my-0">DWELLINN</h2>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Login
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          {/* <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
            <input
              type="search"
              className="form-control"
              placeholder="Enter zipcode"
              aria-label="Search"
            />
            <MDBBtn color="dark">
              <i class="fas fa-search"></i>
            </MDBBtn>
          </form> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
