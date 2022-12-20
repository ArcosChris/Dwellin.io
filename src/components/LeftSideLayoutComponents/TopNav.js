import React, { useState } from "react";
import '../../css/Navbar.css';
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
    MDBBtn
} from "mdb-react-ui-kit";


// Used for Leftsidebar layout
const TopNav = () => {
    const [showNavRight, setShowNavRight] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)

    const handleToggle = () => {
        document.body.classList.toggle('sb-sidenav-toggled');
    };

    window.addEventListener('resize', function (event) {
        setWidth(this.window.innerWidth);
        if (width >= 768) {
            this.document.body.classList.remove('sb-sidenav-toggled');
        }
    })

    return (
        <MDBNavbar expand="lg" light bgColor="white" className='pb-0'>
            <MDBContainer fluid className="px-3 justify-content-between">

                <MDBBtn
                    id="toggleSettings"
                    className="btn btn-light"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    onClick={handleToggle}
                >
                    <MDBIcon fas icon="cog" />
                </MDBBtn>

                <MDBNavbarBrand href="/">
                    <h2 className="my-0 mainNavTitle">DWELLINN</h2>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    id="toggleButton"
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
                            <MDBNavbarLink className="navigation-item" aria-current='page' href='/'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className="navigation-item" aria-current="page" href="/about">
                                About
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className="navigation-item" aria-current="page" href="#">
                                Login
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>



    );
}

export default TopNav;